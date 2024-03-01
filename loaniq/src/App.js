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
        </Routes>
        <Chat />
        <Footer />
        <style jsx>{`
          // your CSS styles
        `}</style>
      </div>
    </Router>
  );
}

export default App;
