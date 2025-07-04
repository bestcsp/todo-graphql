import { Todo } from "../../models/Todo";

export const todoResolvers = {
  Query: {
    getTodos: async () => await Todo.find(),
  },
  Mutation: {
    createTodo: async (_: any, { title }: { title: string }) => {
      const todo = new Todo({ title });
      await todo.save();
      return todo;
    },
    toggleTodo: async (_: any, { id }: { id: string }) => {
      const todo = await Todo.findById(id);
      if (!todo) throw new Error("Todo not found");
      todo.completed = !todo.completed;
      await todo.save();
      return todo;
    },
    deleteTodo: async (_: any, { id }: { id: string }) => {
      await Todo.findByIdAndDelete(id);
      return true;
    },
  },
};
