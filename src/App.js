import React from "react";
import OmdbContainer from "./components/User";
import User from "./components/User";
import { BrowserRouter as Router } from 'react-router-dom';

function App() {


  return( 
  <Router>
    <User />
  </Router>
  
  )
  
}


  
export default App;
