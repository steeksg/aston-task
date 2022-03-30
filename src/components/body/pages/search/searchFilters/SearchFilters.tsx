import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  TextField,
  Select,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  IFilterCharacter,
  IFilterCharacterList,
  useGetAllFiltersQuery,
} from "../searchSlice";

import "./SearchFilters.scss";

export default function SearchFilters() {
  let [searchParams, setSearchParams] = useSearchParams();

  const allFilters: IFilterCharacterList | undefined =
    useGetAllFiltersQuery().data;

  const [filters, setFilters] = useState({
    name: searchParams.get("name") || "",
    species: searchParams.get("species") || "",
    gender: searchParams.get("gender") || "",
    status: searchParams.get("status") || "",
  });

  useEffect(() => {
    let filter = { name: "" };

    Object.keys(filters).map((key) => {
      if (filters[key as keyof typeof filters]) {
        Object.assign(filter, { [key]: filters[key as keyof typeof filters] });
      }
    });

    setSearchParams({ ...filter });
  }, [filters]);

  return (
    <Paper className="searchFilters--wrap">
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <TextField
            fullWidth
            label="Search.."
            variant="outlined"
            value={filters.name || ""}
            onChange={(event) => {
              const value = event.target.value;
              setFilters({ ...filters, name: value });
            }}
          />
        </Grid>
        <Grid item xs={3}>
          <FormControl fullWidth>
            <InputLabel id="search-select-gender">Gender</InputLabel>
            <Select
              labelId="search-select-gender"
              label="Gender"
              value={filters.gender || ""}
              onChange={(event) =>
                setFilters({ ...filters, gender: event.target.value || "" })
              }
            >
              <MenuItem value={""}>Empty</MenuItem>
              {allFilters?.gender.map((gender) => (
                <MenuItem key={gender} value={gender}>
                  {gender}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={3}>
          <FormControl fullWidth>
            <InputLabel id="search-select-species">Species</InputLabel>
            <Select
              labelId="search-select-species"
              label="Species"
              value={filters.species || ""}
              onChange={(event) =>
                setFilters({ ...filters, species: event.target.value || "" })
              }
            >
              <MenuItem value={""}>Empty</MenuItem>
              {allFilters?.species.map((spice) => (
                <MenuItem key={spice} value={spice}>
                  {spice}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={3}>
          <FormControl fullWidth>
            <InputLabel id="search-select-status">Status</InputLabel>
            <Select
              labelId="search-select-status"
              label="Status"
              value={filters.status || ""}
              onChange={(event) =>
                setFilters({ ...filters, status: event.target.value || "" })
              }
            >
              <MenuItem value={""}>Empty</MenuItem>
              {allFilters?.status.map((status) => (
                <MenuItem key={status} value={status}>
                  {status}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Paper>
  );
}
