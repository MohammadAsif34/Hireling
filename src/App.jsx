import "./App.css";
import { Link } from "react-router-dom";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

import Navbar from "./component/navbar/Navbar";
import Footer from "./component/footer/Footer";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

import Home from "./pages/home/Home";

const App = () => {
  const queryClient = new QueryClient();
  const Layout = () => {
    return (
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <Outlet />
        <Footer />
      </QueryClientProvider>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
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

  return <RouterProvider router={router} />;
  //  (
  //   <>
  //     <Navbar />
  //     <Home />
  //     <Footer />
  //   </>
  // );
};

export default App;
