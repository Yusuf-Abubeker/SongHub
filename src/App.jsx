import { createBrowserRouter, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react"; // Import useState and useEffect
import Layout from "./components/Layout";
import ErrorPage from "./components/ErrorPage";
import UploadPage from "./components/UploadPage";
import MusicPage from "./components/SongList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <MusicPage /> },
      { path: "create", element: <UploadPage /> },
    ],
  },
]);

export default router;
