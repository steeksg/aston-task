import { IFilterCharacter } from "../components/body/pages/search/searchSlice";
import { IUserInfo } from "../components/body/pages/sign/tsTypes/IUserInfo";

export const isFavoriteById = (
  id: number,
  username: string = getUsernameFromLS()
) => {
  let favorites: { [key: string]: number[] } = getAllFavorites();
  return favorites[username].includes(id);
};

export const addIdToFavorite = (
  id: number,
  username: string = getUsernameFromLS()
) => {
  let favorites: { [key: string]: number[] } = getAllFavorites();
  favorites[username].push(id);
  window.localStorage.setItem("favorites", JSON.stringify(favorites));
};

export const initLS = () => {
  !window.localStorage.getItem("favorites") &&  window.localStorage.setItem("favorites", "{}");
  !window.localStorage.getItem("users") && window.localStorage.setItem("users", "[]");
  !window.localStorage.getItem("history") && window.localStorage.setItem("history", "{}");
};

export const resetFavoriteByUsername = (
  username: string = getUsernameFromLS()
) => {
  let favorites: { [key: string]: number[] } = getAllFavorites();
  favorites[username] = [];
  window.localStorage.setItem("favorites", JSON.stringify(favorites));
};

export const removeIdFromFavorite = (
  id: number,
  username: string = getUsernameFromLS()
) => {
  let favorites: { [key: string]: number[] } = getAllFavorites();
  favorites[username] = favorites[username].filter((i) => i != id);
  window.localStorage.setItem("favorites", JSON.stringify(favorites));
};

export const getAllFavorites = () => {
  let favoritesJSON = window.localStorage.getItem("favorites");
  let favorites: { [key: string]: number[] } = favoritesJSON
    ? JSON.parse(favoritesJSON)
    : {};
  return favorites;
};

export const getFavoritesByUser = (username: string) => {
  return getAllFavorites()[username];
};

export const getUsernameFromLS = (): string => {
  return window.localStorage.getItem("currentUser") || "";
};

export const resetUsernameToLS = () => {
  window.localStorage.setItem("currentUser", "");
};

export const setUsernameToLS = (name: string) => {
  window.localStorage.setItem("currentUser", name);
};

export const getAllUsersFromLS = (): IUserInfo[] => {
  return JSON.parse(window.localStorage.getItem("users") || "[]");
};

export const addUserToLS = (user: { username: string; password: string }) => {
  window.localStorage.setItem(
    "users",
    JSON.stringify([...getAllUsersFromLS(), user])
  );
};

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