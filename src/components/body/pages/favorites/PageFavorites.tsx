import { Grid } from "@mui/material";
import { useAppSelector } from "../../../../redux/hooks";
import { useFavorites } from "../../../../utils/customHOCs/useFavorites";
import { isFavoriteById } from "../../../../utils/ls/favorite";
import {
  useGetArrayCharacterQuery,
  useGetCharacterQuery,
} from "../details/detailsSlice";
import CardCharacter from "../search/cardCharacter/CardCharacter";
import { selectSign } from "../sign/signSlice";

export default function PageFavorites() {
  const username = useAppSelector(selectSign);

  let [favorites, toggleFavorite] = useFavorites();

  const dataArr = useGetArrayCharacterQuery(favorites.join(",")).data || [];
  const data = useGetCharacterQuery(Number(favorites[0])).data;

  return (
    <div>
      <Grid container spacing={2} className="pageSearch--wrap">
        {dataArr.length > 1
          ? dataArr?.map((item) => (
              <CardCharacter
                key={item.id}
                data={item}
                isFavorite={favorites && favorites.includes(item.id)}
                setIsFavorite={() => toggleFavorite(item.id)}
              />
            ))
          : !!favorites &&
            data && (
              <CardCharacter
                key={data.id}
                data={data}
                isFavorite={favorites && favorites.includes(data.id)}
                setIsFavorite={() => toggleFavorite(data.id)}
              />
            )}
      </Grid>
    </div>
  );
}
