import "./App.scss";
import CssBaseline from "@mui/material/CssBaseline";
import { useAppDispatch } from "./redux/hooks";
import { userLogIn } from "./components/body/pages/sign/signSlice";

import Header from "./components/header/Header";
import Body from "./components/body/Body";
import { initLS } from "./utils/ls/common";
import { useEffect } from "react";
import { getUsernameFromLS } from "./utils/ls/user";

function App() {
  const dispatch = useAppDispatch();
  const currentUserLS = getUsernameFromLS();
  currentUserLS && dispatch(userLogIn(currentUserLS));

  useEffect(() => {
    initLS();
  }, []);

  return (
    <div className="App">
      <CssBaseline />
      <Header />
      <Body />
    </div>
  );
}

export default App;
