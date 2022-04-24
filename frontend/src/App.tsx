import { ChakraProvider, theme } from "@chakra-ui/react";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./lib/react-query";
import React from "react";
import NoteList from "./features/notes/NoteList";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <QueryClientProvider client={queryClient}>
          <ChakraProvider theme={theme}>
            <NoteList />
            <ReactQueryDevtools />
          </ChakraProvider>
        </QueryClientProvider>
      </div>
    );
  }
}

export default App;
