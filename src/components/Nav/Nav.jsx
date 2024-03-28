import {NavLink} from "react-router-dom";
import cl from "./Nav.module.scss"
import whatsapp from "../../assets/whatsapp.svg"
import telegram from "../../assets/telegram.svg"
import {useState} from "react";

const Nav = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (<header className={cl.main_cont}>
            <nav className={cl.top_nav}>
                <ul>
                    <li>
                        <NavLink to={"/"}><h3>0(500)023120</h3></NavLink>
                    </li>
                    <li>
                        <p>звонок по России бесплатный</p>
                        <p>9:00 • 19:00 (время московское)</p>
                    </li>
                    <li className={cl.icon}>
                        <NavLink to={"/"}>
                            <img src={whatsapp} alt="" width={30}/>
                        </NavLink>
                        <NavLink to={"/"}>
                            <img src={telegram} alt="" width={35}/>
                        </NavLink>
                    </li>


                </ul>
            </nav>
            <nav className={cl.Nav}>
                <div className={cl.inner_nav}>
                    <ul className={cl.main_links}>
                        <li>
                            <div className={cl.service} >
                               <NavLink to={"/service"} onClick={toggleDropdown}> УСЛУГИ</NavLink>
                                <div className={`${cl.dropdown_menu} ${isDropdownOpen ? cl.show : ''}`}>
                                    <ol>
                                        <li>
                                            <NavLink to={"/ser"}>Сервис 1</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to={"/"}>Сервис 2</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to={"/"}>Сервис 3</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to={"/"}>Сервис 4</NavLink>
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
                            <NavLink to={"/about"}>О нас</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/about"}>Полезная информация</NavLink>
                        </li>
                    </ul>
                    <button className={cl.book}>
                        Заказать звонок
                    </button>
                </div>
            </nav>
        </header>

    );
};

export default Nav;
