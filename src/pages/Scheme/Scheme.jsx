import cl from "./Scheme.module.scss"

const Scheme = () => {

    return (
        <div className={cl.Scheme}>
            <section>
                <h2>FBO/FBS – СХЕМЫ РАБОТЫ <br/>
                    НА МАРКЕТПЛЕЙСАХ. <br/>
                    ПРОСТО О ВАЖНОМ.</h2>

                <article>
                    <p>
                        Все маркетплейсы работают с поставщиками через разнообразные схемы, где налажены логистические
                        операции между площадкой и продавцами.

                    </p>
                </article>
                <article>
                    <p>
                        Давайте разберемся, как комбинируют и обозначают данные модели такие маркетплейсы, как
                        Wildberries, Ozon.

                    </p>
                </article>

                <h4>
                    Wildberries
                </h4>
                <article>
                    <p>
                        Модель, которой руководствуется маркетплейс, это FBO, то есть Fulfillment by Operator. Под этой
                        моделью стоит понимать, что все вопросы по приемке и хранению, комплектации и упаковке заказов,
                        а также доставке берет на себя маркетплейс. Также он обрабатывает возвраты.
                    </p>
                    <p>
                        Поставщик должен отгружаться на склад, а также соблюдать все регламенты приёмки: правильная
                        упаковка, маркировка, формат поставки и другие важные нюансы. Деньги за товары поступают на счет
                        Wildberries и регулярно выплачиваются поставщику по данным реквизитов, указанных им в личном
                        кабинете.

                    </p>
                    <p>
                        Есть и другая схема FBS (Fulfillment by Seller). По ней уже сами продавцы хранят товар,
                        обрабатывают заказы, упаковывают товар и доставляют до центров сортировки. Здесь очень важна
                        скорость. Размер комиссии будет зависеть от скорости поставки товаров.
                    </p>
                    <p>
                        В последнее время Wildberries стал вводить новые адреса для отгрузок со складов продавца, а
                        также другие важные изменения, касающиеся данной схемы. Если раньше продавцы были обязаны
                        доставить товары на склад WB до того, как он станет доступен к продаже, то по схеме FBS
                        поставщики имеют право вести дела через маркетплейс напрямую со своего склада или офиса.Такая
                        система будет особенно актуальной, если товары крупногабаритные и WB не дает возможности их
                        отгружать, а также для тех, чья оборачиваемость маркетплейсом считается плохой. Стоит отметить,
                        что комиссия со склада поставщика ниже, чем при схеме FBO.
                    </p>
                    <p>
                        В некоторой степени система FBO — это дополнение склада Wildberries, по которому маркетплейс
                        восполняет нехватку позиций склада, ведь при заказе поставщик должен как можно скорее поставить
                        товар.
                    </p>
                </article>
            </section>
        </div>
    )
}

export default Scheme;



