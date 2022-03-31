import { getUsernameFromLS } from "./user";

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
