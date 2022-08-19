import axios from "axios";

export const postLoginUser = async (username: string, password: string) => {
  const response = await axios.post("https://ecommhuay.herokuapp.com/api/v1/users/login", {
    username,
    password,
  });
  return response;
};

export const postRegisterUser = async (
  username: string,
  password: string,
  full_name: string,
  email: string
) => {
  const response = await axios.post("https://ecommhuay.herokuapp.com/api/v1/users/register", {
    username,
    password,
    full_name,
    email,
  });
  return response;
};
