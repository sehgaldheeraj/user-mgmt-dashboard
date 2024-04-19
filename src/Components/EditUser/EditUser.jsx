import React from "react";

/**
 * Renders a table row with input fields to edit the first name, last name, email, and Designation of a user.
 *
 * @param {Object} props - The properties object.
 * @param {Object} props.user - The user object to be edited.
 * @param {Array} props.users - The list of all users.
 * @param {Function} props.setUsers - The function to update the list of users.
 * @return {JSX.Element} The table row with input fields for editing the user.
 */
const EditUser = ({ user, users, setUsers }) => {
  /**
   * Updates the first name of a user in the users array and updates the state with the new data.
   *
   * @param {Event} event - The event object containing the new first name value.
   * @return {void} This function does not return anything.
   */
  function handleFirstName(event) {
    const newFirstName = event.target.value;
    const updatedData = users.map((e) =>
      e.id === user.id
        ? { ...e, name: `${newFirstName} ${user.name.split(" ")[1]}` }
        : e
    );
    setUsers(updatedData);
  }

  /**
   * Updates the last name of a user in the users array and updates the state with the new data.
   *
   * @param {Event} event - The event object containing the new last name value.
   * @return {void} This function does not return anything.
   */
  function handleLastName(event) {
    const newLastName = event.target.value;
    const updatedData = users.map((e) =>
      e.id === user.id
        ? { ...e, name: `${user.name.split(" ")[0]} ${newLastName}` }
        : e
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

  /**
   * A function to handle the designation input change event.
   *
   * @param {Event} event - The event object triggered by the designation input change.
   * @return {void} This function does not return anything.
   */
  function handleDesignation(event) {
    const newDesignation = event.target.value;
    const updatedData = users.map((e) =>
      e.id === user.id
        ? { ...e, company: { ...e.company, bs: newDesignation } }
        : e
    );
    setUsers(updatedData);
  }

  return (
    <tr>
      <td></td>
      <td>
        <input
          type="text"
          value={user.name.split(" ")[0]} // First Name
          onChange={handleFirstName}
          name="firstName"
          placeholder="Enter First Name"
        />
      </td>
      <td>
        <input
          type="text"
          value={user.name.split(" ")[1]} // Last Name
          onChange={handleLastName}
          name="lastName"
          placeholder="Enter Last Name"
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
