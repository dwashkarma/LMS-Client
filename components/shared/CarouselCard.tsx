"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
function CarouselCard({
  content,
}: {
  content: { id: number; title: string; description: string }[];
}) {
  return (
    <div className="lg:w-[97dvw]  min-h-[10vh]">
      <Swiper
        slidesPerView={1}
        // spaceBetween={30}
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
        className="lg:max-w-[100%] max-w-[90vw] place-items-center items-center grid rounded-lg"
      >
        {content.map((content) => {
          return (
            <SwiperSlide
              key={content.id}
              className="text-center bg-dark grid place-content-center items-end md:max-w-[100%]   min-h-[40vh]"
            >
              <div className="text-2xl font-semibold">{content.title}</div>
              <div className="text-lg font-normal">{content.description}</div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default CarouselCard;
