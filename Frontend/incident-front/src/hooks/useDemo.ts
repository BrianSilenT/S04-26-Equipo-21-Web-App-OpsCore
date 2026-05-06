import { useQuery } from "@tanstack/react-query";
import { getDemoPosts } from "../services/demo.service";

export const usePosts = () => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: getDemoPosts,
  });
};