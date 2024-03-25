import cl from "./Price.module.scss";

const Price = () => {
  return (
    <main className={cl.Price}>
      <section className={cl.first_box}>
        <h2>
          Цены на ведение <br /> маркетплейсов
        </h2>
      </section>

      <section className={cl.second_box}>
        <h3>
          Сопровождение на маркетплейсе, консультационная и техническая
          поддержка за <br />1 месяц:
        </h3>
        <div className={cl.inner_second_box}>
          <article className={`${cl.first} ${cl.price_table}`}>
            <h6 className={cl.right}>Ассортимент</h6>
            <h6 className={cl.left}>Цена</h6>
          </article>
          <article className={cl.price_table}>
            <h6 className={cl.right}>
              1-50 SKU в ассортименте. Тариф «Стартовый»
            </h6>
            <h6 className={cl.left}> 25 000 руб./мес</h6>
          </article>
          <article className={cl.price_table}>
            <h6 className={cl.right}>
              51-100 SKU в ассортименте. Тариф «Стандартный»
            </h6>
            <h6 className={cl.left}> 32 000 руб./мес</h6>
          </article>
          <article className={cl.price_table}>
            <h6 className={cl.right}>
              101-200 SKU в ассортименте. Тариф «Расширенный»
            </h6>
            <h6 className={cl.left}>42 000 руб./мес</h6>
          </article>
          <article className={cl.price_table}>
            <h6 className={cl.right}>
              Более 200 SKU в ассортименте. Тариф «Индивидуальный»
            </h6>
            <h6 className={cl.left}>Цена рассчитывается индивидуально</h6>
          </article>
        </div>
      </section>
      <section className={cl.second_box}>
        <h3>Подбор товаров</h3>
        <div className={cl.inner_second_box}>
          <article className={`${cl.first} ${cl.price_table}`}>
            <h6 className={cl.right}>Ассортимент</h6>
            <h6 className={cl.left}>Цена</h6>
          </article>
          <article className={cl.price_table}>
            <h6 className={cl.right}>Тариф «Стартовый»</h6>
            <h6 className={cl.left}> 25 000 руб./мес</h6>
          </article>
          <article className={cl.price_table}>
            <h6 className={cl.right}>Тариф «Стандартный»</h6>
            <h6 className={cl.left}> 60 000 руб.</h6>
          </article>
          <article className={cl.price_table}>
            <h6 className={cl.right}>Тариф «Расширенный»</h6>
            <h6 className={cl.left}> 200 000 руб.</h6>
          </article>
        </div>

        <p className={cl.text_center}>
          *Цена указана для категории товаров до 1000 руб. <br /> Свяжитесь с
          нашим менеджером по ценам для других категорий.
        </p>
      </section>

      <section className={cl.second_box}>
        <h3>Быстрый старт «с нуля»</h3>
        <div className={cl.inner_second_box}>
          <article className={`${cl.first} ${cl.price_table}`}>
            <h6 className={cl.right}>Ассортимент</h6>
            <h6 className={cl.left}>Цена</h6>
          </article>
          <article className={cl.price_table}>
            <h6 className={cl.right}>Тариф «Стартовый»</h6>
            <h6 className={cl.left}> 25 000 руб./мес</h6>
          </article>
        </div>
      </section>

      <section className={cl.second_box}>
        <h3>Продвижение</h3>
        <div className={cl.inner_second_box}>
          <article className={`${cl.first} ${cl.price_table}`}>
            <h6 className={cl.right}>Ассортимент</h6>
            <h6 className={cl.left}>Цена</h6>
          </article>
          <article className={cl.price_table}>
            <h6 className={cl.right}>«Продвижение» до 50 SKU, в месяц</h6>
            <h6 className={cl.left}> 50 000 руб.</h6>
          </article>
          <article className={cl.price_table}>
            <h6 className={cl.right}>
              «Продвижение» от 51 до 200 SKU, в месяц
            </h6>
            <h6 className={cl.left}>65 000 руб.</h6>
          </article>
          <article className={cl.price_table}>
            <h6 className={cl.right}>«Продвижение» свыше 201 SKU, в месяц</h6>
            <h6 className={cl.left}>рассчитывается индивидуально</h6>
          </article>
        </div>
      </section>

      <section className={cl.second_box}>
        <h2 className={cl.inner_title}>+200 SKU</h2>
        <h3>Заведение новых карточек, цена за 1 товарное предложение:</h3>
        <div className={cl.inner_second_box}>
          <article className={`${cl.first} ${cl.price_table}`}>
            <h6 className={cl.right}>Услуга</h6>
            <h6 className={cl.left}>Цена</h6>
          </article>
          <article className={cl.price_table}>
            <h6 className={cl.right}>Загрузка фотоконтента</h6>
            <h6 className={cl.left}> 50 руб.</h6>
          </article>
          <article className={cl.price_table}>
            <h6 className={cl.right}>SEO описание</h6>
            <h6 className={cl.left}> 50 руб.</h6>
          </article>
          <article className={cl.price_table}>
            <h6 className={cl.right}>Создание продающей инфографики</h6>
            <h6 className={cl.left}>200 руб.</h6>
          </article>
          <article className={cl.price_table}>
            <h6 className={cl.right}>Спецификация товара</h6>
            <h6 className={cl.left}>50 руб.</h6>
          </article>
        </div>
      </section>
      <section className={cl.second_box}>
        <h3>Персональный менеджер по: </h3>
        <div className={cl.inner_second_box}>
          <article className={`${cl.first} ${cl.price_table}`}>
            <h6 className={cl.right}>Услуга</h6>
            <h6 className={cl.left}>Цена</h6>
          </article>
          <article className={cl.price_table}>
            <h6 className={cl.right}>Сопровождению отгрузки</h6>
            <h6 className={cl.left}> 20 000 руб.*</h6>
          </article>
          <article className={cl.price_table}>
            <h6 className={cl.right}>Работе с отзывами и вопросами</h6>
            <h6 className={cl.left}> 10 000 руб.*</h6>
          </article>
          <article className={cl.price_table}>
            <h6 className={cl.right}>Продвижению</h6>
            <h6 className={cl.left}>50 000 руб.*</h6>
          </article>
        </div>
      </section>
    </main>
  );
};

export default Price;
