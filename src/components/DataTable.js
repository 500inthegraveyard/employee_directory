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
        <td>{props.name}</td>
        <td>{props.email}</td>
        <td>{props.cell}</td>
      </tr>

    </table>
  );
}

export default DataTable;
