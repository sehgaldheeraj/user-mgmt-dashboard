import React, { useState } from "react";
import { API_URL } from "../Dashboard/Dashboard";
import "./addUser.css";
const AddUser = ({ users, setUsers }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    designation: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
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
        name: "",
        email: "",
        designation: "",
      });

      console.log("User added successfully");
    } catch (error) {
      console.error("Error adding user:", error.message);
    }
  };

  return (
    <div className="form-container align-center">
      <form onSubmit={handleSubmit} className="form-custom">
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
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
