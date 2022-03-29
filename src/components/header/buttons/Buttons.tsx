import Stack from "@mui/material/Stack";

import ButtonSignIn from "./signin/ButtonSignIn";
import ButtonSignUp from "./signup/ButtonSignUp";

import "./Buttons.scss";
import { Outlet } from "react-router-dom";
import { selectSign } from "../../body/pages/sign/signSlice";
import { useAppSelector } from "../../../redux/hooks";
import React from "react";
import ButtonFavorites from "./favorites/ButtonFavorites";
import ButtonHistory from "./history/ButtonHistory";
import ButtonLogout from "./logout/ButtonLogout";

export default function Buttons() {
  const username = useAppSelector(selectSign);

  return (
    <Stack className="buttons--wrap" spacing={2} direction="row">
      {username ? (
        <React.Fragment>
          <ButtonFavorites />
          <ButtonHistory />
          <ButtonLogout />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <ButtonSignIn />
          <ButtonSignUp />
        </React.Fragment>
      )}

      <Outlet />
    </Stack>
  );
}
