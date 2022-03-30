import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../../../redux/hooks";
import {
  useGetArrayCharacterQuery,
  useGetCharacterQuery,
} from "../details/detailsSlice";
import CardCharacter from "../search/cardCharacter/CardCharacter";
import { selectSign } from "../sign/signSlice";

export default function PageFavorites() {
  const username = useAppSelector(selectSign);

  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    let favoritesJSON = window.localStorage.getItem("favorites");
    let favorites: { [key: string]: number[] } = favoritesJSON
      ? JSON.parse(favoritesJSON)
      : {};
    setFavorites(favorites[username]);
  }, [username]);

  const dataArr = useGetArrayCharacterQuery(favorites.join(",")).data || [];
  const data = useGetCharacterQuery(Number(favorites[0])).data;

  return (
    <div>
      <Grid container spacing={2} className="pageSearch--wrap">
        {dataArr.length > 1
          ? dataArr?.map((item) => <CardCharacter key={item.id} {...item} />)
          : data && <CardCharacter {...data} />}
      </Grid>
    </div>
  );
}
