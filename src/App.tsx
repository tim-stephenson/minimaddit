import { useState } from "react";
import Home from "./home/Home";
import LoginSignUpPage from "./auth/LoginSignUpPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./css/main.css";

const queryClient = new QueryClient();

export default function App()  {
  const [loggedIn, setLoggedIn] = useState<boolean>(true);
  return (
    <QueryClientProvider client={queryClient}>
      {loggedIn ? <Home /> : <LoginSignUpPage />}
    </QueryClientProvider>
  );
}


