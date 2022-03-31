import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../../redux/hooks";
import { resetUsernameToLS } from "../../../../utils/ls/user";
import { userLogOut } from "../../../body/pages/sign/signSlice";

export default function ButtonLogout() {
  let navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <Button
      className="buttons-backgroundColor-white"
      variant="contained"
      onClick={() => {
        dispatch(userLogOut());
        resetUsernameToLS();
        navigate("/");
      }}
    >
      Log out
    </Button>
  );
}
