import { Grid } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import CardCharacter from "./cardCharacter/CardCharacter";
import { useSearchCharacterQuery } from "./searchSlice";
import "./PageSearch.scss";
import SearchFilters from "./searchFilters/SearchFilters";
import React, { useEffect, useState } from "react";
import {
  addIdToFavorite,
  getFavoritesByUser,
  isFavoriteById,
  toggleIdInFavoritesById,
} from "../../../../utils/ls/favorite";

export default function PageSearch() {
  let [searchParams, setSearchParams] = useSearchParams();

  const { data, error } = useSearchCharacterQuery({
    name: searchParams.get("name") || "",
    species: searchParams.get("species") || "",
    gender: searchParams.get("gender") || "",
    status: searchParams.get("status") || "",
    page: searchParams.get("page") || "",
  });

  const [favorites, setFavorites] = useState<number[]>([]);

  const toogleFavorite = (id: number) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((i) => i != id));
    } else {
      setFavorites([...favorites, id]);
    }
    toggleIdInFavoritesById(id);
  };

  useEffect(() => {
    setFavorites(getFavoritesByUser());
  }, [data]);

  return (
    <React.Fragment>
      <SearchFilters />
      <Grid container spacing={2} className="pageSearch--wrap">
        {!error &&
          data?.map((item) => (
            <CardCharacter
              key={item.id}
              data={item}
              isFavorite={favorites.includes(item.id)}
              setIsFavorite={() => toogleFavorite(item.id)}
            />
          ))}
      </Grid>
    </React.Fragment>
  );
}
