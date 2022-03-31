import { useEffect, useState } from "react";
import { getFavoritesByUser, toggleIdInFavoritesById } from "../ls/favorite";

export function useFavorites(): [number[], (id: number) => void] {
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    setFavorites(getFavoritesByUser());
  }, []);

  const toggleFavorite = (id: number) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((i) => i != id));
    } else {
      setFavorites([...favorites, id]);
    }
    toggleIdInFavoritesById(id);
  };

  return [favorites, toggleFavorite];
}
