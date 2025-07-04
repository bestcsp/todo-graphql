import { gql } from "apollo-server";



export const todoTypeDefs = gql`
  type Todo {
    id: ID!
    title: String!
    completed: Boolean!
  }

  type Query {
    getTodos: [Todo!]!
  }

  type Mutation {
    createTodo(title: String!): Todo!
    toggleTodo(id: ID!): Todo!
    deleteTodo(id: ID!): Boolean!
  }
`;
