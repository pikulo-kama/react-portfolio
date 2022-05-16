import './portfolio.css'

const Portfolio = () => {

    const portfolioItems = [
        {itemImage: 'assets/portfolio1.jpg', itemHeader: 'Lorem ipsum dolor sit.'},
        {itemImage: 'assets/portfolio2.jpg', itemHeader: 'Lorem ipsum dolor sit.'},
        {itemImage: 'assets/portfolio3.jpg', itemHeader: 'Lorem ipsum dolor sit.'},
        {itemImage: 'assets/portfolio4.jpg', itemHeader: 'Lorem ipsum dolor sit.'},
        {itemImage: 'assets/portfolio5.png', itemHeader: 'Lorem ipsum dolor sit.'},
        {itemImage: 'assets/portfolio6.jpg', itemHeader: 'Lorem ipsum dolor sit.'}
    ];

    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
            <div className="container portfolio__container">
                {
                    portfolioItems.map(({itemImage, itemHeader}, index) =>
                        <article key={index} className="portfolio__project">
                            <div className="portfolio__project-image">
                                <img src={itemImage} alt="First"/>
                            </div>
                            <h3>{itemHeader}</h3>
                            <div className="portfolio__project-links">
                                <a href="https://github.com" className="btn" target="_blank">Github</a>
                                <a href="https://google.com" className="btn btn-primary" target="_blank">Live Demo</a>
                            </div>
                        </article>
                    )
                }
            </div>
        </section>
    )
}

export default Portfolio