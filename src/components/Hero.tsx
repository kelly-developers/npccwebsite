import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { MapPin } from "lucide-react";

import heroImage from "@/assets/church-hero.jpg";
import bishopImage from "@/assets/bishop-isaiah.jpg";
import childrenImage from "@/assets/children-education.jpg";
import worshipImage from "@/assets/worship-healing.jpg";
import youthImage from "@/assets/youth.jpg";

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    { src: heroImage, alt: "Nabii Powerful Christian Church" },
    { src: bishopImage, alt: "Bishop Isaiah Moturi" },
    { src: childrenImage, alt: "Children Education" },
    { src: worshipImage, alt: "Worship and Healing" },
    { src: youthImage, alt: "Youth Ministry" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-primary-glow/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-6xl mx-auto">
        <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-snug sm:leading-tight drop-shadow-lg">
          Nabii Powerful{" "}
          <span className="block text-secondary">Christian Church</span>
        </h1>

        <p className="font-inter text-base sm:text-lg md:text-xl text-white/90 mb-4 max-w-3xl mx-auto drop-shadow">
          Experience Healing & Transformation in Mukuru Kwa Njenga, Nairobi
        </p>

        <p className="font-inter text-sm sm:text-base md:text-lg text-white/80 mb-8 max-w-2xl mx-auto drop-shadow-sm">
          Led by Senior Bishop Isaiah Moturi, we are a community dedicated to
          spiritual growth, healing miracles, and transforming lives through the
          power of Christ.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            variant="hero"
            size="lg"
            className="font-inter px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg"
          >
            Watch Sermons
          </Button>
          <Button
            variant="hero"
            size="lg"
            className="font-inter px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Join Our Ministry
          </Button>
        </div>

        {/* Church Location with Icon */}
        <div className="mt-10 sm:mt-12 text-white">
          <div className="flex items-center justify-center">
            <MapPin className="h-6 w-6 mr-2 text-white drop-shadow-sm" />
            <p className="font-inter text-base sm:text-lg md:text-xl text-white">
              Mukuru Kwa Njenga, Nairobi, Kenya
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Gradient Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-background to-transparent z-20"></div>
    </section>
  );
};

export default Hero;
