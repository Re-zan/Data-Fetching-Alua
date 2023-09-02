import { useQuery } from "@tanstack/react-query";

const useDataCollect = () => {
  const { isLoading, data } = useQuery({
    queryKey: ["data"],
    queryFn: async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/comments?_limit=100"
      );
      const datas = await response.json();
      return datas;
    },
  });

  return [data, isLoading];
};

export default useDataCollect;
