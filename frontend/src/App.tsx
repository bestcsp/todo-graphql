import { ApolloProvider } from "@apollo/client";
import client from "./lib/apolloClient";
import TodoApp from "./components/TodoApp";

function App() {
  return (
    <ApolloProvider client={client}>
      <TodoApp />
    </ApolloProvider>
  );
}

export default App;
