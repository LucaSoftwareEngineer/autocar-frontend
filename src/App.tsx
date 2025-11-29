import { createBrowserRouter, RouterProvider } from "react-router";
import LoginComponent from "./components/LoginComponent/LoginComponent.tsx";
import DashboardComponent from "./components/DashboardComponent/DashboardComponent.tsx";
import RegistraAutoComponent from "./components/RegistraAutoComponent/RegistraAutoComponent.tsx";
import AutoImpostaTargaComponent from "./components/AutoImpostaTargaComponent/AutoImpostaTargaComponent.tsx";
import ElencoAutoComponent from "./components/ElencoAutoComponent/ElencoAutoComponent.tsx";
import VenditaRegistraComponent from "./components/VenditaRegistraComponent/VenditaRegistraComponent.tsx";

const router = createBrowserRouter([
  {path: "/", element: <LoginComponent />},
  {path: "/dashboard", element: <DashboardComponent />},
  {path: "/auto/registra", element: <RegistraAutoComponent />},
  {path: "/auto/imposta/targa", element:<AutoImpostaTargaComponent />},
  {path: "/auto/elenco", element:<ElencoAutoComponent />},
  {path: "/vendita/registra", element:<VenditaRegistraComponent />}
]);

export default function App() {

  return (
    <>
      <RouterProvider router={router}>
      </RouterProvider>
    </>
  );
}
