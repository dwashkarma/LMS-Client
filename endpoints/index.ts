const coursesEndpoints = "/courses";

const courseIdEndpoints = (id: string) => `courses/${id}`;

const courseByCategoryEndpoints = (category: string) =>
  `courses/category/${category}`;

export { coursesEndpoints, courseIdEndpoints, courseByCategoryEndpoints };
