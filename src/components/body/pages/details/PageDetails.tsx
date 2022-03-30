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
import { useAppSelector } from "../../../../redux/hooks";
import { selectSign } from "../sign/signSlice";
import { useEffect, useState } from "react";
import { addIdToFavorite, isFavoriteById, removeIdFromFavorite } from "../../../../utils/localStorage";

export default function PageDetails() {
  let params = useParams();

  const username = useAppSelector(selectSign);
  const [isFavorite, setIsFavorite] = useState(false);
  const { data, error } = useGetCharacterQuery(Number(params.id));

  useEffect(() => {
    data && username && setIsFavorite(isFavoriteById(data.id, username));
  }, [data]);

  return (
    <div className="pageDetails--wrap">
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
            <IconButton
              color={isFavorite ? "error" : "default"}
              size="large"
              aria-label="add to favorites"
              onClick={() => {
                if (isFavoriteById(data.id, username)) {
                  removeIdFromFavorite(data.id, username)
                  setIsFavorite(false);
                } else {
                  addIdToFavorite(data.id, username)
                  setIsFavorite(true);
                }
              }}
            >
              <FavoriteIcon />
            </IconButton>
          </CardActions>
        </Card>
      )}
    </div>
  );
}
