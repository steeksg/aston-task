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
import {
  addIdToFavorite,
  isFavoriteById,
  removeIdFromFavorite,
} from "../../../../../utils/localStorage";

export default function CardCharacter(props: ICharacter) {
  return (
    <Grid className="cardCharacter--wrap" item xs={6}>
      <Link className="cardCharacter--link" to={`/details/${props.id}`}>
        <Card className="cardCharacter--content">
          <CardMedia
            className="cardCharacter--img"
            component="img"
            image={props.image}
            alt={props.name}
          />
          <CardContent className="cardCharacter--text">
            <Typography gutterBottom variant="h5" component="div">
              {props.name}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Gender: {props.gender}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Species: {props.species}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Status: {props.status}
            </Typography>

            <Typography variant="body1" color="text.secondary">
              Type: {props.type ? props.type : "Standard"}
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </Grid>
  );
}
