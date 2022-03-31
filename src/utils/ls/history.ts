import { IFilterCharacter } from "../../components/body/pages/search/searchSlice";
import { getUsernameFromLS } from "./user";

export const addRecordInHistory = (
  record: IFilterCharacter,
  username: string = getUsernameFromLS()
) => {
  let allHistory = getAllHistory();
  let history = getHistoryByUser(username);
  history && history.push(record);
  allHistory[username] = history;
  window.localStorage.setItem("history", JSON.stringify(allHistory));
};

export const getAllHistory = () => {
  let historyJSON = window.localStorage.getItem("history");
  let history: { [key: string]: IFilterCharacter[] } = historyJSON
    ? JSON.parse(historyJSON)
    : {};
  return history;
};

export const getHistoryByUser = (
  username: string = getUsernameFromLS()
): IFilterCharacter[] => {
  return getAllHistory()[username];
};

export const resetHistoryByUsername = (
  username: string = getUsernameFromLS()
) => {
  let history: { [key: string]: IFilterCharacter[] } = getAllHistory();
  history[username] = [];
  window.localStorage.setItem("history", JSON.stringify(history));
};
