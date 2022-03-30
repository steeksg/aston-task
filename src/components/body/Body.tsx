import Container from "@mui/material/Container";
import { Routes, Route } from "react-router-dom";

import PageMain from "./pages/main/PageMain";
import PageSign, { EnumTypeSign } from "./pages/sign/PageSign";

import "./Body.scss";
import { useAppSelector } from "../../redux/hooks";
import { selectApp } from "../../appSlice";
import PageSearch from "./pages/search/PageSearch";
import PageDetails from "./pages/details/PageDetails";
import PageFavorites from "./pages/favorites/PageFavorites";

export default function Body() {
  const backgroundName = useAppSelector(selectApp);

  return (
    <div className={`body--wrap body--background-${backgroundName}`}>
      <Container className="body--content">
        <Routes>
          <Route path="/" element={<PageMain />} />
          <Route
            path="signup"
            element={<PageSign typeSign={EnumTypeSign.Up} />}
          />
          <Route
            path="signin"
            element={<PageSign typeSign={EnumTypeSign.In} />}
          />
          <Route path="search" element={<PageSearch />} />
          <Route path="details/:id" element={<PageDetails />} />
          <Route path="favorites" element={<PageFavorites />} />
          <Route path="*" element={<PageMain />} />
        </Routes>
      </Container>
    </div>
  );
}
