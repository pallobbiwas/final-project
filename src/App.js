import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import About from "./pages/About/About";
import Appoinment from "./pages/Appoinment/Appoinment";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import RequerAuth from "./pages/Login/RequerAuth";
import Signup from "./pages/Login/Signup";
import Navbar from "./pages/Shared/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route
          path="/appointment"
          element={
            <RequerAuth>
              <Appoinment />
            </RequerAuth>
          }
        ></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
