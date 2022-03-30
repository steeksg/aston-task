import "./App.scss";
import CssBaseline from "@mui/material/CssBaseline";
import { useAppDispatch } from "./redux/hooks";
import { userLogIn } from "./components/body/pages/sign/signSlice";

import Header from "./components/header/Header";
import Body from "./components/body/Body";

function App() {
  const dispatch = useAppDispatch();
  const currentUserLS = window.localStorage.getItem("currentUser");
  currentUserLS && dispatch(userLogIn(currentUserLS));

  return (
    <div className="App">
      <CssBaseline />
      <Header />
      <Body />
    </div>
  );
}

export default App;
