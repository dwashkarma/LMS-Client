import { courseIdEndpoints, coursesEndpoints } from "@/endpoints";
import { useQueryHook } from "@/hooks/useQuery";

const useCourses = () => {
  return useQueryHook("courses", coursesEndpoints);
};

const useCourseId = (id: string) => {
  return useQueryHook(["courseId", id], courseIdEndpoints(id));
};
export { useCourses, useCourseId };
