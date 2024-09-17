import { axiosInstance } from "@/config/axiosInstance";
import { useQuery } from "@tanstack/react-query";

const useQueryHook = (key: string, url: string, id?: string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: [key],
    queryFn: async () => axiosInstance.get(url).then((res) => res.data),
    enabled: !!key,
    staleTime: 10000,
  });
  return { data, error, isLoading };
};

export { useQueryHook };
