import React from "react";
import "./styles.scss";

const defaultCarouselSlideItem = (carouselItem) => {
  return (
    <div className="carousel__slide-item">
      <div className="carousel__slide-item-img-link">
        <img src={carouselItem.image} alt="carousel" />
        <div className="carousel-slide-item__body">
          <h3>{carouselItem.title}</h3>
        </div>
      </div>
    </div>
  );
};

const Carousel = ({ carouselData, carouselSlideItem }) => {
  const [items, setItems] = React.useState(carouselData);
  const [activeIdx, setActiveIdx] = React.useState(0);
  const bigLength = carouselData.length;

  const prevClick = (jump = 1) => {
    setItems((prev) => {
      return prev.map((_, i) => prev[(i + jump) % bigLength]);
    });
  };

  const nextClick = (jump = 1) => {
    setItems((prev) => {
      return prev.map((_, i) => prev[(i - jump + bigLength) % bigLength]);
    });
  };

  const handleDotClick = (idx) => {
    if (idx < activeIdx) prevClick(activeIdx - idx);
    if (idx > activeIdx) nextClick(idx - activeIdx);
    setActiveIdx(idx);
  };

  return (
    <div className="carousel__wrap">
      <div className="carousel__inner">
        <div className="carousel__container">
          <ul className="carousel__slide-list">
            {items &&
              items.map((item, i) =>
                !!carouselSlideItem
                  ? carouselSlideItem(item)
                  : defaultCarouselSlideItem(item)
              )}
          </ul>
        </div>
        <div className="carousel__dots">
          {items &&
            items.map((pos, i) => (
              <button
                key={i}
                onClick={() => handleDotClick(i)}
                className={i === activeIdx ? "dot active" : "dot"}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;



