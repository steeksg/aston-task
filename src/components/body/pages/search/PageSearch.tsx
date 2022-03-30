import { Grid } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import CardCharacter from "./cardCharacter/CardCharacter";
import { useSearchCharacterQuery } from "./searchSlice";
import "./PageSearch.scss";
import SearchFilters from "./searchFilters/SearchFilters";
import React, { useEffect } from "react";

export default function PageSearch() {
  let [searchParams, setSearchParams] = useSearchParams();

  const { data, error } = useSearchCharacterQuery({
    name: searchParams.get("name") || "",
    species: searchParams.get("species") || "",
    gender: searchParams.get("gender") || "",
    status: searchParams.get("status") || "",
    page: searchParams.get("page") || "",
  });

  return (
    <React.Fragment>
      <SearchFilters />
      <Grid container spacing={2} className="pageSearch--wrap">
        {!error &&
          data?.map((item) => <CardCharacter key={item.id} {...item} />)}
      </Grid>
    </React.Fragment>
  );
}
