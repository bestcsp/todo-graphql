import { mergeTypeDefs, mergeResolvers } from "@graphql-tools/merge";
import { makeExecutableSchema } from "@graphql-tools/schema";

import { todoTypeDefs } from "./typeDefs/todoTypeDefs";
import { todoResolvers } from "./resolvers/todoResolvers";

const typeDefs = mergeTypeDefs([todoTypeDefs]);
const resolvers = mergeResolvers([todoResolvers]);

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
