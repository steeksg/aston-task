import { IUserInfo } from "../../components/body/pages/sign/tsTypes/IUserInfo";

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
