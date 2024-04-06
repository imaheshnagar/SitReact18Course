import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react"; // Import useState from react
import User from "./Components/User";
import TodoList from "./Components/TodoList";
import AddToDo from "./Components/AddToDo";

function App() {
  const [isUsers, setIsUsers] = useState(false); // [state, setState]
  const [usersData, setUsers] = useState([]); // [state, setState]
  const [todoListData, setTodoList] = useState([]); // [state, setState]

  const users = () => {
    fetch("http://localhost:3000/users")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
        setIsUsers(true);
        // Handle the data here
      })
      .catch((error) => {
        console.log(error);
        // Handle any errors here
      });
  };

  const todolist = () => {
    fetch("http://localhost:3000/todolist")
      .then((response) => response.json())
      .then((data) => {
        setTodoList(data);
        setIsUsers(false);
        console.log(data);
        // Handle the data here
      })
      .catch((error) => {
        console.log(error);
        // Handle any errors here
      });
  };

  return (
    <div className="App">
      <h1>React App</h1>
      <button onClick={users}>Users</button>
      <button onClick={todolist}>Todo List</button>
      {isUsers ? (
        <User usersData={usersData} />
      ) : (
        <TodoList todoListData={todoListData} />
      )}
      <AddToDo></AddToDo>
    </div>
  );
}

export default App;
