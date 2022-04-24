import { PaginatedResponseBase, ResponseBase } from "../../../types/index";

export type NotesResponse = {
  data: Note[];
};

export type Note = {
  id: number;
  isDone: boolean;
  title: string;
};

export type GetNoteResponseObject = {
  notes: Note;
};

export type GetNotesResponseObject = PaginatedResponseBase & NotesResponse;

export type GetNotesResponse = ResponseBase & {
  notes: GetNotesResponseObject;
};

export type CreateNoteDTO = {
  title: string;
};
