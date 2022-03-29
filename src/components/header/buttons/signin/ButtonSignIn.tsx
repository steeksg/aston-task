import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function ButtonSignIn() {
  let navigate = useNavigate();

  return (
    <Button
      className="buttons-color-white"
      variant="outlined"
      onClick={() => navigate("/signin")}
    >
      Sign In
    </Button>
  );
}
