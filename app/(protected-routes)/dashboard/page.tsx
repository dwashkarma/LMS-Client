"use client";
import CardComponent from "@/components/card";
import CarouselCard from "@/components/shared/CarouselCard";
import { useState } from "react";
const content = [
  { id: 1, title: "Why us?", description: "loremlorem" },
  { id: 2, title: "What we Offer?", description: "loremlorem" },
];
export default function Home() {
  const [active, setActive] = useState(false);
  return (
    <div className="p-6 ">
      <CarouselCard content={content} />
      <CardComponent />
    </div>
  );
}
