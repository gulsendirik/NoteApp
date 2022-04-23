import React from "react";
import { Box, Grid, Input, Button, GridItem, Text } from "@chakra-ui/react";
import { CheckIcon, DeleteIcon, EditIcon, MinusIcon } from "@chakra-ui/icons";

import { css } from "@emotion/react";
import ReactPaginate from "react-paginate";
import "../../App.css";

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

const actionBtn = css({
  width: "5%",
  height: "35",
});

function NoteList() {
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
          <Input w="100%" h="10" />
          <Button css={btn}>Add Note</Button>
        </Grid>
      </Box>
      <Box bg="white" w="100%" p={3}></Box>
      <Box w="100%" css={alignItems}>
        <Grid w="100%" css={alignItems}>
          <GridItem w="50%" h="400" border="1px solid #E2E8F0">
            <GridItem h="50" bg="lightgray" css={grid}>
              <Text fontWeight="bold">Notes</Text>
            </GridItem>
            <GridItem css={grid}>
              <Text w="90%">Note 1</Text>
              <Button bg="limegreen" textColor="white" css={actionBtn}>
                <CheckIcon />
              </Button>
              <Button margin="2" bg="lightgray" css={actionBtn}>
                <DeleteIcon />
              </Button>
            </GridItem>
            <GridItem css={grid}>
              <Text w="90%">Note 2</Text>
              <Button bg="red" textColor="white" css={actionBtn}>
                <MinusIcon />
              </Button>
              <Button margin="2" bg="lightgray" css={actionBtn}>
                <DeleteIcon />
              </Button>
            </GridItem>
          </GridItem>
        </Grid>
      </Box>
      <Box bg="white" w="100%" p={3}></Box>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">>"
        pageRangeDisplayed={5}
        pageCount={5}
        previousLabel="<<"
        containerClassName={"paginationBtns"}
        previousClassName={"previousBtn"}
        nextClassName={"nextBtn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </>
  );
}

export default NoteList;
