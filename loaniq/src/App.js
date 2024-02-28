import "./App.css";
<<<<<<< Updated upstream
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {React} from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Apply from "./Pages/Apply";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

function App() {
  return (
    <Router>
      <div class="d-flex flex-column min-vh-100">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/apply" element={<Apply />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
        </Routes>
        <Footer />
        <style jsx>
          {`
            body {
              background-color: #f7f3e8;
              font-family: 'Poppins', sans-serif;
            }
          `}
        </style>
      </div>
    </Router>
=======
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Pages/Home";

function App() {
  return (
    <div class="d-flex flex-column min-vh-100">
      <Header />
      <Home />
      <Footer />
      <style jsx>
        {`
          body {
            background-color: #f7f3e8;
          }
        `}
      </style>
    </div>
>>>>>>> Stashed changes
  );
}

export default App;
