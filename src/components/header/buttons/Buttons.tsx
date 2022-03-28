import Stack from "@mui/material/Stack";

import ButtonSignIn from "./signin/ButtonSignIn";
import ButtonSignUp from "./signup/ButtonSignUp";

import "./Buttons.scss";

export default function Buttons() {
  return (
    <Stack className="buttons--wrap" spacing={2} direction="row">
      <ButtonSignIn />
      <ButtonSignUp />
    </Stack>
  );
}
