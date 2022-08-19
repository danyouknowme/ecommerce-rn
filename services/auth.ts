import axios from "axios";

export const postLoginUser = async (username: string, password: string) => {
  const response = await axios.post("https://ecommhuay.herokuapp.com/api/v1/users/login", {
    username: username,
    password: password,
  });
  return response;
};
