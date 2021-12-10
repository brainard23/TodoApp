import React, { useState } from "react";
import Form from "../ToDoApp/Form";
import TodoList from "../ToDoApp/TodoList";
import styled from "styled-components";
import ToDoTag from "../ToDoTag/ToDoTag";

const ToDoApp = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);

  return (
    <div>
      <div>
        <Tittle>
          <h1>To Do List</h1>
        </Tittle>
        <div>
          <Form
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
          />
        </div>
        <div>
          <ToDoTag
            todos={todos}
            setTodos={setTodos}
            setEditTodo={setEditTodo}
          />
        </div>
        <div>
          <TodoList
            todos={todos}
            setTodos={setTodos}
            setEditTodo={setEditTodo}
          />
        </div>
      </div>
    </div>
  );
};

const Tittle = styled.div`
  margin-left: 25px;
`;

export default ToDoApp;
