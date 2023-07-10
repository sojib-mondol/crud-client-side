import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/main/Main";
import Home from "../pages/home/Home";
import AddUser from "../pages/addUser/AddUser";
import ViewAllUser from "../pages/viewAllUser/ViewAllUser";
import UserDetails from "../pages/userDetails/UserDetails";
import UpdateUser from "../pages/updateUser/UpdateUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <h1>This is 404 page</h1>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/add-user",
        element: <AddUser />,
      },
      {
        path: "/view-all-user",
        element: <ViewAllUser />,
      },
      {
        path: "/view-details/:id",
        loader: async ({ params }) => {
          console.log(params.email);
          return fetch(`https://crud-server-side-seven.vercel.app/api/user/${params.id}`);
        },
        element: <UserDetails />,
      },
      {
        path: "/update-user/:id",
        element: <UpdateUser />,
      },
    ],
  },
]);

export default router;
