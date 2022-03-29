import { useParams, useSearchParams } from "react-router-dom";
import { useGetCharactersQuery } from "./searchSlice";

export default function PageSearch() {
  let [searchParams, setSearchParams] = useSearchParams();

  const { data, isLoading, isSuccess, isError, error } =
    useGetCharactersQuery();

  //   return <div>{searchParams.get("text")}</div>;
  return (
    <div>
      {data?.map((item) => (
        <div>{item.name}</div>
      ))}
    </div>
  );
}
