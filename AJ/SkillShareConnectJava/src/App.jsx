// import './App.css'
// import MainScreen from './screens/MainScreen';
// import { BrowserRouter as Router} from 'react-router-dom';
// import {Routes, Route} from 'react-router-dom';
// import Register from './screens/register/Register';
// import Login from './screens/login/Login';


// function App() {

//   return (
//     <>
//     <Router>
//       <div>
//         <section>                              
//             <Routes>                      
                                                               
//                <Route path="/login" element={<Login/>}/>
//                {/* <Route path="/signup" element={<S/>}/> */}
//                <Route path="/main" element={<MainScreen/>}/>
//                <Route path="/register" element={<Register/>}/>

//             </Routes>                    
//         </section>
//       </div>
//     </Router>
//     </>
//   )
// }

// export default App


import Login from "./screens/login/Login";
import Register from "./screens/register/Register";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import LeftBar from "./components/leftBar/LeftBar";
import RightBar from "./components/rightBar/RightBar";
import Home from "./screens/home/Home";
import Profile from "./screens/profile/Profile";
import "./style.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/authContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SkillsInput from "./components/skills/Skills";

function App() {
  const { currentUser } = useContext(AuthContext);

  const { darkMode } = useContext(DarkModeContext);

  const queryClient = new QueryClient();

  const Layout = () => {
    return (
      <QueryClientProvider client={queryClient}>
        <div className={`theme-${darkMode ? "dark" : "light"}`}>
          <Navbar />
          <div style={{ display: "flex" }}>
            <LeftBar />
            <div style={{ flex: 6 }}>
              <Outlet />
            </div>
            <RightBar />
          </div>
        </div>
      </QueryClientProvider>
    );
  };

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <SkillsInput />,
          // element: <Home />,
        },
        {
          path: "/home",
          // element: <SkillsInput />,
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
