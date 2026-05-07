import { createBrowserRouter, Navigate } from "react-router-dom";
import { UIPage } from "../../pages/UiPage";
import { LoginPage } from "@/pages/LoginPage";
import { MobileIncidentReportPage } from "@/pages/MobileIncidentReportPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/ui" replace />,
  },
  {
    path: "/ui",
    element: <UIPage />,
  },
  {
    path: "/auth",
    element: <LoginPage />,
  },
  {
    path: "/check",
    element: <MobileIncidentReportPage />,
  },
]);
