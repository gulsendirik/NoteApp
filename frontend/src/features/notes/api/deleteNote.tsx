import { useToast } from "@chakra-ui/react";
import { useMutation } from "react-query";
import { axios } from "../../../lib/axios";
import { MutationConfig, queryClient } from "../../../lib/react-query";
import { noteKeys } from "./keys";

export const deleteNote = ({ noteID }: DeleteNotesProps) => {
  return axios.delete(`note/delete/${noteID}`);
};

type DeleteNotesProps = {
  noteID: number;
};

type DeleteNotesOptions = {
  config?: MutationConfig<typeof deleteNote>;
};

export const useDeleteNote = ({ config }: DeleteNotesOptions = {}) => {
  const toast = useToast();
  return useMutation({
    ...config,
    onMutate: async ({ noteID }: DeleteNotesProps) => {
      await queryClient.cancelQueries(noteKeys.detail({ id: noteID }));
      await queryClient.cancelQueries(noteKeys.lists());

      const previousNote: { id?: number } =
        queryClient.getQueryData(noteKeys.detail({ id: noteID })) || {};

      return { previousNote, noteID };
    },
    onError: (_1, _2, context) => {
      if (context?.previousNote?.id) {
        queryClient.setQueryData(
          noteKeys.detail({ id: context.previousNote.id }),
          context.previousNote
        );
      }
      toast({
        title: "Error",
        position: "top-right",
        status: "error",
        isClosable: true,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries(noteKeys.all);
      toast({
        title: "Note deleted successfully",
        position: "top-right",
        status: "success",
        isClosable: true,
      });
    },
    mutationFn: deleteNote,
  });
};
