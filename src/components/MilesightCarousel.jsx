import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import bj from "../assets/images/nexyos/bj.jpg";
import bj2 from "../assets/images/nexyos/bj2.jpg";

const slides = [
  {
    image: bj,
    title: "5G AIoT Solution",
    subtitle: "Smarter, Faster, Connected",
    description: "Empowering industries with next-gen 5G, AI, and IoT technologies.",
  },
  {
    image: bj2,
    title: "LoRaWAN® Connectivity",
    subtitle: "Efficient Long-Range Communication",
    description: "Reliable and energy-efficient network infrastructure for smart cities.",
  },
  {
    image: bj,
    title: "Milesight Vision",
    subtitle: "Innovation at the Edge",
    description: "Explore breakthrough solutions for intelligent environments.",
  },
];

export default function MilesightCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => setCurrent((current - 1 + slides.length) % slides.length);
  const nextSlide = () => setCurrent((current + 1) % slides.length);

  return (
    <>
      <style>{`
        .carousel {
          position: relative;
          width: 100%;
          height: 80vh;
          overflow: hidden;
        }

        .slide {
          position: absolute;
          inset: 0;
          transition: opacity 1s ease-in-out;
        }
        .slide.hidden {
          opacity: 0;
          z-index: 0;
        }
        .slide.visible {
          opacity: 1;
          z-index: 1;
        }

        .slide img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
          padding: 2rem;
        }

        .text-box {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          padding: 2rem;
          border-radius: 1rem;
          text-align: center;
          color: white;
          max-width: 700px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
          animation: fadeCard 1s ease-in-out;
        }

        .text-title {
          font-size: 3rem;
          margin-bottom: 1rem;
          animation: slideDown 1s ease forwards;
        }
        .text-subtitle {
          font-size: 1.8rem;
          margin-bottom: 1rem;
          animation: slideLeft 1.2s ease forwards;
        }
        .text-description {
          font-size: 1.2rem;
          animation: slideUp 1.4s ease forwards;
        }

        @keyframes fadeCard {
          from {
            transform: scale(0.95);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes slideDown {
          0% { opacity: 0; transform: translateY(-30px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideLeft {
          0% { opacity: 0; transform: translateX(-30px); }
          100% { opacity: 1; transform: translateX(0); }
        }

        @keyframes slideUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .nav-button {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255, 255, 255, 0.7);
          padding: 0.5rem;
          border-radius: 999px;
          cursor: pointer;
          z-index: 20;
        }
        .nav-button:hover {
          background: white;
        }
        .left-button {
          left: 2rem;
        }
        .right-button {
          right: 2rem;
        }

        @media (max-width: 768px) {
          .text-box {
            padding: 1rem;
          }
          .text-title {
            font-size: 2rem;
          }
          .text-subtitle {
            font-size: 1.2rem;
          }
          .text-description {
            font-size: 1rem;
          }
        }
      `}</style>

      <div className="carousel">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === current ? "visible" : "hidden"}`}
          >
            <img src={slide.image} alt={slide.title} />
            {index === current && (
              <div className="overlay">
                <div className="text-box">
                  <h1 className="text-title">{slide.title}</h1>
                  <h3 className="text-subtitle">{slide.subtitle}</h3>
                  <p className="text-description">{slide.description}</p>
                </div>
              </div>
            )}
          </div>
        ))}

        <button onClick={prevSlide} className="nav-button left-button">
          <ChevronLeft size={28} />
        </button>
        <button onClick={nextSlide} className="nav-button right-button">
          <ChevronRight size={28} />
        </button>
      </div>
    </>
  );
}
