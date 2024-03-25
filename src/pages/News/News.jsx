import { Link } from "react-router-dom";
import cl from "./News.module.scss";

const News = () => {
  return (
    <div className={cl.News}>
      <section className={cl.head}>
        <h2>
          Узнавайте последние новости о деятельности маркетплейсов на нашем
          телеграм канале
        </h2>

        <Link to={"/"}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkoAhwJrB9_VkmB9ahuH59A0XmIFqC0gwMEg&usqp=CAU"
            alt=""
            width={100}
          />
        </Link>
      </section>
      <section className={cl.place}></section>

      <section className={cl.e_commerce}>
        <h2>НОВОСТИ E-COMMERCE</h2>
        <div>
          <p>ERROR:The Tilda is configured for another domain</p>
        </div>
      </section>
    </div>
  );
};

export default News;
