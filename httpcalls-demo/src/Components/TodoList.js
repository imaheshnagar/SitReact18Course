import React from "react";

const TodoList = (props) => {
  const { todoListData } = props;
  return (
    <div>
      {todoListData.map((todo) => (
        <div key={todo.id}>
          <h3>{todo.title}</h3>
          <p>{todo.description}</p>
          <span style={{ color: "red" }}>{todo.completed && "Completed"}</span>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default TodoList;
