import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "./Components/RootLayout";
import Home from "./Components/Home";
import CreateEmp from "./Components/CreateEmp";
import ListOfEmps from "./Components/ListOfEmps";
import Employee from "./Components/Employee";
import ViewEmployee from "./Components/ViewEmployee";
import EditEmployee from "./Components/EditEmployee";
import "./index.css"
import ContextProvider from "./contexts/ContextProvider";

function App() {
  const routerObj = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "", element: <Home /> },
        { path: "create-emp", element: <CreateEmp /> },
        { path: "list", element: <ListOfEmps /> },
        { path:"employee",element:<Employee />},
        { path:"edit-emp",element:<EditEmployee />},
        { path: "view", element: <ViewEmployee /> },
      ],
    },
  ]);

  // return <RouterProvider router={routerObj} />;
return (
  <ContextProvider>
    <RouterProvider router={routerObj} />
  </ContextProvider>
);
}

export default App;