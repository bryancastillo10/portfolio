import { useState, useEffect } from "react";

interface CardCarouselContentProps {
  id: number;
  projectTitle: string;
  projectSubtitle:string;
  description:string;
  techStack: string[];
  image: string;
  demoLink:string;
  gitRepo:string;
}

const useCardCarousel = (array: CardCarouselContentProps[]) => {
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const autoSlide: boolean = true;
  const autoSlideInterval: number = 5000;
  const handlePrevious = () => {
    setSlideIndex((index) => (index === 0 ? array.length - 1 : index - 1));
  };

  const handleNext = () => {
    setSlideIndex((index) => (index === array.length - 1 ? 0 : index + 1));
  };
  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(handleNext, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  return { slideIndex, handlePrevious, handleNext };
};

export default useCardCarousel;