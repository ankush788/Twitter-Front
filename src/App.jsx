import Explore from "./Component/ExploreComponent/ExplorePage";
import Profile from "./Component/ProfileComponent/ProfilePage";
import Home from "./Component/Home/HomePage";
import Login from "./Component/LoginComponent/Login";
import Register from "./Component/LoginComponent/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, createContext, useEffect } from "react";
import Follower from "./Component/SidePanel/Follower";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js"; // import to use javascript of bootstrap

//-----------------export user state ----------------//
export const UserContext = createContext();

export default function App() {
  //----------------------------user Data state (used in other component aslo)-----------------------------//
  const [UserData, setUserData] = useState(null);

  //---------------------------------------------------------------//
  useEffect(() => {
    async function createAuthentication() {
      try {
        const response = await axios.get("/route/Authentication", {
          withCredentials: true,
        });

        setUserData(response.data.user);
      } catch (err) {
        console.log(err);
      }
    }

    createAuthentication();
  }, []);

  //---------------------------------------------return code ---------------------------------------//
  return (
    <div className="App">
      <UserContext.Provider value={{ UserData, setUserData }}>
        <Router>
          <Routes>
            <Route path="/" element={UserData ? <Home /> : <Login />} />

            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route
              path="/Profile"
              element={UserData ? <Profile /> : <Login />}
            />
            <Route
              path="/Explore"
              element={UserData ? <Explore /> : <Login />}
            />
            <Route
              path="/Follow"
              element={UserData ? <Follower /> : <Login />}
            />
          </Routes>
        </Router>
      </UserContext.Provider>
    </div>
  );
}
