import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/Home";
import ImgUploadPage from "./pages/Img_ upload_page";
import RootLayout from "./pages/Root";
import SubmitInfoPage from './Pages/SubmitInfoPage';
import InfoDisplayPage from './Pages/InfoDisplayPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/upload_image", element: <ImgUploadPage /> },
      { path: "/submit", element: <SubmitInfoPage /> },
      { path: "/result", element: <InfoDisplayPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
