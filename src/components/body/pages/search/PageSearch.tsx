import { Grid } from "@mui/material";
import { useNavigate, useSearchParams } from "react-router-dom";
import CardCharacter from "./cardCharacter/CardCharacter";
import { useSearchCharacterQuery } from "./searchSlice";
import "./PageSearch.scss";
import SearchFilters from "./searchFilters/SearchFilters";
import { useFavorites } from "../../../../utils/customHOCs/useFavorites";
import React from "react";

export default function PageSearch() {
  let [searchParams, setSearchParams] = useSearchParams();
  let navigate = useNavigate();

  const { data, error } = useSearchCharacterQuery({
    name: searchParams.get("name") || "",
    species: searchParams.get("species") || "",
    gender: searchParams.get("gender") || "",
    status: searchParams.get("status") || "",
    page: searchParams.get("page") || "",
  });

  let [favorites, toggleFavorite] = useFavorites();

  return (
    <React.Fragment>
      <SearchFilters />
      <Grid container spacing={2} className="pageSearch--wrap">
        {!error &&
          data?.map((item) => (
            <CardCharacter
              key={item.id}
              data={item}
              isFavorite={favorites && favorites.includes(item.id)}
              setIsFavorite={() => {
                if (favorites) {
                  toggleFavorite(item.id);
                } else {
                  navigate("/signin");
                }
              }}
            />
          ))}
      </Grid>
    </React.Fragment>
  );
}
