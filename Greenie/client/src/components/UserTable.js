import React from "react";

const UserTable = ({ users }) => {
  console.log("Users in UserTable component:", users);
  // Implement table rendering logic here
  return (
    <table className="w-full border-collapse">
      {/* Table header */}
      <thead>
        <tr>
          <th className="py-2 px-4 border-b bg-gray-100">Name</th>
          <th className="py-2 px-4 border-b bg-gray-100">Email</th>
          <th className="py-2 px-4 border-b bg-gray-100">Number</th>
          <th className="py-2 px-4 border-b bg-gray-100">City</th>
          <th className="py-2 px-4 border-b bg-gray-100">Country</th>
          <th className="py-2 px-4 border-b bg-gray-100">Creation Date</th>
        </tr>
      </thead>
      {/* Table body */}
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td className="py-2 px-4 border-b">{user.name || "-"}</td>
            <td className="py-2 px-4 border-b">{user.email || "-"}</td>
            <td className="py-2 px-4 border-b">{user.number || "-"}</td>
            <td className="py-2 px-4 border-b">{user.city || "-"}</td>
            <td className="py-2 px-4 border-b">{user.country || "-"}</td>
            <td className="py-2 px-4 border-b">{user.date || "-"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
