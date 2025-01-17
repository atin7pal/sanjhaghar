import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { About } from "./Pages/About/About.jsx";
import { HelmetProvider } from "react-helmet-async";
import { Contact } from "./Pages/Contact/Contact.jsx";
import { Restaurant } from "./Pages/Restaurant/Restaurant.jsx";
import { Menupage } from "./Pages/Menu/Menupage.jsx";
import { Meditation } from "./Pages/Meditation/Meditation.jsx";
import LoginPage from "./Pages/Admin/Login/Login.jsx";
import ProtectedRoute from "./Pages/Admin/Protected/Protectedroute.jsx";
import { Admindashboard } from "./Pages/Admin/Mainpanel/Admindashboard.jsx";
import ContactTable from "./Pages/Admin/Mainpanel/Contact/Contactadmin.jsx";
import { Popup } from "./Pages/Admin/Mainpanel/popup/Popup.jsx";
import ReservationTable from "./Pages/Admin/Mainpanel/Tablereservation/Tablereservation.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/restaurant",
    element: <Restaurant />,
  },
  {
    path: "/meditation",
    element: <Meditation />,
  },
  {
    path: "/menu",
    element: <Menupage />,
  },
  {
    path: "/useradmin",

    element: (
      <ProtectedRoute>
        <Admindashboard />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "contacts",
        element: <ContactTable />,
      },
      {
        path: "popup",
        element: <Popup />,
      },
      {
        path: "tablereservation",
        element: <ReservationTable />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  
  <HelmetProvider>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </HelmetProvider>
);