import React from "react";

function DataTable(props) {
  return (
    <table className="text-center">
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Cell</th>
      </tr>
      <tr>
        <td>{props.filteredUsers.name}</td>
        <td>{props.filteredUsers.email}</td>
        <td>{props.filteredUsers.cell}</td>
      </tr>

    </table>
  );
}

export default DataTable;
