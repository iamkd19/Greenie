import React, { useState, useEffect } from "react";
import axios from "axios";
import UserTable from "./UserTable";
import toast, { Toaster } from "react-hot-toast";

const UserDetails = () => {
  const [users, setUsers] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    // Fetch user data from the backend
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/users");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleSearch = async () => {
    try {
      console.log("Search Name Before Request:", searchName);

      // Send search request to the backend
      const response = await axios.get(
        `http://localhost:5000/api/users/search?name=${searchName}`
      );

      // Update the searchResults state based on the search result
      setSearchResults(response.data);

      console.log("Search Name After Request:", searchName);
      toast.success("Searched Succesfully")
    } catch (error) {
      console.error("Error searching records:", error);
      toast.error("Error While Searching Data")
    }
  };

  useEffect(() => {
    // Log the updated searchResults state
    console.log("Search Results:", searchResults);
  }, [searchResults]); // Watch for changes in the searchResults state

  return (
    <div className="p-4 bg-white rounded shadow">
      {/* Search by name */}
      <div className="mt-8">
        <label className="block text-sm font-medium text-gray-600">
          Search by Name:
        </label>
        <div className="flex">
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
          />
          <button
            type="button"
            className="ml-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
      <h2 className="text-xl font-bold mb-4">User Details</h2>
      {/* Render the UserTable component with the fetched or searched users */}
      <UserTable users={searchResults.length > 0 ? searchResults : users} />
      <Toaster/>
    </div>
  );
};

export default UserDetails;
