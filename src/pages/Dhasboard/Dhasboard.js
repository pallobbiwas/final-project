import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";

const Dhasboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div className="container mx-auto mt-20">
      <div class="drawer drawer-mobile">
        <input id="sideBar-dashboard" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
          <h2 className="text-2xl text-pink-700">Dash board</h2>
          <Outlet></Outlet>
        </div>
        <div class="drawer-side bg-indigo-300">
          <label for="sideBar-dashboard" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-50 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link to="/dashboard">My appoinment</Link>
            </li>
            <li>
              <Link to="/dashboard/review">My review</Link>
            </li>
            {admin && (
              <li>
                <Link to="/dashboard/alluser">All user</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dhasboard;
