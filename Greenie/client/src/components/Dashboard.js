// frontend/src/components/Dashboard.js

import React, { useState } from "react";
import UserDetails from "./UserDetails";
import AccountCreation from "./AccountCreation";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("userDetails");

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="max-w-2xl mx-auto bg-white rounded shadow p-6">
        {/* Render tabs for User Details and Account Creation */}
        <div className="flex mb-4">
          <button
            className={`flex-1 py-2 px-4 text-white ${
              activeTab === "userDetails" ? "bg-blue-500" : "bg-gray-400"
            }`}
            onClick={() => setActiveTab("userDetails")}
          >
            User Details
          </button>
          <button
            className={`flex-1 py-2 px-4 text-white ${
              activeTab === "accountCreation" ? "bg-blue-500" : "bg-gray-400"
            }`}
            onClick={() => setActiveTab("accountCreation")}
          >
            Account Creation
          </button>
        </div>

        {/* Render the active tab */}
        {activeTab === "userDetails" ? <UserDetails /> : <AccountCreation />}
      </div>
    </div>
  );
};

export default Dashboard;
