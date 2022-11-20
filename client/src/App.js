import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import Complaint from "./pages/complaints/Complaint";
import Tcomplaint from "./pages/trackcomplaints/Tcomplaint";
import Furniture from "./pages/furniture/Furniture";
import Maintenance from "./pages/maintenance/Maintenance";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/complaints" element={<Complaint/>}/>
        <Route path="/trackcomplaints" element={<Tcomplaint/>}/>
        <Route path="/furniture" element={<Furniture/>}/>
        <Route path="/maintenance" element={<Maintenance/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
