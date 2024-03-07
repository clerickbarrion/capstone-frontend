import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Apply from "./Pages/Apply";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Chat from "./Components/Chat";
import AdminLogin from "./Pages/AdminLogin";
import AdminDashboard from "./Pages/AdminDashboard";
import UserDashboard from "./Pages/UserDashboard";
import Payments from "./Pages/Payments";
import ApplySuccess from "./Pages/ApplySuccess";
import Error404 from "./Pages/Error404";
import AccessDenied from "./Components/AccessDenied";

function App() {
  const [activePage, setActivePage] = useState("home");
  const handlePageChange = (page) => {
    setActivePage(page);
  };

  return (
    <Router>
      <div class="d-flex flex-column min-vh-100">
        <Header activePage={activePage} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/about"
            element={<About handlePageChange={handlePageChange} />}
          />
          <Route path="/apply" element={<Apply />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/user/dashboard" element={<UserDashboard />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/apply/success" element={<ApplySuccess />} />
          <Route path="*" element={<Error404 />} />
          <Route path="/403" element={<AccessDenied />} />
        </Routes>
        <Chat />
        <Footer />
        <style jsx>{`
          body {
            background-color: #f7f3e8;
          }
        `}</style>
      </div>
    </Router>
  );
}

export default App;
