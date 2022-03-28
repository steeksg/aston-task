import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function ButtonSignUp() {
  let navigate = useNavigate();

  return (
    <Button
      className="buttons-backgroundColor-white"
      variant="contained"
      onClick={() => navigate("/signup")}
    >
      Sign Up
    </Button>
  );
}
