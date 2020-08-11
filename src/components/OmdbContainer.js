import React, { Component } from "react";
import Nav from "./NavSearch";
import DataTable from "./DataTable";
import API from "../utils/API";


class OmdbContainer extends Component {
   state = {
       users: [{}],
       order: "descend",
       filteredUsers: [{}]
     }

     componentDidMount() {
         API.search().then(results => {
           this.setState({
             users: results.data.results,
             filteredUsers: results.data.results
           });
         });
       }
       render() {
           return (
             <>
               <Nav handleSearchChange={this.handleSearchChange} />
               <div className="data-area">

                 <DataTable
                   headings={this.headings}
                   users={this.state.filteredUsers}
                   handleSort={this.handleSort}
                 />
                    
               </div>
             </>
           );
         }
  
}

export default OmdbContainer;
