import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import About from "./pages/About/About";
import Appoinment from "./pages/Appoinment/Appoinment";
import Alluser from "./pages/Dhasboard/Alluser";
import Dhasboard from "./pages/Dhasboard/Dhasboard";
import Myappoinment from "./pages/Dhasboard/Myappoinment";
import Myreview from "./pages/Dhasboard/Myreview";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import RequerAuth from "./pages/Login/RequerAuth";
import RiquerAdmin from "./pages/Login/RiquerAdmin";
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
        <Route
          path="/dashboard"
          element={
            <RequerAuth>
              <Dhasboard />
            </RequerAuth>
          }
        >
          <Route index element={<Myappoinment></Myappoinment>}></Route>
          <Route path="review" element={<Myreview></Myreview>}></Route>
          <Route
            path="alluser"
            element={
              <RiquerAdmin>
                <Alluser></Alluser>
              </RiquerAdmin>
            }
          ></Route>
        </Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
