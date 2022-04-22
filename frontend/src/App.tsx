import * as React from "react";
import {
  ChakraProvider,
  Box,
  Grid,
  theme,
  Input,
  Button,
  GridItem,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { CheckIcon, DeleteIcon, EditIcon, MinusIcon } from "@chakra-ui/icons";
import ReactPaginate from "react-paginate";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box
      bg="black"
      w="100%"
      p={3}
      color="white"
      fontWeight="bold"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Grid
        w="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        gridGap={2}
      >
        <EditIcon />
        <Text w="48%">Basic Notes List</Text>
      </Grid>
    </Box>
    <Box bg="white" w="100%" p={3}></Box>
    <Box w="100%" display="flex" alignItems="center" justifyContent="center">
      <Grid
        w="50%"
        templateColumns="repeat(2, 1fr)"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Input w="100%" h="10" />
        <Button w="20%" h="10" colorScheme="blue">
          Add Note
        </Button>
      </Grid>
    </Box>
    <Box bg="white" w="100%" p={3}></Box>
    <Box w="100%" display="flex" alignItems="center" justifyContent="center">
      <Grid w="100%" display="flex" alignItems="center" justifyContent="center">
        <GridItem w="50%" h="400" border="1px solid #E2E8F0">
          <GridItem
            w="100%"
            h="50"
            bg="lightgray"
            display="flex"
            alignItems="center"
            paddingLeft="10px"
          >
            <Text fontWeight="bold">Notes</Text>
          </GridItem>
          <GridItem
            w="100%"
            h="50"
            border="1px solid #E2E8F0"
            display="flex"
            alignItems="center"
            paddingLeft="10px"
          >
            <Text w="90%">Note 1</Text>
            <Button w="5%" h="35" bg="limegreen" textColor="white">
              <CheckIcon />
            </Button>
            <Button w="5%" h="35" margin="2" bg="lightgray">
              <DeleteIcon />
            </Button>
          </GridItem>
          <GridItem
            w="100%"
            h="50"
            border="1px solid #E2E8F0"
            display="flex"
            alignItems="center"
            paddingLeft="10px"
          >
            <Text w="90%">Note 2</Text>
            <Button w="5%" h="35" bg="red" textColor="white">
              <MinusIcon />
            </Button>
            <Button w="5%" h="35" margin="2" bg="lightgray">
              <DeleteIcon />
            </Button>
          </GridItem>
        </GridItem>
      </Grid>
    </Box>
    <Box bg="white" w="100%" p={3}></Box>
    <Box w="100%" display="flex" alignItems="center" justifyContent="center">
      <GridItem>
       {/*  <ReactPaginate
          breakLabel="..."
          nextLabel=">>"
          pageRangeDisplayed={5}
          pageCount={2}
          previousLabel="<<"
        /> */}
      </GridItem>
    </Box>
  </ChakraProvider>
);
