import { api } from "./api";

export const getDemoPosts = async () => {
  const { data } = await api.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return data;
};