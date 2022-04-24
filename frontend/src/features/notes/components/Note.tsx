import { CheckIcon, DeleteIcon, MinusIcon } from "@chakra-ui/icons";
import { Button, GridItem, Text } from "@chakra-ui/react";
import { css } from "@emotion/react";
import { useDeleteNote } from "../api/deleteNote";
import { useUpdateNote } from "../api/updateNote";
import type { Note as NoteType } from "../types";

const grid = css({
  width: "100%",
  height: "50",
  border: "1px solid #E2E8F0",
  display: "flex",
  alignItems: "center",
  paddingLeft: "10px",
});

const actionBtn = css({
  width: "5%",
  height: "35",
});

type NoteProps = {
  note: NoteType;
};

const Note = ({ note }: NoteProps) => {
  const updateNoteMutation = useUpdateNote();
  const deleteNoteMutation = useDeleteNote();

  return (
    <GridItem css={grid}>
      {note.isDone ? (
        <Text w="90%" as="del">
          {note.title}
        </Text>
      ) : (
        <Text w="90%">{note.title}</Text>
      )}
      <Button
        bg={note.isDone ? "red" : "limegreen"}
        colorScheme={note.isDone ? "red" : "limegreen"}
        textColor="white"
        css={actionBtn}
        onClick={() => {
          updateNoteMutation.mutateAsync({
            noteID: note.id,
            isDone: true,
          });
        }}
        isLoading={updateNoteMutation.isLoading}
      >
        {note.isDone ? <MinusIcon /> : <CheckIcon />}
      </Button>
      <Button
        margin="2"
        bg="lightgray"
        css={actionBtn}
        onClick={() => {
          deleteNoteMutation.mutateAsync({
            noteID: note.id,
          });
        }}
        isLoading={deleteNoteMutation.isLoading}
      >
        <DeleteIcon />
      </Button>
    </GridItem>
  );
};

export default Note;
