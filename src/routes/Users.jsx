import React from "react";
import {
  NavLink,
  useSearchParams,
  Outlet,
  useLocation,
} from "react-router-dom";
import useUsers from "../users";

const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const { getAll } = useUsers();

  const handleSearch = (e) => {
    setSearchParams({ search: e.target.value });
  };

  return (
    <div>
      <h1>Users</h1>
      <input
        value={searchParams.get("search") ?? ""}
        onChange={handleSearch}
        type="text"
        placeholder="Search"
      />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
        }}
      >
        <ul>
          {getAll()
            .filter((user) =>
              user.name
                .toLowerCase()
                .includes((searchParams.get("search") ?? "").toLowerCase())
            )
            .map((user) => (
              <li key={user.id}>
                <NavLink
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? "green" : "",
                  })}
                  to={`/users/${user.id + location.search}`}
                >
                  {user.name}
                </NavLink>
              </li>
            ))}
        </ul>
        <article>
          <Outlet />
        </article>
      </div>
    </div>
  );
};

export default Users;
