"use client";
import CardComponent from "@/components/shared/CardComponent";
import CarouselCard from "@/components/shared/CarouselCard";
import { Avatar, Divider } from "@mui/material";
import axios from "axios";
import { useSession } from "next-auth/react";
import Image from "next/image";
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
    <div className="mx-28  flex flex-col  gap-6 my-6 ">
      <div className="flex gap-2 items-center">
        <Avatar sx={{ bgcolor: "chocolate" }}>
          {session ? session?.user?.name?.slice(0, 1) : ""}
        </Avatar>
        <h2 className="text-2xl font-semibold">
          Welcome Back! {session?.user?.name}{" "}
        </h2>
      </div>
      {/* <div className="md:w-[80vw] lg:w-[88svw]">
        <CarouselCard content={content} />
      </div> */}
      <CardComponent>
        <div className="flex gap-16  ">
          <Image src={"/next.svg"} height={500} width={500} alt="pic" />{" "}
          <div className="flex flex-col gap-3">
            <h3 className="font-semibold text-lg">
              NextJs Complete Courses for Beginners- Full Stack course
            </h3>
            <p className="text-base font-normal">
              Learn and practise with our talented instructors.
            </p>
            <p className="font-light text-xs">By Dwash Karma</p>
            <p className="text-sm font-medium">
              Updated{" "}
              <span className="text-chart-2 text-medium ">4 hours ago</span>
            </p>
            <div className="text-end">
              <span className="bg-dark p-2 text-white text-sm">
                Best Seller
              </span>
            </div>
            <div className="text-lg font-semibold">$ 12.99</div>
          </div>
        </div>
      </CardComponent>
      <Divider />
      <h2 className="text-2xl font-medium text-chart-1">Recommended for you</h2>
      <div className="grid grid-cols-4  gap-6">
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
