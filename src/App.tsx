import "./App.scss";
import CssBaseline from "@mui/material/CssBaseline";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { selectSign, userLogIn } from "./components/body/pages/sign/signSlice";

import Header from "./components/header/Header";
import Body from "./components/body/Body";
import { initLS } from "./utils/ls/common";
import React, { useEffect, useState } from "react";
import { getUsernameFromLS } from "./utils/ls/user";

export const UserContext = React.createContext(
  ""
);

function App() {
  const dispatch = useAppDispatch();
  const currentUserLS = getUsernameFromLS();
  currentUserLS && dispatch(userLogIn(currentUserLS));
  const username = useAppSelector(selectSign);

  useEffect(() => {
    initLS();
  }, []);

  return (
    <div className="App">
      <CssBaseline />
      <UserContext.Provider value={username || ""}>
        <Header />
      </UserContext.Provider>
      <Body />
    </div>
  );
}

export default App;
