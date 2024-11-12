import axios from "axios";

export const getUserList = async () => {
  const response = await axios("https://jsonplaceholder.typicode.com/users");
  return response.data;
};


