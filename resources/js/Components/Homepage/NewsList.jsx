const CardNews = (news) => {
    return (
        news.map((data, i) => (
            <div key={i} className="card w-full md:w-96 pt-4 bg-base-100 shadow-sm">
                <div className="card-body">
                    <h2 className="card-title">
                        {data.title}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{data.description}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">{data.category}</div>
                        <div className="badge badge-outline">{data.author}</div>
                    </div>
                </div>
            </div>
        )))
}

const emptyNews = () => {
    return (
        <p>Tidak ada berita hari ini</p>
    )
}

const NewsList = ({ news }) => {
    return !news ? emptyNews() : CardNews(news);
}

export default NewsList;