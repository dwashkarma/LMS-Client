"use client";
import BreadCrumbsComponent from "@/components/breadcrumbs";
import { Rating } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

function CoursePage({ params }: { params: any }) {
  const course = params.course;

  const { data, isLoading } = useQuery({
    queryKey: ["course", course],
    queryFn: async () => {
      return await axios
        .get(`${process.env.NEXT_PUBLIC_BASEURL}/courses/${course}`)
        .then((res) => res.data);
    },
    enabled: !!course,
  });

  return (
    !isLoading && (
      <div className="  flex flex-col  gap-6 ">
        <div className="bg-background  text-dark">
          <div className="mx-5 lg:mx-28 my-6 gap-6 flex flex-col">
            <BreadCrumbsComponent data={data.title} />
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
      </div>
    )
  );
}

export default CoursePage;
