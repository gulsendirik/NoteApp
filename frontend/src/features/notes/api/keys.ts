import type { GetNoteProps, GetNotesProps } from "./getNotes";

export const noteKeys = {
  all: [{ entity: "notes" }] as const,
  lists: () => [{ ...noteKeys.all[0], scope: "list" }] as const,
  list: (filters: GetNotesProps) => [{ ...noteKeys.lists()[0], filters }],
  details: () => [{ ...noteKeys.all[0], scope: "details" }] as const,
  detail: (params: GetNoteProps) =>
    [{ ...noteKeys.details()[0], params }] as const,
};
