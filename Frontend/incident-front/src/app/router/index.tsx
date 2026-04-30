import { createBrowserRouter, Navigate } from "react-router-dom";
import { UiPage } from "../../pages/UiPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/ui" replace />,
  },
  {
    path: "/ui",
    element: <UiPage />,
  },
]);