import Layout from '../components/Layout'


class Day {
    private readonly month: number;
    private readonly day: number;
    private readonly year: number;

    constructor(year, month, day) {
        this.month = month;
        this.day = day;
        this.year = year;
    }

    toString() {
        return this.fieldToString(this.day) + "/" + this.fieldToString(this.month) + "/" + this.year
    }

    private fieldToString(field) {
        return (field < 10 ? "0" + field : field)
    }


}

interface ArticleProps {
    title: string;
    link: string;
    image: string;
    date: Day
}

function Card({title, link, image, date}: ArticleProps) {
    return <div className={"card"}>
        <a href={link}
           target={"_blank"} rel="noreferrer">
            <img
                className="card-image"
                alt={title}
                src={image}/>
        </a>
        <a target={"_blank"}
           rel="noreferrer"
           href={link}
           className={"card-title"}>{title}
        </a>
    </div>
}

const IndexPage = () => {
    const articles: ArticleProps[] = [
        {
            title: "Bigger Unit Tests are Better (Peter Schuler)",
            link: "https://www.linkedin.com/pulse/bigger-unit-tests-better-peter-schuler-ilias-el-mhamdi",
            image: "https://media-exp1.licdn.com/dms/image/D4E12AQFhy7K2fXsWaw/article-cover_image-shrink_423_752/0/1666202888486?e=1672876800&v=beta&t=LwBszNN5ofsBuIO49rBVqPWt0tCw3vhcor-z--dFbD4",
            date: new Day(2022, 10, 19),

        },
        {
            title: "Improving your integration testing efforts with contract testing (Bas Dijkstra)",
            link: "https://www.linkedin.com/pulse/summary-improving-your-integration-testing-efforts-bas-el-mhamdi?trk=portfolio_article-card_title",
            image: "https://media-exp1.licdn.com/dms/image/D4E12AQHKUls4vWMDbg/article-cover_image-shrink_600_2000/0/1665595182782?e=2147483647&v=beta&t=owpm2gUglHtx2mxYPmb4b6XgFqlaytBWKCBUMWXPHbo",
            date: new Day(2022, 10, 12),

        },
        {
            title: "Tech Interview Cookbook (Rodislav Moldovan and Adrien Muller)",
            image: "https://media-exp1.licdn.com/dms/image/D4E12AQFnyP4j-guCqw/article-cover_image-shrink_600_2000/0/1664992232896?e=2147483647&v=beta&t=VGRB9bOj20ejfY_0RLmL-sUv8C6XUXRCUSuP2ekMAcU",
            date: new Day(2022, 10, 5),
            link: "https://www.linkedin.com/pulse/summary-tech-interview-cookbook-rodislav-moldovan-adrien-el-mhamdi?trk=portfolio_article-card_title"
        },
        {
            title: "Agile is a slow and steady way to win the race (Alex Bunardzic)",
            link: "https://www.linkedin.com/pulse/summary-agile-slow-steady-way-win-race-alex-bunardzic-ilias-el-mhamdi?trk=portfolio_article-card_title",
            image: "https://media-exp1.licdn.com/dms/image/D5612AQFJoIfte2xKZg/article-cover_image-shrink_600_2000/0/1663176868235?e=2147483647&v=beta&t=hHAOZfkhzSpff1PjG69NEqCeLw9Ebg_F2byFBG4gDlU",
            date: new Day(2022, 9, 14)
        },
        {
            title: "The Trouble with Continuous Delivery (Bryan Finster)",
            link: "https://www.linkedin.com/pulse/summary-trouble-continuous-delivery-bryan-finster-ilias-el-mhamdi?trk=portfolio_article-card_title",
            image: "https://media-exp1.licdn.com/dms/image/D4E12AQGdWcFGHmongQ/article-cover_image-shrink_600_2000/0/1664387075799?e=2147483647&v=beta&t=QUAUdoCbGkMGbUwZDYjc-Mz-loaTOUZMOPAGu3e_c_0",
            date: new Day(2022, 8, 28)
        },
    ]
    return (
        <Layout title="Ilias El-Mhamdi">
            <main className={"main"}>
                <section className={"me-section"}>
                    <div className={"flex-row"}>
                        <img className={"me"} src="/me.jpg" alt={"me"}></img>
                        <div>
                            <h1>👋 Hi, I&apos;m Ilias <span style={{whiteSpace: "nowrap"}}>El-Mhamdi</span></h1>
                            <p>This blog exists to organize my <a
                                className={"linkedin-link"}
                                href={"https://www.linkedin.com/today/author/ilias-el-mhamdi-72a013146?trk=pulse-article_more-articles"}>LinkedIn
                                articles</a> for easy access</p>
                            <p>(This is a first draft, still in progress)</p>
                        </div>
                    </div>
                </section>
                <section>
                    <h1>Tech Excellence</h1>
                    <div className={"article-container"}>

                        {articles.map(article => <Card key={article.title} title={article.title} link={article.link}
                                                       image={article.image}
                                                       date={article.date}/>)
                        }
                    </div>

                </section>
            </main>
        </Layout>
    );
}

export default IndexPage
