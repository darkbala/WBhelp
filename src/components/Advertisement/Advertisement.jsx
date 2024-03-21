import cl from "./Advertisement.module.scss"

const Advertisement = () => {
    const news = [
        "Новость 1",
        "Новость 2",
        "Новость 3",
        // Добавьте больше новостей, если нужно
    ];

    const extendedNews = [...news, ...news, ...news];
    return (
        <div className={cl["news-ticker"]}>
            <ul>
                {extendedNews.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>

    )
}

export default Advertisement;