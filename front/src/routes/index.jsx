import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import { lazy } from "react";

// import { useUser } from "../hooks";

const Homepage = lazy(() => import("../pages/Homepage"));
const TaskManagemenet = lazy(() => import("../pages/TaskManagemenet"));
const Calendar = lazy(() => import("../pages/Calendar"));
const DataVis = lazy(() => import("../pages/DataVis"));
const MeetingsReports = lazy(() => import("../pages/MeetingsReports"));
const Archive = lazy(() => import("../pages/Archive"));

// const Login = lazy(() => import("../pages/Login"));
// const Register = lazy(() => import("../pages/Register"));
// const MyDesigns = lazy(() => import("../pages/Mydesigns"));
// const Customizer = lazy(() => import("../pages/Customizer"));
// const NotFound = lazy(() => import("../pages/NotFound"));

export default function Routes() {
  // const { user } = useUser();
  return useRoutes([
    {
      path: "/",
      element: <Homepage />,
      children: [
        { path: "", element: <TaskManagemenet /> },
        {
          path: "/calendar",
          // element: user ? <MyDesigns /> : <Navigate to={"/login"} replace />,
          element: <Calendar />,
        },
        {
          path: "/insights",
          // element: user ? <MyDesigns /> : <Navigate to={"/login"} replace />,
          element: <DataVis />,
        },
        {
          path: "/Reports",
          // element: user ? <MyDesigns /> : <Navigate to={"/login"} replace />,
          element: <MeetingsReports />,
        },
        {
          path: "/Archive",
          // element: user ? <MyDesigns /> : <Navigate to={"/login"} replace />,
          element: <MeetingsReports />,
        },
        // {
        //   path: "/create",
        //   element: user ? <Customizer /> : <Navigate to={"/login"} replace />,
        // },
      ],
    },
    // {
    //   path: "/login",
    //   element: user ? <Navigate to={"/"} replace /> : <Login />,
    // },
    // {
    //   path: "/register",
    //   element: user ? <Navigate to={"/"} replace /> : <Register />,
    // },
    // {
    //   path: "*",
    //   element: <NotFound />,
    // },
  ]);
}
