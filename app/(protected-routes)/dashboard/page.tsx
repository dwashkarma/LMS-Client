import CarouselCard from "@/components/shared/CarouselCard";
const content = [
  { id: 1, title: "Why us?", description: "loremlorem" },
  { id: 2, title: "What we Offer?", description: "loremlorem" },
];
export default function Home() {
  return (
    <div className="p-6 ">
      <CarouselCard content={content} />
    </div>
  );
}
