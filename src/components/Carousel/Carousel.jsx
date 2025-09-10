import React, { useEffect, useRef, useState } from 'react';
import './Carousel.css';

const AUTO_INTERVAL_MS = 3500;

const Carousel = ({ images = [], alt = 'Screenshot carousel', auto = true }) => {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  // Normalize images: accept strings or objects { src, caption }
  const slides = Array.isArray(images)
    ? images.map((img) => (typeof img === 'string' ? { src: img, caption: '' } : img))
    : [];

  const goTo = (i) => {
    if (slides.length === 0) return;
    const next = (i + slides.length) % slides.length;
    setIndex(next);
  };

  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  useEffect(() => {
    if (!auto || slides.length <= 1) return;
    timerRef.current = setInterval(next, AUTO_INTERVAL_MS);
    return () => clearInterval(timerRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, slides.length, auto]);

  if (!slides || slides.length === 0) return null;

  return (
    <div className="carousel">
      <div className="carousel-viewport">
        {slides.map((slide, i) => (
          <img
            key={i}
            src={slide.src}
            alt={alt}
            className={`carousel-slide ${i === index ? 'active' : ''}`}
            loading="lazy"
          />
        ))}
        {slides[index]?.caption && (
          <div className="carousel-caption">
            {slides[index].caption}
          </div>
        )}
      </div>
      {slides.length > 1 && (
        <>
          <button className="carousel-nav prev" onClick={prev} aria-label="Previous">‹</button>
          <button className="carousel-nav next" onClick={next} aria-label="Next">›</button>
          <div className="carousel-dots">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`dot ${i === index ? 'active' : ''}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Carousel;


