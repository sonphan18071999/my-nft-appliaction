import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import { Autoplay } from "swiper/modules";

const logos = [
  { src: "/assets/logos/Amazon Logo.png", alt: "Amazon Logo" },
  { src: "/assets/logos/Slack Logo.png", alt: "Slack Logo" },
  { src: "/assets/logos/Paradigm Logo.png", alt: "Paradigm Logo" },
  { src: "/assets/logos/Chase Logo.png", alt: "Chase Logo" },
  { src: "/assets/logos/Binance Logo.png", alt: "Binance Logo" },
];

const CompanySection = () => {
  return (
    <div className="w-full py-8 bg-transparent">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={10}
        slidesPerView={3}
        autoplay={{ delay: 1500, disableOnInteraction: false }}
        speed={1000}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-16 object-contain transition-transform duration-500 hover:scale-105"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CompanySection;
