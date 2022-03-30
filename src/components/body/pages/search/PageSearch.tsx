import { useParams, useSearchParams } from "react-router-dom";
import { useGetCharactersQuery, useSearchCharacterQuery } from "./searchSlice";

export default function PageSearch() {
  let [searchParams, setSearchParams] = useSearchParams();

  const { data, isLoading, isSuccess, isError, error } =
    // useGetCharactersQuery();
    useSearchCharacterQuery(searchParams.get("text") || "");

  return (
    <div>
      {data?.map((item) => (
        <div>{item.name}</div>
      ))}
    </div>
  );
}
