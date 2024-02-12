import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

import Home from "./pages/home/Home";
import Signin from "./pages/signin/Signin";
import Signup from "./pages/signup/Signup";
import GeneratePrompt from "./pages/generateprompt/GeneratePrompt";
import SellPrompt from "./pages/sellprompt/SellPrompt";
import HireEngineerHome from "./pages/hire/HireEngineerHome";
import MarketPlaceHome from "./pages/marketplace/MarketPlaceHome";
import Notifications from "./pages/notifications/Notifications";
import PromptDetails from "./pages/promptdetails/PromptDetails";
import Payment from "./pages/payment/Payment";
import EditPrompt from "./pages/editprompt/EditPrompt";
import Success from "./pages/success/Success";
import UserProfile from "./pages/profile/UserProfile";
import EngineerProfile from "./pages/profile/EngineerProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/generate",
    element: <GeneratePrompt />,
  },
  {
    path: "/sellprompt",
    element: <SellPrompt />,
  },
  {
    path: "/hire",
    element: <HireEngineerHome />,
  },
  {
    path: "/marketplace",
    element: <MarketPlaceHome />,
  },
  {
    path: "/marketplace/:id",
    element: <PromptDetails />,
  },
  {
    path: "/notifications",
    element: <Notifications />,
  },
  {
    path: "/buy-prompt/:id",
    element: <Payment />,
  },
  {
    path: "/edit-prompt/:id",
    element: <EditPrompt />,
  },
  {
    path: "/payment-success",
    element: <Success />,
  },
  {
    path: "/profile",
    element: <UserProfile />,
  },
  {
    path: "/engineer-profile",
    element: <EngineerProfile />,
  },
]);

function App() {
  return (
    <RouterProvider router={router}>
      <Toaster />
    </RouterProvider>
  );
}

export default App;
