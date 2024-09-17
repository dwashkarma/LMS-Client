import {
  courseByCategoryEndpoints,
  courseIdEndpoints,
  coursesEndpoints,
} from "@/endpoints";
import { useQueryHook } from "@/hooks/useQuery";

const useCourses = () => {
  return useQueryHook("courses", coursesEndpoints);
};

const useCourseId = (id: string) => {
  return useQueryHook(["courseId", id], courseIdEndpoints(id));
};

const useCategoryCoures = (category: string) => {
  return useQueryHook(
    ["categoryCourses", category],
    courseByCategoryEndpoints(category)
  );
};
export { useCourses, useCourseId, useCategoryCoures };
