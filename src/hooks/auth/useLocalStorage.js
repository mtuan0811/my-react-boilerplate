/* eslint-disable react-hooks/rules-of-hooks */
const USER = "user";
const TOKEN = "token";

const getLocalStorage = (keyName, defaultValue) => {
  try {
    const value = window.localStorage.getItem(keyName);
    if (value) {
      return JSON.parse(value);
    }
    return defaultValue;
  } catch (err) {
    return defaultValue;
  }
};

const useLocalStorage = (keyName, data) => {
  try {
    window.localStorage.setItem(keyName, JSON.stringify(data));
  } catch (err) {
    window.localStorage.setItem(keyName, data);
  }
};

export const saveDataUser = (data) => {
  useLocalStorage(USER, data.user);
  useLocalStorage(TOKEN, data.user);
};

export const removeDataUser = () => {
  window.localStorage.removeItem(USER);
  window.localStorage.removeItem(TOKEN);
};

export const getLocalUser = () => {
  return getLocalStorage(USER)
};
