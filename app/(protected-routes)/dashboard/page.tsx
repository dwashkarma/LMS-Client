"use client";
import CardComponent from "@/components/shared/CardComponent";
import CarouselCard from "@/components/shared/CarouselCard";
import { Avatar, Divider } from "@mui/material";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
const content = [
  { id: 1, title: "Why us?", description: "loremlorem" },
  { id: 2, title: "What we Offer?", description: "loremlorem" },
];
export default function Home() {
  const { data: session } = useSession();
  const [recentCourses, setRecentCourses] = useState<any>([
    { name: "he", a: "asca" },
  ]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/courses")
      .then((res) => res.data)
      .then((res) => setRecentCourses(res));
  }, []);

  return (
    <div className="mx-32  flex flex-col gap-6 my-6  ">
      <div className="flex gap-2 items-center">
        <Avatar sx={{ bgcolor: "chocolate" }}>
          {session ? session?.user?.name?.slice(0, 1) : ""}
        </Avatar>
        <h2 className="text-2xl font-light">
          Welcome Back! {session?.user?.name}{" "}
        </h2>
      </div>

      <div className="w-[100%]">
        <CarouselCard content={content} />
      </div>
      <Divider />
      <h2 className="text-2xl font-medium text-chart-1">Our Courses</h2>
      <div className="grid grid-cols-5  gap-4">
        {recentCourses.map((item: any, index: number) => {
          return (
            <CardComponent
              title={item?.name}
              footer={<div>{item?.tag?.length > 1 ? item?.tag : null}</div>}
              imageurl="/logo.svg"
            >
              <div>{item?.author}</div>
              <div>{item?.price}</div>
            </CardComponent>
          );
        })}
      </div>
    </div>
  );
}
