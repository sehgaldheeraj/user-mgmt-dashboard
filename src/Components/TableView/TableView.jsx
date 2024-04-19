import React, { useState } from "react";
import EditUser from "../EditUser/EditUser";
import { API_URL } from "../Dashboard/Dashboard";
import "./tableView.css";
/**
 * Renders a table view component that displays a list of users.
 *
 * @param {Array} records - An array of user objects to be displayed in the table.
 * @param {Array} users - The complete list of user objects.
 * @param {Function} setUsers - A function to update the list of user objects.
 * @param {Function} handleDelete - A function to handle the deletion of a user.
 * @return {JSX.Element} The rendered table view component.
 */
const TableView = ({ records, users, setUsers, handleDelete }) => {
  const [editState, setEditState] = useState(-1);
  /**
   * Sets the edit state to the provided ID.
   *
   * @param {number} id - The ID of the item to be edited.
   * @return {void} This function does not return anything.
   */
  const handleEdit = (id) => {
    setEditState(id);
  };
  /**
   * Handles the update of user data based on form input.
   *
   * @param {Event} event - The event triggering the update.
   * @return {void} This function does not return anything.
   */
  async function handleUpdate(event) {
    event.preventDefault();

    // Extract form data
    const name = event.target.elements.name.value;
    const email = event.target.elements.email.value;
    const designation = event.target.elements.designation.value;

    try {
      // Fetch the current user data from the API
      const response = await fetch(`${API_URL}/${editState}`);
      if (!response.ok) {
        throw new Error("Failed to fetch user data for editing");
      }
      const userData = await response.json();

      // Updated the user data with edited values
      const updatedUserData = { ...userData, name, email, designation };

      // Sent PUT request to update user data
      const updateResponse = await fetch(`${API_URL}/${editState}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedUserData),
      });

      if (!updateResponse.ok) {
        throw new Error("Failed to update user data");
      }

      // Updated local state with the edited data
      const updatedUsers = users.map((user) =>
        user.id === editState ? updatedUserData : user
      );
      setUsers(updatedUsers);
      setEditState(-1);
      console.log("User data updated successfully");
    } catch (error) {
      console.error("Error updating user data:", error.message);
    }
  }

  return (
    <form onSubmit={handleUpdate}>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Edit/Delete</th>
          </tr>
        </thead>
        <tbody>
          {records.map((user, i) =>
            editState === user.id ? (
              <EditUser user={user} users={users} setUsers={setUsers} />
            ) : (
              <tr key={i}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.company.bs
                    .split(" ")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" | ")}
                </td>
                <td>
                  <button type="button" onClick={() => handleEdit(user.id)}>
                    <i className="fa-regular fa-pen-to-square"></i>
                  </button>
                  <button type="button" onClick={() => handleDelete(user.id)}>
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </form>
  );
};

export default TableView;
