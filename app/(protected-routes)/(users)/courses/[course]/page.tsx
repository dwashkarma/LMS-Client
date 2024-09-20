"use client";
import { useCourseId } from "@/api-services";
import AccordionComponent from "@/components/accordian";
import BreadCrumbsComponent from "@/components/breadcrumbs";
import { Rating } from "@mui/material";
import Link from "next/link";
import React from "react";

const relatedTags = [
  { id: 1, name: "AI and Machine Learning" },
  { id: 2, name: "Backend Development" },
  { id: 3, name: "Nest Js" },
];

function CoursePage({ params }: { params: any }) {
  const course = params.course;

  const { data, isLoading, error } = useCourseId(course);

  return (
    !isLoading && (
      <div className="  flex flex-col  gap-6 ">
        <div className="bg-background  text-dark">
          <div className="mx-5 lg:mx-28 my-6 gap-6 flex flex-col">
            <BreadCrumbsComponent data={data?.title} />
            <h1 className="font-semibold text-3xl ">{data?.title}</h1>
            <p className="text-wrap">{data?.description}</p>
            <div className="flex gap-2 text-rating font-semibold">
              <Rating value={data?.rating} precision={0.5} readOnly />
              {data?.rating}
            </div>
            <p>
              Created by{" "}
              <span className="text-secondary underline">{data?.author}</span>
            </p>
            <p>
              Last Updated:
              <span className="text-secondary">
                {" "}
                {new Date().toDateString()}
              </span>{" "}
            </p>
            <span>Language: {data?.language}</span>
          </div>
        </div>
        <div className="mx-5 lg:mx-28 flex flex-col gap-6">
          {/* //Related Topics Sections */}
          <h4 className="font-semibold text-lg">Related Topics</h4>
          <div className="flex gap-4">
            {relatedTags.map((item) => {
              return (
                <div key={item?.id}>
                  <Link href={`/courses/${item?.name}`} passHref={true}>
                    <div className="border-2 bg-card rounded-full p-3 px-4 hover:shadow hover:bg-slate-200">
                      {" "}
                      {item.name}
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Content sections */}
          <div className="flex flex-col  mb-40 gap-6">
            <h4 className="text-normal font-medium">Course Content</h4>
            <p className="text-sm font-light">
              5 sections .20 lessons .5 hours
            </p>
            <div className="flex">
              <div className="basis-2/3">
                <AccordionComponent />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default CoursePage;
