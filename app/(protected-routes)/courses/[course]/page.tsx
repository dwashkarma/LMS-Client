import BreadCrumbsComponent from "@/components/breadcrumbs";
import { Rating } from "@mui/material";
import React from "react";

function CcoursePage({ params }: { params: any }) {
  const course = params.course;

  return (
    <div className="  flex flex-col  gap-6 ">
      <div className="bg-card-foreground text-card">
        <div className="mx-5 lg:mx-28 my-6 gap-6 flex flex-col">
          <BreadCrumbsComponent />
          <h1 className="font-semibold text-3xl ">
            The complete course for Nextjs/ 6 months
          </h1>
          <p className="text-wrap">
            Learn Nextjs like a Professional Bootcamp From Zero to Hero in
            Nextjs
          </p>
          <div className="flex gap-2 text-rating font-semibold">
            <Rating color="text-rating" value={4.5} precision={0.5} />{" "}
            <span>4.5</span>
          </div>
          <p>
            Created by{" "}
            <span className="text-secondary underline">Deepak Tamang</span>
          </p>
          <p>
            Last Updated:
            <span className="text-secondary">
              {" "}
              {new Date().toDateString()}
            </span>{" "}
          </p>
          <span>English</span>
        </div>
      </div>
    </div>
  );
}

export default CcoursePage;
