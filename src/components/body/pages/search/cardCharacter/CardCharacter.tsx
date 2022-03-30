import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { ICharacter } from "../searchSlice";
import "./CardCharacter.scss";

export default function CardCharacter(props: ICharacter) {
  return (
    <Grid className="cardCharacter--wrap" item xs={6}>
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
    </Grid>
  );
}
