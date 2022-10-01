import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import useUsers from "../users";

const User = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { getUserById, deleteUser } = useUsers();
  const user = getUserById(parseInt(params.id));

  const handleDelete = () => {
    deleteUser(user.id);
    navigate("/users", { replace: true });
  }

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div>
      <h1>User</h1>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <p>{user.address.street}</p>
      <p>{user.address.suite}</p>
      <p>{user.address.city}</p>
      <p>{user.address.zipcode}</p>
      <br />
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default User;