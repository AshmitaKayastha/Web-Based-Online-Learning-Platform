const REGISTERED_USERS_KEY = "registered_users";
const ACTIVE_USER = "active_user";

export interface IUserModel {
  name: string;
  username: string;
  password: string;
}

const addUser = (user: IUserModel) => {
  const usersStr = localStorage.getItem(REGISTERED_USERS_KEY) || "[]";
  const users = JSON.parse(usersStr) as IUserModel[];
  users.push(user);
  localStorage.setItem(REGISTERED_USERS_KEY, JSON.stringify(users));
};

const isUsernameExists = (username: string): boolean => {
  const usersStr = localStorage.getItem(REGISTERED_USERS_KEY) || "[]";
  const users = JSON.parse(usersStr) as IUserModel[];
  return users.some((user) => user.username === username);
};

const getUser = (username: string, password: string): IUserModel | undefined => {
  const usersStr = localStorage.getItem(REGISTERED_USERS_KEY) || "[]";
  const users = JSON.parse(usersStr) as IUserModel[];
  return users.find((user) => user.username === username && user.password === password);
};

const updateActiveUser = (user: IUserModel) => {
  localStorage.setItem(ACTIVE_USER, JSON.stringify(user));
};

const getActiveUser = (): IUserModel | null => {
  const userStr = localStorage.getItem(ACTIVE_USER);
  return userStr ? JSON.parse(userStr) as IUserModel : null;
};

const clearActiveUser = () => {
  localStorage.removeItem(ACTIVE_USER);
};

export {
  REGISTERED_USERS_KEY,
  addUser,
  getUser,
  isUsernameExists,
  updateActiveUser,
  getActiveUser,
  clearActiveUser, 
};
