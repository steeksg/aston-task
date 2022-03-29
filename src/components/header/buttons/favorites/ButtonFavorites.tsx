import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function ButtonFavorites() {
  let navigate = useNavigate();

  return (
    <Button
      className="buttons-color-white"
      variant="outlined"
      onClick={() => navigate("/favorites")}
    >
      Favorites
    </Button>
  );
}
