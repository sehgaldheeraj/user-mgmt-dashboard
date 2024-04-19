import React, { useEffect, useState } from "react";
import TableView from "../TableView/TableView";
const API_URL = "https://jsonplaceholder.typicode.com/users";
const Dashboard = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchUsers();
  }, []);
  /**
   * Fetches users data from the API URL asynchronously.
   *
   */
  const fetchUsers = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setUsers(data);
      console.log(data);
    } catch (error) {
      console.log("Couldn't fetch:", error);
    }
  };
  return (
    <>
      <TableView users={users} setUsers={setUsers} />
    </>
  );
};

export default Dashboard;
