import { useState, useEffect, useRef } from "react";
import cl from "./AnimationCards.module.scss";

const AnimationCards = () => {
  const [circlePosition, setCirclePosition] = useState(0);
  const cardContainerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (cardContainerRef.current) {
        const containerTop =
          cardContainerRef.current.getBoundingClientRect().top;
        const scrollPosition = window.scrollY;
        setCirclePosition(scrollPosition - containerTop);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={cl.main_cont}>
      <section className={cl.card_cont}>
        <div className={cl.line_cont}>
          <section className={cl.cont}>
            <span className={cl.line}></span>
          </section>
        </div>
        <div
          className={cl.circle}
          style={{ top: `${circlePosition}px` }}
          ref={cardContainerRef}
        ></div>
        <ul className={cl.card_list} >
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
          <li>9</li>
          <li>10</li>
        </ul>
      </section>
    </div>
  );
};

export default AnimationCards;
