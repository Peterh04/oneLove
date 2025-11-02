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
      name: "Chill & Groove",
      description:
        "Ease into the week with smooth beats, soulful house, and R&B.",
      day: "Monday",
      image: chillMonday,
    },
    tuesday: {
      name: "Latin Heat",
      description: "Turn up the passion with reggaeton, salsa, and bachata!",
      day: "Tuesday",
      image: latinTuesday,
    },
    wednesday: {
      name: "Hip-Hop Sessions",
      description:
        "From old-school classics to the latest trap bangers, Wednesday is all about rhythm and attitude.",
      day: "Wednesday",
      image: hipWednesday,
    },
    thursday: {
      name: "Throwback Grooves",
      description:
        "Rewind the clock with the best hits from the 80s, 90s, and early 2000s.",
      day: "Thursday",
      image: throwBackThursday,
    },
    friday: {
      name: "Electric Pulse",
      description:
        "EDM, techno, and house dominate the night as lights flash and the bass drops. High energy, non-stop dancing, and pure weekend adrenaline.",
      day: "Friday",
      image: electricFriday,
    },
    saturday: {
      name: "Club Royale",
      description:
        "All-out glamour and high-class vibes. Expect premium bottle service, elite DJs spinning mainstream hits, and a packed dance floor.",
      day: "Saturday",
      image: clubRoyaleSat,
    },
    sunday: {
      name: "Sunset Lounge",
      description:
        "Slow down, sip something smooth, and vibe to chillout, lo-fi, and deep house sounds. Cozy ambience, mellow lights, and a social crowd.",
      day: "Sunday",
      image: sunsetSunday,
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
