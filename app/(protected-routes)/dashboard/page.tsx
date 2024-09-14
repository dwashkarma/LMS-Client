"use client";
import CardComponent from "@/components/shared/CardComponent";
import CarouselCard from "@/components/shared/CarouselCard";
import SkeletonComponent from "@/components/shared/SkeletonComponent";
import TabComponent from "@/components/tabs";
import { Avatar, Divider, Rating } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const { data: session } = useSession();

  const { data, error } = useQuery({
    queryKey: ["recentCourses"],
    queryFn: async () => {
      return await axios
        .get(`${process.env.NEXT_PUBLIC_BASEURL}/courses`)
        .then((res) => res.data);
    },
  });

  console.log(data);
  return (
    <div className="mx-5 lg:mx-28  flex flex-col  gap-6 my-6 ">
      <div className="flex gap-2 items-center">
        <Avatar sx={{ bgcolor: "chocolate" }}>
          {session ? session?.user?.name?.slice(0, 1) : ""}
        </Avatar>
        <h2 className="text-2xl font-semibold">
          Welcome!
          <span className="font-serif text-primary">
            {session?.user?.name}{" "}
          </span>
        </h2>
      </div>
      {/* <div className="md:w-[80vw] lg:w-[88svw]">
        <CarouselCard content={content} />
      </div> */}

      <div className="md:flex-row flex-col flex gap-16 bg-slate-200 border shadow p-10 ">
        <Image src={"/next.svg"} height={500} width={500} alt="pic" />{" "}
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-lg">
            NextJs Complete Courses for Beginners- Full Stack course
          </h3>
          <p className="text-base font-normal">
            Learn and practise with our talented instructors.
          </p>
          <p className="font-light text-base text-primary">By Dwash Karma</p>
          <Rating value={3.5} precision={0.5} />
          <div className="text-sm font-medium flex justify-between items-center">
            <div>
              Updated{" "}
              <span className="text-light text-medium ">4 hours ago</span>
            </div>
            <span className="bg-dark p-2 text-white text-sm">Best Seller</span>
          </div>
          <div className="text-end"></div>
          <div className="text-lg  flex gap-4">
            <span className="font-semibold">$ 12.99</span>
            <span
              className=" font-light text-slate-500"
              style={{ textDecoration: "line-through" }}
            >
              $ 18.99
            </span>
          </div>
        </div>
      </div>

      <Divider />
      <h2 className="text-2xl font-medium text-chart-1">Recommended for you</h2>
      <TabComponent />
      {data ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-6">
          {data?.map((item: any, index: number) => {
            return (
              <Link href={`/courses/${item._id}`}>
                <CardComponent key={index} data={item} imageurl="/logo.svg" />
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <SkeletonComponent />
          <SkeletonComponent />
          <SkeletonComponent />
          <SkeletonComponent />
        </div>
      )}
    </div>
  );
}
