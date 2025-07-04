import { ApolloServer } from "apollo-server";
import { connectDB } from "./config";
import { schema } from "./graphql";

const startServer = async () => {
  await connectDB();

  const server = new ApolloServer({
    schema,
  });

  server.listen({ port: 4000 }).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
};

startServer();
