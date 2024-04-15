import { NavLink } from "react-router-dom";
import cl from "./Nav.module.scss";
import whatsapp from "../../assets/whatsapp.svg";
import telegram from "../../assets/telegram.svg";
import { useEffect, useState } from "react";

const Nav = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
  const [isDropdownOpen3, setIsDropdownOpen3] = useState(false);

  const toggleDropdown3 = () => {
    setIsDropdownOpen3(!isDropdownOpen3);
  };
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const toggleDropdown2 = () => {
    setIsDropdownOpen2(!isDropdownOpen2);
  };
  useEffect(() => {
    if (isDropdownOpen) {
      setIsDropdownOpen2(false);
      setIsDropdownOpen3(false);
    }
  }, [isDropdownOpen]);

  useEffect(() => {
    if (isDropdownOpen2) {
      setIsDropdownOpen(false);
      setIsDropdownOpen3(false);
    }
  }, [isDropdownOpen2]);

  useEffect(() => {
    if (isDropdownOpen3) {
      setIsDropdownOpen(false);
      setIsDropdownOpen2(false);
    }
  }, [isDropdownOpen3]);

  const closeDropdowns = () => {
    setIsDropdownOpen(false);
    setIsDropdownOpen2(false);
    setIsDropdownOpen3(false);
  };

  useEffect(() => {
    let timeoutId;

    if (isDropdownOpen) {
      timeoutId = setTimeout(() => {
        setIsDropdownOpen(false);
      }, 10000);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isDropdownOpen]);

  useEffect(() => {
    let timeoutId;

    if (isDropdownOpen2) {
      timeoutId = setTimeout(() => {
        setIsDropdownOpen2(false);
      }, 10000);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isDropdownOpen2]);

  useEffect(() => {
    let timeoutId;

    if (isDropdownOpen3) {
      timeoutId = setTimeout(() => {
        setIsDropdownOpen3(false);
      }, 10000);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isDropdownOpen3]);

  return (
    <header className={cl.main_cont}>
      <nav className={cl.top_nav}>
        <ul>
          <li>
            <NavLink to={"/"}>
              <h3>0(500)023120</h3>
            </NavLink>
          </li>
          <li>
            <p>звонок по России бесплатный</p>
            <p>9:00 • 19:00 (время московское)</p>
          </li>
          <li className={cl.icon}>
            <NavLink to={"/"}>
              <img src={whatsapp} alt="" width={30} />
            </NavLink>
            <NavLink to={"/"}>
              <img src={telegram} alt="" width={35} />
            </NavLink>
          </li>
        </ul>
      </nav>
      <nav className={cl.Nav}>
        <div className={cl.inner_nav}>
          <ul className={cl.main_links}>
            <li>
              <div className={cl.service}>
                <span>
                  <NavLink to={"/service"}> УСЛУГИ</NavLink>
                  <img
                    src="https://www.svgrepo.com/show/80156/down-arrow.svg"
                    alt=""
                    onClick={toggleDropdown}
                    width={20}
                  />
                </span>
                <div
                  className={`${cl.dropdown_menu} ${
                    isDropdownOpen ? cl.show : ""
                  }`}
                >
                  <ol>
                    <li>
                      <NavLink to={"/support"} onClick={closeDropdowns}>
                        Сопровождение на <br /> маркетплейсах
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={"/selection-goods"} onClick={closeDropdowns}>
                        подбор товаров
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={"/quick-start"} onClick={closeDropdowns}>
                        быстрый старт с нуля
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={"/promotion"} onClick={closeDropdowns}>
                        Продвижение
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={"/investments"} onClick={closeDropdowns}>
                        Инвестиции в маркетплейс
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={"/purchase-sale"} onClick={closeDropdowns}>
                        покупка\продажа ЛК на маркетплейсах
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={"sku/"} onClick={closeDropdowns}>
                        200 SKU. Для крупных магазинов
                      </NavLink>
                    </li>

                    <li>
                      <NavLink to={"/design-brand"} onClick={closeDropdowns}>
                        Брендиг\дизайн
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={"/studio"} onClick={closeDropdowns}>
                        фотостудия
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={"/ip-banks"} onClick={closeDropdowns}>
                        Открытия ИП или банковского счета{" "}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={"/"} onClick={closeDropdowns}>
                        Складские услуги
                      </NavLink>
                    </li>
                  </ol>
                </div>
              </div>
            </li>
            <li>
              <NavLink to={"/price"}>Цены</NavLink>
            </li>
            <li>
              <NavLink to={"/news"}>НОВОСТИ</NavLink>
            </li>
            <li>
              <div className={cl.service}>
                <span>
                  <NavLink to={"/service"}> О нас</NavLink>
                  <img
                    src="https://www.svgrepo.com/show/80156/down-arrow.svg"
                    alt=""
                    onClick={toggleDropdown2}
                    width={20}
                  />
                </span>
                <div
                  className={`${cl.dropdown_menu1} ${
                    isDropdownOpen2 ? cl.show : ""
                  }`}
                >
                  <ol>
                    <li>
                      <NavLink to={"/scheme-of-work"} onClick={closeDropdowns}>
                        Схема работы
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={"/contacts"} onClick={closeDropdowns}>
                        Контакты
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to={"/case-studies-of-our-clients"}
                        onClick={closeDropdowns}
                      >
                        Кейсы наших клиентов
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={"/reviews"} onClick={closeDropdowns}>
                        отзывы
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={"/vacancies"} onClick={closeDropdowns}>
                        Вакансии
                      </NavLink>
                    </li>
                  </ol>
                </div>
              </div>
            </li>
            <li>
              <div className={cl.service}>
                <span>
                  <NavLink to={"/info"}> Полезная информация</NavLink>
                  <img
                    src="https://www.svgrepo.com/show/80156/down-arrow.svg"
                    alt=""
                    onClick={toggleDropdown3}
                    width={20}
                  />
                </span>
                <div
                  className={`${cl.dropdown_menu2} ${
                    isDropdownOpen3 ? cl.show : ""
                  }`}
                >
                  <ol>
                    <li>
                      <NavLink
                        to={"/calculate-wildberries"}
                        onClick={closeDropdowns}
                      >
                        Калькулятор Wildberries
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to={"/all-about-marketplaces"}
                        onClick={closeDropdowns}
                      >
                        Все о маркетплейсах
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={"/faq"} onClick={closeDropdowns}>
                        FAQ
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={"/glossary"} onClick={closeDropdowns}>
                        Глоссарий
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={"/storage-schemes"} onClick={closeDropdowns}>
                        Схемы хранение товаров
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to={"/warehouses-wildberries"}
                        onClick={closeDropdowns}
                      >
                        Склады Wildberries
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={"/warehouses-ozon"} onClick={closeDropdowns}>
                        Склады Ozon
                      </NavLink>
                    </li>
                  </ol>
                </div>
              </div>
            </li>
          </ul>
          <button className={cl.book}>Заказать звонок</button>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
