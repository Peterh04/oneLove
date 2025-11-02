import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "../styles/themeCarousel.css";

import chillMonday from "../assets/chill.jpg";
import latinTuesday from "../assets/latin.jpg";
import hipWednesday from "../assets/hiphop.png";
import throwBackThursday from "../assets/throwback.jpg";
import electricFriday from "../assets/electric.jpg";
import clubRoyaleSat from "../assets/club_royale.jpg";
import sunsetSunday from "../assets/sunset.png";

import BackIcon from "../assets/icons/back1.svg?react";
import ForwardIcon from "../assets/icons/forward.svg?react";

export default function ThemeCarousel() {
  const themes = {
    monday: {
      name: "RnB Nights",
      description:
        "Chill out to smooth RnB sounds and sultry slow jams. The perfect start to your week — relaxed, rhythmic, and full of style.",
      day: "Monday",
      image: chillMonday,
    },
    tuesday: {
      name: "Hip-Hop & Rap",
      description:
        "From old-school classics to the latest trap bangers, Wednesday is all about rhythm and attitude.",
      day: "Tuesday",
      image: hipWednesday,
    },
    wednesday: {
      name: "Karaoke Night",
      description:
        "Grab the mic and own the spotlight! Sing your heart out with friends for a fun, lively midweek escape.",
      image: clubRoyaleSat,
    },
    thursday: {
      name: "Multicultural Night",
      description:
        "Travel the world through music! From Afrobeat to Reggaeton, Bollywood to Latin — one dance floor, endless cultures.",
      day: "Thursday",
      image: throwBackThursday,
    },
    friday: {
      name: "Pop Paradise",
      description:
        "All-out glamour and high-class vibes. Expect premium bottle service, elite DJs spinning mainstream hits, and a packed dance floor.",
      day: "Friday",
      image: electricFriday,
    },
    saturday: {
      name: "General",
      description:
        "The ultimate party night — top DJs, all genres, and nonstop fun till sunrise. Saturday is where the weekend comes alive.",
      day: "Saturday",
      image: clubRoyaleSat,
    },
    sunday: {
      name: "Soul & Dance",
      description:
        "Smooth soul meets vibrant dance beats. Feel the groove, move your body, and end the week with pure rhythm and good vibes.",
      day: "Sunday",
      image: latinTuesday,
    },
  };

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperReady, setSwiperReady] = useState(false);

  useEffect(() => {
    setSwiperReady(true);
  }, []);

  return (
    <div className="carousel-container">
      {/* Previous Button */}
      <button ref={prevRef} className="custom-prev" aria-label="Previous">
        <BackIcon className="fa" />
      </button>

      {swiperReady && (
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          loop={false}
          slidesPerView={1}
          spaceBetween={10}
          allowTouchMove={false}
          autoplay={false}
        >
          {Object.values(themes).map((theme, index) => (
            <SwiperSlide key={index} className="swiper-container">
              <div className="image-wrapper">
                <img
                  src={theme.image}
                  alt={`${theme.day} theme`}
                  className="product-image"
                />
                <div className="overlay">
                  <span className="day-tag">{theme.day}</span>
                  <div className="text-center">
                    <h2 className="theme-title">{theme.name}</h2>
                    <p className="theme-description">{theme.description}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {/* Next Button */}
      <button ref={nextRef} className="custom-next" aria-label="Next">
        <ForwardIcon className="fa" />
      </button>
    </div>
  );
}
