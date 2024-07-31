import React from 'react';  // Make sure to import React if not already
import Layout from "./components/layout/Layout";
import './App.css';
import Admin from "./components/Admin";
import Teacher from './components/Teacher/Teacher';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
        <Router>
      <Layout>
        <Routes>
            <Route path="/Home"  /> 
            <Route path="/Admin" element={ <Admin/>} />
            <Route path="/Teacher" element={<Teacher/>} />
          </Routes>
     
     
      
      </Layout>
        </Router>
    </>
  );
}

export default App;
