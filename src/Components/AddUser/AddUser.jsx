import React, { useState } from "react";
import { API_URL } from "../Dashboard/Dashboard";
import "./addUser.css";

/**
 * Renders a form to add a new user to the system.
 *
 * @param {Object} props - The properties object.
 * @param {Array} props.users - The list of all users.
 * @param {Function} props.setUsers - The function to update the list of users.
 * @param {Function} props.setAddUserFlag - The function to set the flag for adding a user.
 * @return {JSX.Element} The form to add a new user.
 */
const AddUser = ({ users, setUsers, setAddUserFlag }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    designation: "",
  });

  /**
   * Updates the form data state based on the input change event.
   *
   * @param {Object} event - The input change event object.
   * @return {void} This function does not return anything.
   */
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  /**
   * Handles the form submission for adding a new user.
   *
   * @param {Event} event - The form submission event.
   * @return {Promise<void>} A promise that resolves when the user is added successfully.
   */
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          company: {
            bs: formData.designation,
          },
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to add user");
      }

      // Simulated successful response by updating local state
      const newUser = await response.json();
      setUsers([...users, newUser]);

      // Resetted the form data
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        designation: "",
      });
      setAddUserFlag(false);
      console.log("User added successfully");
    } catch (error) {
      console.error("Error adding user:", error.message);
    }
  };

  return (
    <div className="form-container align-center">
      <form onSubmit={handleSubmit} className="form-custom">
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Designation:
          <input
            type="text"
            name="designation"
            value={formData.designation}
            onChange={handleInputChange}
            required
          />
        </label>
        <button type="submit">
          <i className="fa-regular fa-floppy-disk"></i>
        </button>
      </form>
    </div>
  );
};

export default AddUser;
