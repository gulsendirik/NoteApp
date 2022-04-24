import { useToast } from "@chakra-ui/react";
import { useMutation } from "react-query";
import { axios } from "../../../lib/axios";
import { MutationConfig, queryClient } from "../../../lib/react-query";
import { noteKeys } from "./keys";

export const updateNote = ({ noteID, isDone }: UpdateNoteProps) => {
  return axios.put(`/note/update/${noteID}`, {
    isDone: isDone,
  });
};

type UpdateNoteProps = {
  noteID: number;
  isDone: boolean;
};

type UpdateNoteOptions = {
  config?: MutationConfig<typeof updateNote>;
};

export const useUpdateNote = ({ config }: UpdateNoteOptions = {}) => {
  const toast = useToast();
  return useMutation({
    ...config,
    onError: (_1, _2, context) => {
      toast({
        title: "Error",
        position: "top-right",
        status: "error",
        isClosable: true,
      });
    },
    onSuccess: (_1, { noteID, isDone }) => {
      queryClient.invalidateQueries(noteKeys.all);
      toast({
        title: "Note updated successfully",
        position: "top-right",
        status: "success",
        isClosable: true,
      });
    },
    mutationFn: updateNote,
  });
};
