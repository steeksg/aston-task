export const initLS = () => {
  !window.localStorage.getItem("favorites") &&
    window.localStorage.setItem("favorites", "{}");
  !window.localStorage.getItem("users") &&
    window.localStorage.setItem("users", "[]");
  !window.localStorage.getItem("history") &&
    window.localStorage.setItem("history", "{}");
};
