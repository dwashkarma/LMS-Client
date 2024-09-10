"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
function CarouselCard({
  content,
}: {
  content: { id: number; title: string; description: string }[];
}) {
  return (
    <div className="max-w-[100%]  min-h-[10%]">
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="lg:max-w-[100%] max-w-[90vw] place-items-center items-center grid "
      >
        {content.map((content) => {
          return (
            <SwiperSlide
              key={content.id}
              className="text-center  bg-chart-5 grid place-content-center items-end md:max-w-[100%]   min-h-[40vh] text-primary"
            >
              <div className="flex justify-around mx-20 items-center">
                <Image
                  src={"/logo.svg"}
                  alt={content.title}
                  height={100}
                  width={100}
                />
                <div>
                  <div className="text-2xl font-semibold">{content.title}</div>
                  <div className="text-lg font-normal">
                    {content.description}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default CarouselCard;
