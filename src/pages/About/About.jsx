import cl from "./About.module.scss"

const About = () => {
    return (<div className={cl.About}>
        <section className={cl.header}>
            <div>
                <img src="https://static.tildacdn.com/tild3539-6338-4762-b838-663633386534/WBHELP_logo_SQ.svg"
                     alt="" width={200} height={200}/>
                <h3>О НАС</h3>
            </div>
        </section>

        <section className={cl.place}>

        </section>

        <section className={cl.info}>
            <div>
                <p>Наша команда — это компетентные и ответственные специалисты. Мы знаем, как создать с нуля и
                    развить успешный бизнес на маркетплейсах с минимальными денежно-временными затратами, и
                    максимальной отдачей. Мы умеем преумножать доход от уже существующего магазина. Мы создали целую
                    инфраструктуру, которая работает на вас в практически автоматическом режиме.</p>
                <img src="https://static.tildacdn.com/tild6532-3366-4362-b264-663663656466/WBHELP_logo_PINKWHIT.svg"
                     alt="" width={400}/>
            </div>

        </section>
        <section className={cl.place}>

        </section>


        <section className={cl.team}>

            <div>
                <h2>СОТРУДНИЧАЯ С НАМИ, <br/>
                    ВЫ ПОЛУЧАЕТЕ <br/>
                    ЦЕЛЫЙ КОЛЛЕКТИВ ПРОФЕССИОНАЛОВ:
                </h2>
                <aside className={cl.top}>
                    <article>
                        <img src="https://static.tildacdn.com/tild3333-3365-4266-a138-376531336561/Clerk.svg"
                             width={100}
                             alt=""/>
                        <h5>Менеджеры по
                            маркетплейсам</h5>
                    </article>
                    <article>
                        <img src="https://static.tildacdn.com/tild3333-3365-4266-a138-376531336561/Clerk.svg"
                             width={100}
                             alt=""/>
                        <h5>Менеджеры по
                            маркетплейсам</h5>
                    </article>
                    <article>
                        <img src="https://static.tildacdn.com/tild3333-3365-4266-a138-376531336561/Clerk.svg"
                             width={100}
                             alt=""/>
                        <h5>Менеджеры по
                            маркетплейсам</h5>
                    </article>

                </aside>
                <aside className={cl.bottom}>
                    <article>
                        <img src="https://static.tildacdn.com/tild3333-3365-4266-a138-376531336561/Clerk.svg"
                             width={70}
                             alt=""/>
                        <h5>Менеджеры по
                            маркетплейсам</h5>
                    </article>
                    <article>
                        <img src="https://static.tildacdn.com/tild3333-3365-4266-a138-376531336561/Clerk.svg"
                             width={100}
                             alt=""/>
                        <h5>Менеджеры по
                            маркетплейсам</h5>
                    </article>
                    <article>
                        <img src="https://static.tildacdn.com/tild3333-3365-4266-a138-376531336561/Clerk.svg"
                             width={100}
                             alt=""/>
                        <h5>Менеджеры по
                            маркетплейсам</h5>
                    </article>
                    <article>
                        <img src="https://static.tildacdn.com/tild3333-3365-4266-a138-376531336561/Clerk.svg"
                             width={100}
                             alt=""/>
                        <h5>Менеджеры по
                            маркетплейсам</h5>
                    </article>

                </aside>
            </div>
        </section>

        <section className={cl.price}>
            <div>
                <article>
                    <h4>50</h4>
                    <hr/>
                    <p>
                        квалифицированных сотрудников
                    </p>
                </article>
                <article>
                    <h4>50</h4>
                    <hr/>
                    <p>
                        квалифицированных сотрудников
                    </p>
                </article>
                <article>
                    <h4>50</h4>
                    <hr/>
                    <p>
                        квалифицированных сотрудников
                    </p>
                </article>
                <article>
                    <h4>50</h4>
                    <hr/>
                    <p>
                        квалифицированных сотрудников
                    </p>
                </article>
                <article>
                    <h4>50</h4>
                    <hr/>
                    <p>
                        квалифицированных сотрудников
                    </p>
                </article>
                <article>
                    <h4>50</h4>
                    <hr/>
                    <p>
                        квалифицированных сотрудников
                    </p>
                </article>
                <article>
                    <h4>50</h4>
                    <hr/>
                    <p>
                        квалифицированных сотрудников
                    </p>
                </article>

            </div>
        </section>


        <section className={cl.place}></section>

        <section className={cl.text}>
            <div>
                <p>
                    Нами идеально отработаны процессы регистрации,
                    <br/>

                    подготовки и поставки — вывод на площадку <br/> товара
                    существенно ускоряется.
                </p>

                <p>
                    Мы разработали оригинальное аналитическое програмное обеспечение, которое позволяет осуществлять
                    более <br/> точные маркетинговые стратегии.
                </p>
                <p>
                    Торговать с нашей помощью — легко, приятно и выгодно!
                </p>
            </div>

        </section>
    </div>)
}

export default About;