import Container from "@mui/material/Container";
import Buttons from "./buttons/Buttons";
import Title from "./title/Title";
import { useAppSelector } from "../../redux/hooks";
import { selectSign } from "../body/pages/sign/signSlice";

import "./Header.scss";
import { UserContext } from "../../App";

export default function Header() {
  const username = useAppSelector(selectSign);

  return (
    <div className="header--wrap">
      <Container>
        <div className="header--content">
          <Title />
          <UserContext.Consumer>
            {
              user =>  <div className="header--username">{user.toUpperCase()}</div>
            }
          </UserContext.Consumer>
          <Buttons />
        </div>
      </Container>
    </div>
  );
}
