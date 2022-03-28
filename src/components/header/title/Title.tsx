import { useNavigate } from "react-router-dom";
import logo from "./logo.svg";
import "./Title.scss";

export default function Title() {
  let navigate = useNavigate();

  return (
    <div className="title--wrap" onClick={() => navigate("/")}>
      <div className="title--logoBox">
        <img alt="Logo" src={logo}></img>
      </div>
      <div className="title--text">Rick and Morty Wiki</div>
    </div>
  );
}
