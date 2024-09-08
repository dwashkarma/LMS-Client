"use client";
import CardComponent from "@/components/shared/CardComponent";
import CarouselCard from "@/components/shared/CarouselCard";
import { Divider } from "@mui/material";
import { useState } from "react";
const content = [
  { id: 1, title: "Why us?", description: "loremlorem" },
  { id: 2, title: "What we Offer?", description: "loremlorem" },
];
export default function Home() {
  const [active, setActive] = useState(false);
  return (
    <div className="p-6  flex flex-col gap-6 ">
      <div className="w-[100%]">
        <CarouselCard content={content} />
      </div>
      <Divider />
      <div className="grid grid-cols-4 gap-4 justify-center">
        <CardComponent title="Card 1" footer="hey">
          <div>something!!!!!!!</div>
        </CardComponent>
        <CardComponent title="Card 1" footer="hey">
          <div>something!!!!!!!</div>
        </CardComponent>
        <CardComponent title="Card 1" footer="hey">
          <div>something!!!!!!!</div>
        </CardComponent>
        <CardComponent title="Card 1" footer="hey">
          <div>something!!!!!!!</div>
        </CardComponent>
      </div>
    </div>
  );
}
