import React from "react";
import cl from "./SupportMarket.module.scss";
import line1 from "../../../assets/img/line1.svg";
import line from "../../../assets/img/line11.svg";
import point from "../../../assets/img/check-mark.png";

function SupportMarket() {
  return (
    <div className={cl.wrap}>
      <div className={cl.start}>
        <img
          className={cl.startIMG}
          src="https://static.tildacdn.com/tild3465-6337-4762-a431-343532333136/SERVICE_w_1.svg"
          alt=""
        />
        <p className={cl.startP}>
          СОПРОВОЖДЕНИЕ <br /> НА МАРКЕТПЛЕЙСАХ
        </p>
        <img className={cl.startLineImg} src={line1} alt="line" />
      </div>
      <div className={cl.descrip}>
        <div className={cl.desc1}>
          <p className={cl.desc1p}>
            Вам нужны успешные продажи через маркетплейс? Мы рады помочь вам
            осуществить рентабельное размещение ваших товаров на известных
            площадках маркетплейса. С нами любой товар получит разумное и
            действенное продвижение. Аналитика, стратегия и максимальное
            использование всех инструментов, которые предоставляются продавцу на
            брендовых маркетплейсах, продажа любого товара принесет желаемую
            прибыль и выгоду. Воспользовавшись услугой нашего сервиса, вы
            сможете начать работать сразу в оптимальном режиме, потому что мы:
          </p>
          <img
            className={cl.desc1img}
            src="https://static.tildacdn.com/tild6532-3366-4362-b264-663663656466/WBHELP_logo_PINKWHIT.svg"
            alt=""
          />
        </div>
        <div className={cl.desc2}>
          <div className={cl.desc2top}>
            <div className={cl.desc2top1}>
              <img className={cl.desc2img} src={point} alt="point" />
              <p className={cl.desc2p}>
                помогаем выбрать лучшие торговые площадки в интернете
              </p>
            </div>
            <div className={cl.desc2top2}>
              <img className={cl.desc2img} src={point} alt="point" />
              <p className={cl.desc2p}>
                оказываем полную информационную поддержку и ведем весь
                документооборот
              </p>
            </div>
          </div>
          <div className={cl.desc2top}>
            <div className={cl.desc2top1}>
              <img className={cl.desc2img} src={point} alt="point" />
              <p className={cl.desc2p}>
                тщательно изучаем рынок, в том числе и данные по отдельным
                регионам
              </p>
            </div>
            <div className={cl.desc2top2}>
              <img className={cl.desc2img} src={point} alt="point" />
              <p className={cl.desc2p}>
                знаем и используем самые выгодные рекламные предложения и акции,
                которые предоставляет своим партнерам конкретный магазин
              </p>
            </div>
          </div>
        </div>
        <p className={cl.desc3}>
          Успешная продажа товаров на маркетплейсах требует опыта и знаний. Наши
          специалисты в области торговли на сайтах маркетплейса сделают ваш
          бизнес в сфере онлайн торговли защищенным от неожиданностей и
          непродуманных действий.
        </p>

        <img className={cl.startLineImg} src={line} alt="line" />
      </div>
    </div>
  );
}

export default SupportMarket;
