import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { useGetCharacterQuery } from "./detailsSlice";
import FavoriteIcon from "@mui/icons-material/Favorite";

import "./PageDetails.scss";

export default function PageDetails() {
  let params = useParams();

  const { data, error } = useGetCharacterQuery(Number(params.id));

  return (
    <div className="pageDetails--wrap">
      {/* {data && <CardCharacter {...data} />} */}
      {!error && data && (
        <Card className="pageDetails--card">
          <CardMedia
            className="pageDetails--img"
            component="img"
            image={data.image}
            alt={data.name + " image"}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {data.name}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Was creating: {data.created}
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
              Type: {data.type}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Location: {data.location.name}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Origin: {data.origin.name}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Count episodes: {data.episode.length}
            </Typography>
          </CardContent>
          <CardActions className="pageDetails--buttonBox">
            <IconButton size="large" aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
          </CardActions>
        </Card>
      )}
    </div>
  );
}
