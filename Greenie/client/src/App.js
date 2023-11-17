// frontend/src/App.js

import React from "react";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-500 text-white p-4">
        <h1 className="text-2xl font-bold">User Management Dashboard</h1>
      </header>
      <main className="p-4">
        {/* Render the Dashboard component */}
        <Dashboard />
      </main>
    </div>
  );
}

export default App;
