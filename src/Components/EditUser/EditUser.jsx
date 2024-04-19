import React from "react";
/**
 * Renders a table row with input fields to edit the name, email, and Designation of a user.
 *
 * @param {Object} props - The properties object.
 * @param {Object} props.user - The user object to be edited.
 * @param {Array} props.users - The list of all users.
 * @param {Function} props.setUsers - The function to update the list of users.
 * @return {JSX.Element} The table row with input fields for editing the user.
 */
const EditUser = ({ user, users, setUsers }) => {
  /**
   * Updates the name of a user in the users array and updates the state with the new data.
   *
   * @param {Event} event - The event object containing the new name value.
   * @return {void} This function does not return anything.
   */
  function handleName(event) {
    const newName = event.target.value;
    const updatedData = users.map((e) =>
      e.id === user.id ? { ...e, name: newName } : e
    );
    setUsers(updatedData);
  }
  /**
   * A function to handle the email input change event.
   *
   * @param {Event} event - The event object triggered by the email input change.
   * @return {void} This function does not return anything.
   */
  function handleEmail(event) {
    const newEmail = event.target.value;
    const updatedData = users.map((e) =>
      e.id === user.id ? { ...e, email: newEmail } : e
    );
    setUsers(updatedData);
  }
  function handleDesignation(event) {
    const newDesignation = event.target.value;
    console.log(newDesignation);
    const updatedData = users.map((e) =>
      e.id === user.id
        ? { ...e, company: { ...e.company, bs: newDesignation } }
        : e
    );
    setUsers(updatedData);
    console.log(user.company.bs);
  }
  return (
    <tr>
      <td></td>
      <td>
        <input
          type="text"
          value={user.name}
          onChange={handleName}
          name="name"
          placeholder="Enter Name"
        />
      </td>
      <td>
        <input
          type="text"
          value={user.email}
          onChange={handleEmail}
          name="email"
          placeholder="Enter Email"
        />
      </td>
      <td>
        <input
          type="text"
          value={user.company.bs}
          onChange={handleDesignation}
          name="designation"
          placeholder="Enter Designation"
        />
      </td>
      <td>
        <button type="submit">
          <i className="fa-regular fa-floppy-disk"></i>
        </button>
      </td>
    </tr>
  );
};

export default EditUser;
