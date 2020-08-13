import React from "react";

function DataTable(props) {
  console.log(props)
  return (

    <table className="text-center">
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Cell</th>
      </tr>
      <tr>
        <td>{props.users.name}</td>
        <td>{props.users.email}</td>
        <td>{props.users.cell}</td>
      </tr>
      
    </table>
    
  );
   
}


export default DataTable;
