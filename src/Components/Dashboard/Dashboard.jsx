import React, { useEffect, useState } from "react";
import TableView from "../TableView/TableView";
import Pagination from "../Pagination/Pagination";
const API_URL = "https://jsonplaceholder.typicode.com/users";
const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;
  /**
   * Slices the users data based on the current page.
   *
   */
  const lastIdx = currentPage * usersPerPage;
  const firstIdx = lastIdx - usersPerPage;
  const records = users.slice(firstIdx, lastIdx);
  const numOfPages = Math.ceil(users.length / usersPerPage);
  const numArray = [...Array(numOfPages + 1).keys()].slice(1);
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

  /**
   * Deletes a user from the list of users based on the provided ID.
   *
   * @param {number} id - The ID of the user to be deleted.
   * @return {void} This function does not return anything.
   */
  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };
  return (
    <>
      <TableView
        records={records}
        users={users}
        setUsers={setUsers}
        handleDelete={handleDelete}
      />
      <Pagination
        currentPage={currentPage}
        numArray={numArray}
        numOfPages={numOfPages}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default Dashboard;
