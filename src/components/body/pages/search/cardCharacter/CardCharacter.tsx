import {
  Card,
  CardContent,
  CardMedia,
  Fab,
  Grid,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { ICharacter } from "../searchSlice";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./CardCharacter.scss";

export interface ICardCharacterProps {
  data: ICharacter;
  isFavorite: boolean;
  setIsFavorite: () => void;
}

export default function CardCharacter({
  data,
  isFavorite,
  setIsFavorite,
}: ICardCharacterProps) {
  return (
    <Grid className="cardCharacter--wrap" item xs={6}>
      <Card className="cardCharacter--content">
        <Link className="cardCharacter--link" to={`/details/${data.id}`}>
          <CardMedia
            className="cardCharacter--img"
            component="img"
            image={data.image}
            alt={data.name}
          />
          <CardContent className="cardCharacter--text">
            <Typography gutterBottom variant="h5" component="div">
              {data.name}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Gender: {data.gender}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Species: {data.species}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Status: {data.status}
            </Typography>

            <Typography variant="body1" color="text.secondary">
              Type: {data.type ? data.type : "Standard"}
            </Typography>
          </CardContent>
        </Link>
        <Fab
          className="cardCharacter--favorite"
          color={isFavorite ? "error" : "default"}
          onClick={(event) => {
            event.preventDefault();
            setIsFavorite();
          }}
        >
          <FavoriteIcon />
        </Fab>
      </Card>
    </Grid>
  );
}
