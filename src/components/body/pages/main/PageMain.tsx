import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import FormHelperText from "@mui/material/FormHelperText";

import backgroundDesc from "./backgroundDesc.png";

import "./PageMain.scss";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../../../redux/hooks";
import { changeBackground } from "../../../../appSlice";

export default function PageMain() {

  const dispatch = useAppDispatch();

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    dispatch(changeBackground("main"))
  }, []);

  const searchStart = () => {
    console.log(`search start for ${searchText}`);
  };

  return (
    <div className="pageMain--wrap">
      <div className="pageMain--descriptionBox">
        <img src={backgroundDesc} alt="background"></img>
        <div className="pageMain--descriptionTitle">Rick & Morty Wiki</div>
        <div className="pageMain--descriptionText">
          Here you will find information about the characters and locations of
          the game based on the animated series Rick and Morty.
          <br />
          <br />
          Use the search below to find out the information you are interested
          in.
        </div>
      </div>

      <div className="pageMain--searchBox">
        {/* <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined"> */}
        <FormControl variant="outlined" fullWidth>
          <InputLabel htmlFor="outlined-adornment-password">Search</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type="text"
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
            placeholder="Search..."
            fullWidth
            label="Search"
            onKeyDown={(event) => {
              if (event.key === "Enter") searchStart();
            }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="start search"
                  onClick={() => searchStart()}
                  edge="end"
                >
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            }
          />
          <FormHelperText>Input text your request</FormHelperText>
        </FormControl>
      </div>
    </div>
  );
}
