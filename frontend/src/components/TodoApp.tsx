import { gql, useQuery, useMutation } from "@apollo/client";
import { useState } from "react";

const GET_TODOS = gql`
  query GetTodos {
    getTodos {
      id
      title
      completed
    }
  }
`;

const CREATE_TODO = gql`
  mutation CreateTodo($title: String!) {
    createTodo(title: $title) {
      id
      title
      completed
    }
  }
`;

const TOGGLE_TODO = gql`
  mutation ToggleTodo($id: ID!) {
    toggleTodo(id: $id) {
      id
      completed
    }
  }
`;

const DELETE_TODO = gql`
  mutation DeleteTodo($id: ID!) {
    deleteTodo(id: $id)
  }
`;

export default function TodoApp() {
  const { data, loading, refetch } = useQuery(GET_TODOS);
  const [createTodo] = useMutation(CREATE_TODO);
  const [toggleTodo] = useMutation(TOGGLE_TODO);
  const [deleteTodo] = useMutation(DELETE_TODO);
  const [title, setTitle] = useState("");

  const handleAddTodo = async () => {
    if (!title.trim()) return;
    await createTodo({ variables: { title } });
    setTitle("");
    refetch();
  };

  const handleToggle = async (id: string) => {
    await toggleTodo({ variables: { id } });
    refetch();
  };

  const handleDelete = async (id: string) => {
    await deleteTodo({ variables: { id } });
    refetch();
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
      <h1>GraphQL Todo App</h1>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="New todo"
      />
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {data.getTodos.map((todo: any) => (
          <li key={todo.id} style={{ display: "flex", justifyContent: "space-between" }}>
            <span
              onClick={() => handleToggle(todo.id)}
              style={{ cursor: "pointer", textDecoration: todo.completed ? "line-through" : "none" }}
            >
              {todo.title}
            </span>
            <button onClick={() => handleDelete(todo.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
