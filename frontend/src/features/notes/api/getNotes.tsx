import type { GetNotesResponse, GetNotesResponseObject } from "../types/index";
import { useQuery } from "react-query";
import { noteKeys } from "./keys";
import { ExtractFnReturnType, QueryConfig } from "../../../lib/react-query";
import { axios } from "../../../lib/axios";

export const getNotes: QueryFnType = async ({ page, size, sort, filters }) => {
  const response: GetNotesResponse = await axios.get(`/note/list`, {
    params: {
      page,
      size,
      sort,
      ...filters,
    },
  });
  return response.notes;
};

type QueryFnType = (props: GetNotesProps) => Promise<GetNotesResponseObject>;

export type GetNoteProps = {
  id: number;
};

export type GetNotesProps = {
  page: number;
  size?: number;
  sort?: string[];
  filters?: NoteFilter;
};

type NoteFilter = {};

export const useNotes = (
  filters: GetNotesProps,
  config?: QueryConfig<QueryFnType>
) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: noteKeys.list(filters),
    queryFn: ({ queryKey }) => {
      const [{ filters }] = queryKey as ReturnType<typeof noteKeys.list>;
      return getNotes(filters);
    },
  });
};
