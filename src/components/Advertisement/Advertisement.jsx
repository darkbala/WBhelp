import { useState, useEffect } from "react";
import cl from "./Advertisement.module.scss";

const Advertisement = () => {
  const news = [
    "lalafo",
    "ozon",
    "wildberries",
    "asiamall",
    // Добавьте больше брендов с клоном, если нужно
    "lalafo",
    "ozon",
    "wildberries",
    "asiamall",
    "lalafo",
    "ozon",
    "wildberries",
    "asiamall",
  ];

  const [count, setCount] = useState(1);

  useEffect(() => {
    const list = document.querySelector(`.${cl["news-ticker"]} ul`);
    const itemsCount = list.children.length;

    const intervalId = setInterval(() => {
      if (count >= itemsCount) {
        setCount(1); // Сброс счетчика
      } else {
        setCount((prevCount) => prevCount + 1);
      }
    }, 5000); // Интервал прокрутки (5 секунд)

    return () => clearInterval(intervalId);
  }, [count]);

  const extendedNews = [...news, ...news, ...news];
  return (
    <div className={cl["news-ticker"]}>
      <ul style={{ "--count": count }}>
        {extendedNews.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Advertisement;
