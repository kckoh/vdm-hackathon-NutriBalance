import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./Pages/Home";
import ImgUploadPage from "./Pages/Img_ upload_page";
import RootLayout from "./Pages/Root";
import InfoDisplayPage from "./Pages/InfoDisplayPage";
import SubmitInfoPage from "./Pages/SubmitInfoPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/upload_image", element: <ImgUploadPage /> },
      { path: "/info", element: <InfoDisplayPage /> },
      { path: "/submitInfo", element: <SubmitInfoPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
