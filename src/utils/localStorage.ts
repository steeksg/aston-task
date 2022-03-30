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
  window.localStorage.setItem("favorites", "{}");
  window.localStorage.setItem("users", "[]");
};

export const resetFavoriteByUsername = (username: string = getUsernameFromLS()) => {
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
