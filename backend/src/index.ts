import { ApolloServer } from "apollo-server";
import { typeDefs } from "./schema/typeDefs";
import { todoResolvers } from "./resolvers/todoResolvers";
import { connectDB } from "./config";

const startServer = async () => {
  await connectDB();

  const server = new ApolloServer({
    typeDefs,
    resolvers: todoResolvers,
  });

  server.listen({ port: 4000 }).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
};

startServer();
