import Container from "@mui/material/Container";
import Buttons from "./buttons/Buttons";
import Title from "./title/Title";

import "./Header.scss"

export default function Header() {
  return (
    <div className="header--wrap">
      <Container>
        <div className="header--content">
          <Title />
          <Buttons />
        </div>
      </Container>
    </div>
  );
}
