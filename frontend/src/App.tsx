import { ChakraProvider, theme } from "@chakra-ui/react";
import NoteList from "./components/Notes/NoteList";

export const App = () => (
  <ChakraProvider theme={theme}>
    <NoteList />
  </ChakraProvider>
);
