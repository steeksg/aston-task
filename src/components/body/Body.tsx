import Container from "@mui/material/Container";
import { Routes, Route } from "react-router-dom";

import PageMain from "./pages/main/PageMain";
import PageSignUp from "./pages/signup/PageSignUp";

import "./Body.scss";

export default function Body() {
  return (
    <div className="body--wrap">
      <Container>
        <Routes>
          <Route path="signup" element={<PageSignUp />} />
          <Route path="/" element={<PageMain />} />
        </Routes>
      </Container>
    </div>
  );
}
