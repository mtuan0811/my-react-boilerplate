import api from "./api";
import { API_PATH } from "../configs/api";

export const login = (payload) => {
  const { email, password } = payload;
  return api.post(API_PATH.user.login, { email, password });
};
