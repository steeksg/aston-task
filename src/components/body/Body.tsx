import Container from "@mui/material/Container";

import PageMain from "./pages/main/PageMain";

import "./Body.scss";

export default function Body() {
  return (
    <div className="body--wrap">
      <Container>
        <PageMain />
      </Container>
    </div>
  );
}
