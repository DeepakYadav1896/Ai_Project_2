import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Work from "./components/Work";
import Process from "./components/Process";
import InnovaEdgeHome from "./components/Homepage";
import Navbar from "./components/Navbar";

// Layout with Navbar always visible
function Layout() {
  return (
    <>
      <Navbar />
      <Outlet /> {/* renders child routes */}
    </>
  );
}

export default function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />, // wrap all routes with Navbar
      children: [
        { path: "/", element: <InnovaEdgeHome /> },
        { path: "/contact", element: <Contact /> },
        { path: "/services", element: <Services /> },
        { path: "/process", element: <Process /> },
        { path: "/work", element: <Work /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
