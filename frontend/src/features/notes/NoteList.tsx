import { ChangeEvent, Fragment, useState } from "react";
import { Box, Grid, Input, Button, GridItem, Text } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import { css } from "@emotion/react";
import ReactPaginate from "react-paginate";
import "../../App.css";
import { GetNotesProps, useNotes } from "./api/getNotes";
import type { Note as NoteType } from "./types";
import Note from "./components/Note";
import { useCreateNote } from "./api/createNote";

const btn = css({
  width: "20%",
  height: "10",
  backgroundColor: "#00b7eb",
  color: "white",
  fontSize: 12,
});

const alignItems = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const grid = css({
  width: "100%",
  height: "50",
  border: "1px solid #E2E8F0",
  display: "flex",
  alignItems: "center",
  paddingLeft: "10px",
});

const initialFilters: GetNotesProps = {
  page: 0,
  size: 5,
  sort: [],
  filters: {},
};

const NoteList = () => {
  const [filters, setFilters] = useState(initialFilters);
  const [title, setTitle] = useState("");

  const notesQuery = useNotes(filters);
  const createNoteMutation = useCreateNote();

  const clearTitle = () => setTitle("");

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setTitle(e.target.value);

  const handleCreateNote = () =>
    createNoteMutation.mutate({ title }, { onSuccess: clearTitle });

  return (
    <>
      <Box
        bg="black"
        w="100%"
        p={3}
        color="white"
        fontWeight="bold"
        css={alignItems}
      >
        <Grid w="100%" css={alignItems} gridGap={2}>
          <EditIcon />
          <Text w="48%">Basic Notes List</Text>
        </Grid>
      </Box>
      <Box bg="white" w="100%" p={3}></Box>
      <Box w="100%" css={alignItems}>
        <Grid w="50%" templateColumns="repeat(2, 1fr)" css={alignItems}>
          <Input w="100%" h="10" value={title} onChange={handleTitleChange} />
          <Button css={btn} onClick={handleCreateNote}>
            Add Note
          </Button>
        </Grid>
      </Box>
      <Box bg="white" w="100%" p={3}></Box>
      <Box w="100%" css={alignItems}>
        <Grid w="100%" css={alignItems}>
          <GridItem w="50%" h="400" border="1px solid #E2E8F0">
            <GridItem h="50" bg="lightgray" css={grid}>
              <Text fontWeight="bold">Notes</Text>
            </GridItem>
            {notesQuery.isSuccess &&
              notesQuery?.data?.data.map((note: NoteType) => {
                return (
                  <Fragment key={note.id}>
                    <Note note={note} />
                  </Fragment>
                );
              })}
          </GridItem>
        </Grid>
      </Box>
      <Box bg="white" w="100%" p={3}></Box>
      {notesQuery.isSuccess && (
        <ReactPaginate
          forcePage={filters.page - 1}
          breakLabel="..."
          nextLabel=">"
          pageRangeDisplayed={5}
          pageCount={notesQuery.data?.last_page}
          previousLabel="<"
          containerClassName={"paginationBtns"}
          previousClassName={"previousBtn"}
          nextClassName={"nextBtn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
          onPageChange={({ selected }) => {
            setFilters((prev) => ({ ...prev, page: selected + 1 }));
          }}
        />
      )}
    </>
  );
};

export default NoteList;
