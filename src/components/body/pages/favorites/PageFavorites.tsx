import { useAppSelector } from "../../../../redux/hooks";
import { selectSign } from "../sign/signSlice";

export default function PageFavorites() {
  const username = useAppSelector(selectSign);

  return <div>Page favorites {username}</div>;
}
