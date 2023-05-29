import { useState } from "react";
import Home from "./home/Home";
import LoginSignUpPage from "./auth/LoginSignUpPage";

export default function App()  {
  const [loggedIn, setLoggedIn] = useState<boolean>(true);
  return loggedIn ? (
      <Home />
  ):
  (
<LoginSignUpPage />
  );
}


