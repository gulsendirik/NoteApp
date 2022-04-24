import { useMutation } from "react-query";
import { axios } from "../../../lib/axios";
import { MutationConfig, queryClient } from "../../../lib/react-query";
import type { CreateNoteDTO, GetNotesResponseObject } from "../types";
import { noteKeys } from "./keys";

export const createNote = (note: CreateNoteDTO) => {
  return axios.post("/note/add", note);
};

type CreateNoteOptions = {
  config?: MutationConfig<typeof createNote>;
};

export const useCreateNote = ({ config }: CreateNoteOptions = {}) => {
  return useMutation({
    ...config,
    onMutate: async (note: CreateNoteDTO) => {
      await queryClient.cancelQueries(noteKeys.lists());

      const previousNotes = queryClient.getQueryData<GetNotesResponseObject>(
        noteKeys.lists()
      );

      queryClient.setQueryData(noteKeys.lists(), {
        ...previousNotes,
        data: [...(previousNotes?.data || []), note],
      });

      return { previousNotes, note };
    },
    onError: (_1, _2, context) => {
      if (context?.previousNotes) {
        queryClient.setQueryData(noteKeys.lists(), context.previousNotes);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries(noteKeys.lists());
    },
    mutationFn: createNote,
  });
};
