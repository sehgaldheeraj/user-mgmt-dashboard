import React from "react";

const TableView = ({ users, setUsers }) => {
  return (
    <form>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Edit/Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => (
            <tr key={i}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.lastname}</td>
              <td>{user.email}</td>
              <td>
                {user.company.bs
                  .split(" ")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}
              </td>
              <td>
                <button type="button" /*onClick={() => handleEdit(user.id)}*/>
                  <i className="fa-regular fa-pen-to-square"></i>
                </button>
                <button type="button" /*onClick={() => handleDelete(user.id)}*/>
                  <i className="fa-solid fa-trash"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </form>
  );
};

export default TableView;
