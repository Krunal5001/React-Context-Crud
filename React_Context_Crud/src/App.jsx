import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalProvider from "./context/GlobalState";
import Home from './components/Home';
import "bootstrap/dist/css/bootstrap.min.css";
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';

const App = () => {
  return (
    <GlobalProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddUser />} />
          <Route path="/edit/:id" element={<EditUser />} />
        </Routes>
      </Router>
    </GlobalProvider>
  )
}

export default App