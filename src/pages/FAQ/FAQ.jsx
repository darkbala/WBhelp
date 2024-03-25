import { useState } from "react";
import cl from "./FAQ.module.scss";

const FAQ = () => {
  const [isActive, setIsActive] = useState(false);
  const [isRotated, setIsRotated] = useState(false);
  const handleClick = () => {
    setIsActive(!isActive);
    setIsRotated(!isRotated);
  };
  return (
    <div className={cl.FAQ}>
      <section className={cl.place}></section>

      <section className={cl.head}>
        <div className={cl.left}>
          <h3>FAQ</h3>
          <p>
            ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ ПО РАБОТЕ <br />С МАРКЕТПЛЕЙСАМИ{" "}
          </p>
        </div>
        <div className={cl.right}>
          <button>Lorem.</button>
          <button>Lorem.</button>
          <button>Lorem.</button>
          <button>Lorem.</button>
          <button>Lorem.</button>
          <button>Lorem.</button>
        </div>
      </section>

      <section className={cl.place}></section>

      <section className={cl.wild}>
        <h4>WILDBERRIES</h4>

        <div className={cl.cont}>
          <div className={cl.Stage}>
            <button className={cl.Stage_button} onClick={handleClick}>
              <h6 className={cl.Stage_button_h6}>Регистрация поставщика</h6>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                className={`${cl.Stage_icon} ${isRotated ? cl.rotated : ""}`}
              >
                <line
                  x1="0"
                  y1="0"
                  x2="24"
                  y2="24"
                  stroke="black"
                  strokeWidth="2"
                />
                <line
                  x1="24"
                  y1="0"
                  x2="0"
                  y2="24"
                  stroke="black"
                  strokeWidth="2"
                />
              </svg>
            </button>
            <div
              className={
                isActive ? `${cl.Stage_div} ${cl.expanded}` : cl.Stage_div
              }
            >
              {isActive && (
                <div className={cl.inner_cont}>
                  <ul>
                    <li>Как зарегистрировать нового поставщика на ВБ</li>
                    <li>Как получить доступ к кабинету поставщика</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className={cl.Stage}>
            <button className={cl.Stage_button} onClick={handleClick}>
              <h6 className={cl.Stage_button_h6}>Регистрация поставщика</h6>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                className={`${cl.Stage_icon} ${isRotated ? cl.rotated : ""}`}
              >
                <line
                  x1="0"
                  y1="0"
                  x2="24"
                  y2="24"
                  stroke="black"
                  strokeWidth="2"
                />
                <line
                  x1="24"
                  y1="0"
                  x2="0"
                  y2="24"
                  stroke="black"
                  strokeWidth="2"
                />
              </svg>
            </button>
            <div
              className={
                isActive ? `${cl.Stage_div} ${cl.expanded}` : cl.Stage_div
              }
            >
              {isActive && (
                <div className={cl.inner_cont}>
                  <ul>
                    <li>Как зарегистрировать нового поставщика на ВБ</li>
                    <li>Как получить доступ к кабинету поставщика</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className={cl.Stage}>
            <button className={cl.Stage_button} onClick={handleClick}>
              <h6 className={cl.Stage_button_h6}>Регистрация поставщика</h6>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                className={`${cl.Stage_icon} ${isRotated ? cl.rotated : ""}`}
              >
                <line
                  x1="0"
                  y1="0"
                  x2="24"
                  y2="24"
                  stroke="black"
                  strokeWidth="2"
                />
                <line
                  x1="24"
                  y1="0"
                  x2="0"
                  y2="24"
                  stroke="black"
                  strokeWidth="2"
                />
              </svg>
            </button>
            <div
              className={
                isActive ? `${cl.Stage_div} ${cl.expanded}` : cl.Stage_div
              }
            >
              {isActive && (
                <div className={cl.inner_cont}>
                  <ul>
                    <li>Как зарегистрировать нового поставщика на ВБ</li>
                    <li>Как получить доступ к кабинету поставщика</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className={cl.Stage}>
            <button className={cl.Stage_button} onClick={handleClick}>
              <h6 className={cl.Stage_button_h6}>Регистрация поставщика</h6>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                className={`${cl.Stage_icon} ${isRotated ? cl.rotated : ""}`}
              >
                <line
                  x1="0"
                  y1="0"
                  x2="24"
                  y2="24"
                  stroke="black"
                  strokeWidth="2"
                />
                <line
                  x1="24"
                  y1="0"
                  x2="0"
                  y2="24"
                  stroke="black"
                  strokeWidth="2"
                />
              </svg>
            </button>
            <div
              className={
                isActive ? `${cl.Stage_div} ${cl.expanded}` : cl.Stage_div
              }
            >
              {isActive && (
                <div className={cl.inner_cont}>
                  <ul>
                    <li>Как зарегистрировать нового поставщика на ВБ</li>
                    <li>Как получить доступ к кабинету поставщика</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className={cl.Stage}>
            <button className={cl.Stage_button} onClick={handleClick}>
              <h6 className={cl.Stage_button_h6}>Регистрация поставщика</h6>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                className={`${cl.Stage_icon} ${isRotated ? cl.rotated : ""}`}
              >
                <line
                  x1="0"
                  y1="0"
                  x2="24"
                  y2="24"
                  stroke="black"
                  strokeWidth="2"
                />
                <line
                  x1="24"
                  y1="0"
                  x2="0"
                  y2="24"
                  stroke="black"
                  strokeWidth="2"
                />
              </svg>
            </button>
            <div
              className={
                isActive ? `${cl.Stage_div} ${cl.expanded}` : cl.Stage_div
              }
            >
              {isActive && (
                <div className={cl.inner_cont}>
                  <ul>
                    <li>Как зарегистрировать нового поставщика на ВБ</li>
                    <li>Как получить доступ к кабинету поставщика</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className={cl.Stage}>
            <button className={cl.Stage_button} onClick={handleClick}>
              <h6 className={cl.Stage_button_h6}>Регистрация поставщика</h6>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                className={`${cl.Stage_icon} ${isRotated ? cl.rotated : ""}`}
              >
                <line
                  x1="0"
                  y1="0"
                  x2="24"
                  y2="24"
                  stroke="black"
                  strokeWidth="2"
                />
                <line
                  x1="24"
                  y1="0"
                  x2="0"
                  y2="24"
                  stroke="black"
                  strokeWidth="2"
                />
              </svg>
            </button>
            <div
              className={
                isActive ? `${cl.Stage_div} ${cl.expanded}` : cl.Stage_div
              }
            >
              {isActive && (
                <div className={cl.inner_cont}>
                  <ul>
                    <li>Как зарегистрировать нового поставщика на ВБ</li>
                    <li>Как получить доступ к кабинету поставщика</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className={cl.Stage}>
            <button className={cl.Stage_button} onClick={handleClick}>
              <h6 className={cl.Stage_button_h6}>Регистрация поставщика</h6>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                className={`${cl.Stage_icon} ${isRotated ? cl.rotated : ""}`}
              >
                <line
                  x1="0"
                  y1="0"
                  x2="24"
                  y2="24"
                  stroke="black"
                  strokeWidth="2"
                />
                <line
                  x1="24"
                  y1="0"
                  x2="0"
                  y2="24"
                  stroke="black"
                  strokeWidth="2"
                />
              </svg>
            </button>
            <div
              className={
                isActive ? `${cl.Stage_div} ${cl.expanded}` : cl.Stage_div
              }
            >
              {isActive && (
                <div className={cl.inner_cont}>
                  <ul>
                    <li>Как зарегистрировать нового поставщика на ВБ</li>
                    <li>Как получить доступ к кабинету поставщика</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className={cl.Stage}>
            <button className={cl.Stage_button} onClick={handleClick}>
              <h6 className={cl.Stage_button_h6}>Регистрация поставщика</h6>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                className={`${cl.Stage_icon} ${isRotated ? cl.rotated : ""}`}
              >
                <line
                  x1="0"
                  y1="0"
                  x2="24"
                  y2="24"
                  stroke="black"
                  strokeWidth="2"
                />
                <line
                  x1="24"
                  y1="0"
                  x2="0"
                  y2="24"
                  stroke="black"
                  strokeWidth="2"
                />
              </svg>
            </button>
            <div
              className={
                isActive ? `${cl.Stage_div} ${cl.expanded}` : cl.Stage_div
              }
            >
              {isActive && (
                <div className={cl.inner_cont}>
                  <ul>
                    <li>Как зарегистрировать нового поставщика на ВБ</li>
                    <li>Как получить доступ к кабинету поставщика</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className={cl.place}></section>

      <section className={cl.wild}>
        <h4>OZON</h4>

        <div className={cl.cont}>
          <div className={cl.Stage}>
            <button className={cl.Stage_button} onClick={handleClick}>
              <h6 className={cl.Stage_button_h6}>Регистрация поставщика</h6>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                className={`${cl.Stage_icon} ${isRotated ? cl.rotated : ""}`}
              >
                <line
                  x1="0"
                  y1="0"
                  x2="24"
                  y2="24"
                  stroke="black"
                  strokeWidth="2"
                />
                <line
                  x1="24"
                  y1="0"
                  x2="0"
                  y2="24"
                  stroke="black"
                  strokeWidth="2"
                />
              </svg>
            </button>
            <div
              className={
                isActive ? `${cl.Stage_div} ${cl.expanded}` : cl.Stage_div
              }
            >
              {isActive && (
                <div className={cl.inner_cont}>
                  <ul>
                    <li>Как зарегистрировать нового поставщика на ВБ</li>
                    <li>Как получить доступ к кабинету поставщика</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className={cl.Stage}>
            <button className={cl.Stage_button} onClick={handleClick}>
              <h6 className={cl.Stage_button_h6}>Регистрация поставщика</h6>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                className={`${cl.Stage_icon} ${isRotated ? cl.rotated : ""}`}
              >
                <line
                  x1="0"
                  y1="0"
                  x2="24"
                  y2="24"
                  stroke="black"
                  strokeWidth="2"
                />
                <line
                  x1="24"
                  y1="0"
                  x2="0"
                  y2="24"
                  stroke="black"
                  strokeWidth="2"
                />
              </svg>
            </button>
            <div
              className={
                isActive ? `${cl.Stage_div} ${cl.expanded}` : cl.Stage_div
              }
            >
              {isActive && (
                <div className={cl.inner_cont}>
                  <ul>
                    <li>Как зарегистрировать нового поставщика на ВБ</li>
                    <li>Как получить доступ к кабинету поставщика</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className={cl.Stage}>
            <button className={cl.Stage_button} onClick={handleClick}>
              <h6 className={cl.Stage_button_h6}>Регистрация поставщика</h6>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                className={`${cl.Stage_icon} ${isRotated ? cl.rotated : ""}`}
              >
                <line
                  x1="0"
                  y1="0"
                  x2="24"
                  y2="24"
                  stroke="black"
                  strokeWidth="2"
                />
                <line
                  x1="24"
                  y1="0"
                  x2="0"
                  y2="24"
                  stroke="black"
                  strokeWidth="2"
                />
              </svg>
            </button>
            <div
              className={
                isActive ? `${cl.Stage_div} ${cl.expanded}` : cl.Stage_div
              }
            >
              {isActive && (
                <div className={cl.inner_cont}>
                  <ul>
                    <li>Как зарегистрировать нового поставщика на ВБ</li>
                    <li>Как получить доступ к кабинету поставщика</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className={cl.Stage}>
            <button className={cl.Stage_button} onClick={handleClick}>
              <h6 className={cl.Stage_button_h6}>Регистрация поставщика</h6>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                className={`${cl.Stage_icon} ${isRotated ? cl.rotated : ""}`}
              >
                <line
                  x1="0"
                  y1="0"
                  x2="24"
                  y2="24"
                  stroke="black"
                  strokeWidth="2"
                />
                <line
                  x1="24"
                  y1="0"
                  x2="0"
                  y2="24"
                  stroke="black"
                  strokeWidth="2"
                />
              </svg>
            </button>
            <div
              className={
                isActive ? `${cl.Stage_div} ${cl.expanded}` : cl.Stage_div
              }
            >
              {isActive && (
                <div className={cl.inner_cont}>
                  <ul>
                    <li>Как зарегистрировать нового поставщика на ВБ</li>
                    <li>Как получить доступ к кабинету поставщика</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className={cl.Stage}>
            <button className={cl.Stage_button} onClick={handleClick}>
              <h6 className={cl.Stage_button_h6}>Регистрация поставщика</h6>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                className={`${cl.Stage_icon} ${isRotated ? cl.rotated : ""}`}
              >
                <line
                  x1="0"
                  y1="0"
                  x2="24"
                  y2="24"
                  stroke="black"
                  strokeWidth="2"
                />
                <line
                  x1="24"
                  y1="0"
                  x2="0"
                  y2="24"
                  stroke="black"
                  strokeWidth="2"
                />
              </svg>
            </button>
            <div
              className={
                isActive ? `${cl.Stage_div} ${cl.expanded}` : cl.Stage_div
              }
            >
              {isActive && (
                <div className={cl.inner_cont}>
                  <ul>
                    <li>Как зарегистрировать нового поставщика на ВБ</li>
                    <li>Как получить доступ к кабинету поставщика</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className={cl.Stage}>
            <button className={cl.Stage_button} onClick={handleClick}>
              <h6 className={cl.Stage_button_h6}>Регистрация поставщика</h6>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                className={`${cl.Stage_icon} ${isRotated ? cl.rotated : ""}`}
              >
                <line
                  x1="0"
                  y1="0"
                  x2="24"
                  y2="24"
                  stroke="black"
                  strokeWidth="2"
                />
                <line
                  x1="24"
                  y1="0"
                  x2="0"
                  y2="24"
                  stroke="black"
                  strokeWidth="2"
                />
              </svg>
            </button>
            <div
              className={
                isActive ? `${cl.Stage_div} ${cl.expanded}` : cl.Stage_div
              }
            >
              {isActive && (
                <div className={cl.inner_cont}>
                  <ul>
                    <li>Как зарегистрировать нового поставщика на ВБ</li>
                    <li>Как получить доступ к кабинету поставщика</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className={cl.Stage}>
            <button className={cl.Stage_button} onClick={handleClick}>
              <h6 className={cl.Stage_button_h6}>Регистрация поставщика</h6>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                className={`${cl.Stage_icon} ${isRotated ? cl.rotated : ""}`}
              >
                <line
                  x1="0"
                  y1="0"
                  x2="24"
                  y2="24"
                  stroke="black"
                  strokeWidth="2"
                />
                <line
                  x1="24"
                  y1="0"
                  x2="0"
                  y2="24"
                  stroke="black"
                  strokeWidth="2"
                />
              </svg>
            </button>
            <div
              className={
                isActive ? `${cl.Stage_div} ${cl.expanded}` : cl.Stage_div
              }
            >
              {isActive && (
                <div className={cl.inner_cont}>
                  <ul>
                    <li>Как зарегистрировать нового поставщика на ВБ</li>
                    <li>Как получить доступ к кабинету поставщика</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className={cl.Stage}>
            <button className={cl.Stage_button} onClick={handleClick}>
              <h6 className={cl.Stage_button_h6}>Регистрация поставщика</h6>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                className={`${cl.Stage_icon} ${isRotated ? cl.rotated : ""}`}
              >
                <line
                  x1="0"
                  y1="0"
                  x2="24"
                  y2="24"
                  stroke="black"
                  strokeWidth="2"
                />
                <line
                  x1="24"
                  y1="0"
                  x2="0"
                  y2="24"
                  stroke="black"
                  strokeWidth="2"
                />
              </svg>
            </button>
            <div
              className={
                isActive ? `${cl.Stage_div} ${cl.expanded}` : cl.Stage_div
              }
            >
              {isActive && (
                <div className={cl.inner_cont}>
                  <ul>
                    <li>Как зарегистрировать нового поставщика на ВБ</li>
                    <li>Как получить доступ к кабинету поставщика</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className={cl.place}></section>
    </div>
  );
};

export default FAQ;
