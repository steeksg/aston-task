import { Grid } from "@mui/material";
import { useParams, useSearchParams } from "react-router-dom";
import CardCharacter from "./cardCharacter/CardCharacter";
import { useGetCharactersQuery, useSearchCharacterQuery } from "./searchSlice";
import "./PageSearch.scss";

export default function PageSearch() {
  let [searchParams, setSearchParams] = useSearchParams();

  const { data, isLoading, isSuccess, isError, error } =
    // useGetCharactersQuery();
    useSearchCharacterQuery(searchParams.get("text") || "");

  return (
    <Grid container spacing={2} className="pageSearch--wrap">
      {data?.map((item) => (
        <CardCharacter key={item.id} {...item} />
      ))}
    </Grid>
  );
}
