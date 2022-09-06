import React from "react";
import { Navigate, Routes, useNavigate, useRoutes } from "react-router-dom";
import "./App.css";
import Projectcard from "./components/cards/projectcards/Projectcard";
import Homepage from "./pages/homepage/Homepage";
import DashboardLayout from "./pages/layouts/DashboardLayout"; 
import Secondpage from "./pages/secondpage/Secondpage";
import Thirdpage from "./pages/thirdpage/Thirdpage";
import Addproject from "./pages/addproject/Addproject";

function App() {
  return useRoutes([
    {
      path: "/",
      element: <DashboardLayout />,
      children: [
        { path: "", element: <Navigate to="/dashboard" /> },
        // { path: "dashboard", element: <Homepage /> },
        // { path: "dashboard", element: <Secondpage /> },
        // { path: "dashboard", element: <Thirdpage /> },
        { path: "dashboard", element: <Addproject /> },
        // { path: "dashboard", element: <Projectcard /> },
      ],
    },
  ]);
  // <Homepage />
  // const navigate = useNavigate();

  // // onAuthStateChanged(auth, (user) => {
  // //   if (user) {
  // //     // User is signed in, see docs for a list of available properties
  // //     // https://firebase.google.com/docs/reference/js/firebase.User
  // //     const uid = user.uid;
  // //     navigate("/dashboard");
  // //     // ...
  // //   }
  // // });
//   return (
//     <Routes>
//       <Route path="/" element={<Homepage />} />
//       <Route path="/Secondpage" exact element={< Secondpage/>} /> 
//       <Route path="/Thirdpage" exact element={<Thirdpage />} />
//       <Route path="/dashboard" exact element={<Addproject />} />
//     </Routes>
//     // <Homepage />
  // );
}

export default App;
