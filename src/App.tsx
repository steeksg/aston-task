import "./App.scss";
import CssBaseline from "@mui/material/CssBaseline";
import { useAppDispatch } from "./redux/hooks";
import { userLogIn } from "./components/body/pages/sign/signSlice";

import Header from "./components/header/Header";
import Body from "./components/body/Body";
import { getUsernameFromLS } from "./utils/localStorage";

function App() {
  const dispatch = useAppDispatch();
  const currentUserLS = getUsernameFromLS();
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
