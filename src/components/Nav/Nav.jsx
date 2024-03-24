import { NavLink } from "react-router-dom";
import cl from "./Nav.module.scss"
const Nav = () => {
  return (
    <nav className={cl.Nav}>
      <ul className={cl.main_links}>
        <li >
          <NavLink to={"/"} className={cl.service}>УСЛУГИ</NavLink>
          <div className={cl.dropdown_menu}>
            <ol>
              <li>
                <NavLink to={"/"}>adhs</NavLink>
              </li>
              <li>
                <NavLink to={"/"}>adhs</NavLink>
              </li>
              <li>
                <NavLink to={"/"}>adhs</NavLink>
              </li>
              <li>
                <NavLink to={"/"}>adhs</NavLink>
              </li>
            </ol>
          </div>
        </li>
        <li>
          <NavLink to={"/price"}>Цены</NavLink>
        </li>
        <li>
          <NavLink to={"/news"}>НОВОСТИ</NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>О нас</NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>Полезная информация</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
