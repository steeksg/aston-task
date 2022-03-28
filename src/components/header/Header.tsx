import Container from "@mui/material/Container";
import Buttons from "./buttons/Buttons";
import Title from "./title/Title";

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
