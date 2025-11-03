import { createBrowserRouter, RouterProvider } from "react-router";
import LoginComponent from "./components/LoginComponent/LoginComponent.tsx";
import DashboardComponent from "./components/DashboardComponent/DashboardComponent.tsx";

const router = createBrowserRouter([
  {path: "/", element: <LoginComponent />},
  {path: "/dashboard", element: <DashboardComponent />}
]);

export default function App() {

  return (
    <>
      <RouterProvider router={router}>
      </RouterProvider>
    </>
  );
}
