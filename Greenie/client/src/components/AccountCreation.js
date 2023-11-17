import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';

const AccountCreation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    number: "",
    city: "",
    pinCode: "",
    country: "",
    date: "", // Added date field
  });

  const capitalizeFirstLetter = (str) => {
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "date" ? new Date(value) : value,
    }));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      // Send data to the backend on form submission
      const response = await axios.post(
        "http://localhost:5000/api/createAccount",
        formData
      );
      console.log(response.data); // Log the response from the backend
      toast.success("Account Created Succesfully")
    } catch (error) {
      console.error("Error creating account:", error);
      toast.error("Account Creation Error")
    }
  };

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Account Creation</h2>
      {/* Render the account creation form */}
      <form onSubmit={handleFormSubmit}>
        {/* Input fields for name, email, password, number, city, pin code, country, and date */}
        {Object.entries(formData).map(([field, value]) => (
          <div key={field} className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              {capitalizeFirstLetter(field === "date" ? "Date of Creation" : field)}
            </label>
            {field === "date" ? (
              <input
                type="date"
                name={field}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                value={value ? new Date(value).toISOString().split('T')[0] : ""}
                onChange={handleFormChange}
              />
            ) : (
              <input
                type="text"
                name={field}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                value={value}
                onChange={handleFormChange}
              />
            )}
          </div>
        ))}

        {/* Submit button */}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
        >
          Create Account
        </button>
      </form>
      <Toaster/>
    </div>
  );
};

export default AccountCreation;
