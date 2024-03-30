import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react"; // Import useState from react

function App() {
  const [usersData, setUsers] = useState([]); // [state, setState]
  const [todoListData, setTodoList] = useState([]); // [state, setState]

  const users = () => {
    fetch("http://localhost:3000/users")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
        setTodoList([]);
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
        setUsers([]);
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
      <div>
        {usersData.map(
          (
            user // Remove the '@' symbol
          ) => (
            <div key={user.id}>
              <h3>{user.name}</h3>
              <p>{user.email}</p>
            </div>
          )
        )}
      </div>
      <div>
        {todoListData.map((todo) => (
          <div key={todo.id}>
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
