import React from "react";
import cl from "./Mainpage.module.scss";
import Advertisement from "../../components/Advertisement/Advertisement";
import Test from "../../components/Test/CardComponent";
import CardComponent from "../../components/Test/CardComponent";
import AnimationCards from "../../components/AnimationCards/AnimationCards";

function MainPage() {
  return (
    <main className={cl["Main"]}>
      <section className={cl["header"]}>
        <div className={cl["title"]}>
          <h2>
            WB <span>HELP</span>
          </h2>
          <p>
            Помощь в сотрудничестве <br />с маркетплейсами
          </p>
        </div>
        <div className={cl["advertisment_cont"]}>
          <Advertisement />
        </div>
        <div className={cl.circle}>
          <img
            src="https://static.tildacdn.com/tild3666-6434-4864-b330-613636373433/SALE.svg"
            alt="circle "
            width={280}
            height={280}
          />
        </div>

        <button className={cl.btn_cont}>заказать звонок</button>
      </section>

      <section className={cl.services}>
        <img
          src="https://static.tildacdn.com/tild6262-6638-4031-b630-376665626164/WBHELP_logo_SQ.svg"
          alt="logo"
          width={200}
        />
        <h3 className={cl.service_title}>НАШИ УСЛУГИ</h3>
        <div className={cl.service_cont}>
          <article className={cl.service_card}>
            <img
              src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3Y5MzctYWV3LTEzOS5qcGc.jpg"
              alt=""
              width={100}
            />

            <aside>
              <h3>Lorem ipsum dolor sit amet.</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid assumenda eveniet non porro praesentium reiciendis saepe
                suscipit.
              </p>
              <button>Подробнее</button>
            </aside>
          </article>
          <article className={cl.service_card}>
            <img
              src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3Y5MzctYWV3LTEzOS5qcGc.jpg"
              alt=""
              width={100}
            />

            <aside>
              <h3>Lorem ipsum dolor sit amet.</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid assumenda eveniet non porro praesentium reiciendis saepe
                suscipit.
              </p>
              <button>Подробнее</button>
            </aside>
          </article>
          <article className={cl.service_card}>
            <img
              src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3Y5MzctYWV3LTEzOS5qcGc.jpg"
              alt=""
              width={100}
            />

            <aside>
              <h3>Lorem ipsum dolor sit amet.</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid assumenda eveniet non porro praesentium reiciendis saepe
                suscipit.
              </p>
              <button>Подробнее</button>
            </aside>
          </article>
          <article className={cl.service_card}>
            <img
              src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3Y5MzctYWV3LTEzOS5qcGc.jpg"
              alt=""
              width={100}
            />

            <aside>
              <h3>Lorem ipsum dolor sit amet.</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid assumenda eveniet non porro praesentium reiciendis saepe
                suscipit.
              </p>

              <button>Подробнее</button>
            </aside>
          </article>

          <article className={cl.service_card}>
            <img
              src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3Y5MzctYWV3LTEzOS5qcGc.jpg"
              alt=""
              width={100}
            />

            <aside>
              <h3>Lorem ipsum dolor sit amet.</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid assumenda eveniet non porro praesentium reiciendis saepe
                suscipit.
              </p>
              <button>Подробнее</button>
            </aside>
          </article>
          <article className={cl.service_card}>
            <img
              src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3Y5MzctYWV3LTEzOS5qcGc.jpg"
              alt=""
              width={100}
            />

            <aside>
              <h3>Lorem ipsum dolor sit amet.</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid assumenda eveniet non porro praesentium reiciendis saepe
                suscipit.
              </p>
              <button>Подробнее</button>
            </aside>
          </article>
          <article className={cl.service_card}>
            <img
              src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3Y5MzctYWV3LTEzOS5qcGc.jpg"
              alt=""
              width={100}
            />

            <aside>
              <h3>Lorem ipsum dolor sit amet.</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid assumenda eveniet non porro praesentium reiciendis saepe
                suscipit.
              </p>
              <button>Подробнее</button>
            </aside>
          </article>
          <article className={cl.service_card}>
            <img
              src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3Y5MzctYWV3LTEzOS5qcGc.jpg"
              alt=""
              width={100}
            />

            <aside>
              <h3>Lorem ipsum dolor sit amet.</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid assumenda eveniet non porro praesentium reiciendis saepe
                suscipit.
              </p>

              <button>Подробнее</button>
            </aside>
          </article>
          <article className={cl.service_card}>
            <img
              src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3Y5MzctYWV3LTEzOS5qcGc.jpg"
              alt=""
              width={100}
            />

            <aside>
              <h3>Lorem ipsum dolor sit amet.</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid assumenda eveniet non porro praesentium reiciendis saepe
                suscipit.
              </p>
              <button>Подробнее</button>
            </aside>
          </article>
          <article className={cl.service_card}>
            <img
              src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3Y5MzctYWV3LTEzOS5qcGc.jpg"
              alt=""
              width={100}
            />

            <aside>
              <h3>Lorem ipsum dolor sit amet.</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid assumenda eveniet non porro praesentium reiciendis saepe
                suscipit.
              </p>
              <button>Подробнее</button>
            </aside>
          </article>
          <article className={cl.service_card}>
            <img
              src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3Y5MzctYWV3LTEzOS5qcGc.jpg"
              alt=""
              width={100}
            />

            <aside>
              <h3>Lorem ipsum dolor sit amet.</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid assumenda eveniet non porro praesentium reiciendis saepe
                suscipit.
              </p>
              <button>Подробнее</button>
            </aside>
          </article>
          <article className={cl.service_card}>
            <img
              src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3Y5MzctYWV3LTEzOS5qcGc.jpg"
              alt=""
              width={100}
            />

            <aside>
              <h3>Lorem ipsum dolor sit amet.</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid assumenda eveniet non porro praesentium reiciendis saepe
                suscipit.
              </p>

              <button>Подробнее</button>
            </aside>
          </article>
        </div>
      </section>

      {/* <section className={cl.sheme}>
        <AnimationCards />
      </section> */}

      <section className={cl.banner}>
        <div className={cl.inner_banner}>
          <article className={cl.banner_text}>
            <p>
              WBhelp — молодая компания профессионалов в области интернет
              торговли. Мы любим свое дело и обладаем уникальным практическим
              опытом работы на отечественных и международных маркетплейсах.{" "}
            </p>

            <button>ПОДРОБНЕЕ О НАС </button>
          </article>
          <img
            src="https://static.tildacdn.com/tild6135-3437-4631-b838-616563656535/WBHELP_logo_PINKWHIT.svg"
            alt=""
            height={150}
          />
        </div>
      </section>
      <div className={cl.call}>
        <button>заказать звонок</button>
      </div>

      <section className={cl.marketplays}>
        <div className={cl.inner_big_cont}>
          <div className={cl.left_text_cont}>
            <span>
              <img
                src="https://static.tildacdn.com/tild3036-3132-4134-b233-646565363963/market.svg"
                alt=""
                width={100}
              />
              <h3>маркетплейсы</h3>
            </span>
            <p>
              это мощнейший инструмент для торговли в современной России.
              Популярность онлайн-покупок растёт, как и возможности
              предпринимателей продвигать свой бизнес в интернет-магазинах.
            </p>
            <p>
              Однако, вместе с популярностью растет и конкуренция, поэтому,
              чтобы быть успешным на маркетплейсах (таких, как Wildberries,
              Ozon, AliExpress) необходимо разбираться во всех тонкостях продаж.
            </p>

            <button>узнать больще</button>
          </div>
          <div className={cl.img_cont}></div>
        </div>
      </section>

      <section className={cl.news_cont}>
        <h2 className={cl.title}>НОВОСТИ E-Comerce</h2>
        <div className={cl.news_card_cont}>
          <article>
            <img
              src="https://static.tildacdn.com/tild3333-3835-4931-b865-383262346433/49cc93f708401992b0d9.jpg"
              alt="iolnsdf"
              width={390}
            />
            <aside>
              <small>31.03.2022</small>
              <h4>
                Как инвестировать в маркетплейсы и кто в этом может помочь
              </h4>
              <p>
                В наше нестабильное время очень остро стоит вопрос сбережения и
                выгодного вложения имеющихся свободных денежных средств.
              </p>
            </aside>
          </article>
          <article>
            <img
              src="https://static.tildacdn.com/tild3333-3835-4931-b865-383262346433/49cc93f708401992b0d9.jpg"
              alt="iolnsdf"
              width={390}
            />
            <aside>
              <small>31.03.2022</small>
              <h4>
                Как инвестировать в маркетплейсы и кто в этом может помочь
              </h4>
              <p>
                В наше нестабильное время очень остро стоит вопрос сбережения и
                выгодного вложения имеющихся свободных денежных средств.
              </p>
            </aside>
          </article>
          <article>
            <img
              src="https://static.tildacdn.com/tild3333-3835-4931-b865-383262346433/49cc93f708401992b0d9.jpg"
              alt="iolnsdf"
              width={390}
            />
            <aside>
              <small>31.03.2022</small>
              <h4>
                Как инвестировать в маркетплейсы и кто в этом может помочь
              </h4>
              <p>
                В наше нестабильное время очень остро стоит вопрос сбережения и
                выгодного вложения имеющихся свободных денежных средств.
              </p>
            </aside>
          </article>
        </div>

        <div className={cl.all_news_btn}>
          <button>Все НОВОСТИ</button>
        </div>
      </section>

      <section className={cl.request_cont}>
        <div className={cl.inner_request_cont}>
          <h3>
            ЗАПОЛНИТЕ ЗАЯВКУ <br />
            ДЛЯ СОТРУДНИЧЕСТВА
          </h3>
          <div className={cl.request_btn}>
            <button>Все НОВОСТИ</button>
          </div>
          <p>
            Нажимая ОТПРАВИТЬ вы соглашаетесь с обработкой ваших данных.
            Подробности можно узнать в нашей{" "}
            <a href="#">Политике конфиденциальности.</a>
          </p>
        </div>
      </section>
    </main>
  );
}

export default MainPage;
