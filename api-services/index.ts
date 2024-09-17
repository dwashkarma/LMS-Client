import { coursesEndpoints } from "@/endpoints";
import { useQueryHook } from "@/hooks/useQuery";

const useCourses = () => {
  return useQueryHook("courses", coursesEndpoints);
};

export { useCourses };
