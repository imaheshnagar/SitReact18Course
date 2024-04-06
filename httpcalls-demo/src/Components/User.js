import React from "react";

const User = (props) => {
  const { usersData } = props;
  return (
    <div>
      {usersData.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default User;
