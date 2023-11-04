import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Account from "./components/Account";
import Bookings from "./components/Bookings";
import Accomodation from "./components/Accomodation";
import SinglePlace from "./components/SinglePlace";
import PlacesForm from "./components/PlacesForm";
import SingleBooking from "./components/SingleBooking";
import Error from "./components/Error";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "account/:subpage?",
        element: <Account />,
      },
      {
        path: "account/:subpage/:action?",
        element: <Account />,
      },
      {
        path: "account/places/:id",
        element: <PlacesForm />,
      },
      {
        path: "account/bookings/:id",
        element: <SingleBooking />,
      },
      {
        path: "place/:id",
        element: <SinglePlace />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
