"use client";
import CardComponent from "@/components/shared/CardComponent";
import axios from "axios";
import { useEffect, useState } from "react";

const Test = () => {
  const [recentCourses, setRecentCourses] = useState<any>([
    { name: "loading", a: "loading" },
  ]);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BASEURL}/courses`)
      .then((res) => res.data)
      .then((res) => setRecentCourses(res));
  }, []);

  return (
    <div className="grid grid-cols-4 p-8 gap-4">
      {recentCourses.map((item: any, index: number) => {
        return <p key={index}>hello</p>;
      })}
    </div>
  );
};

export default Test;
