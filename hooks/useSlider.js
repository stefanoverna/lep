import { useState } from "react";

function useSlider(slideCount) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const setSlide = (id) => {
    if (id > slideCount || id < 0) {
      return;
    }

    setCurrentSlide(id);
  };

  const nextSlide = () => {
    if (currentSlide >= slideCount - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(slideCount - 1);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return { currentSlide, setCurrentSlide, nextSlide, prevSlide, setSlide };
}

export default useSlider;
