// import { useState, useEffect } from "react";
import PortfolioCard from "../components/UI/PortfolioCard";

function Portfolio() {
    const portfolioProjects = [
        {
            projectScreenshot: "https://raw.githubusercontent.com/CMakousky/weather-report-dashboard/refs/heads/main/images/weather-report-dashboard-CM.jpg",
            projectName: "Weather-Report-Dashboard-CM",
            deployedWebLink: "https://weather-report-dashboard-cm.onrender.com/",
            githubRepo: "https://github.com/CMakousky/weather-report-dashboard"
        },
        {
            projectScreenshot: "https://raw.githubusercontent.com/CMakousky/Book-Search-Engine-CM/refs/heads/main/images/Book-Search-Engine-CM-Screenshot.jpg",
            projectName: "Book-Search-Engine-CM",
            deployedWebLink: "https://book-search-engine-cm.onrender.com/",
            githubRepo: "https://github.com/CMakousky/Book-Search-Engine-CM"
        },
    ];

    // useState for rendering GameCards
    // const [cardArray, setCardArray] = useState(<></>);

    // Function to create an array of display cards
    const showCards = (portfolioProjects) => {
        return(
            <>
                <section className="displayCards">
                    {portfolioProjects.map(
                            (project) => {
                                return(
                                    <>
                                        <PortfolioCard
                                            projectScreenshot={project.projectScreenshot}
                                            projectName={project.projectName}
                                            deployedWebLink={project.deployedWebLink}
                                            githubRepo={project.githubRepo}
                                        />
                                    </>
                                )
                            }
                        )
                    }
                </section>
            </>
        );
    };

    const cardArray = showCards(portfolioProjects);
    console.log(cardArray);

    // useEffect(() => {
    //     const portfolioProjectCards = showCards(portfolioProjects);
    //     setCardArray(portfolioProjectCards);
    // }, []);

    return (
        <>
        {/* Six projects developed by me. */}
        <div>
            <h1>Portfolio Content</h1>

                {cardArray}

                {/* <section className="portfolio-card" id={portfolioProjects[0].projectName}>
                    <figure>
                        <img src={portfolioProjects[0].projectScreenshot} alt={portfolioProjects[0].projectName} />
                    </figure>
                    <article className="details">
                        <h2>{portfolioProjects[0].projectName}</h2>
                        <h2><a href={portfolioProjects[0].deployedWebLink}>Deployed Application</a></h2>
                        <h2><a href={portfolioProjects[0].githubRepo}>GitHub Repository</a></h2>
                    </article>
                </section>

                <section className="portfolio-card" id={portfolioProjects[1].projectName}>
                    <figure>
                        <img src={portfolioProjects[1].projectScreenshot} alt={portfolioProjects[1].projectName} />
                    </figure>
                    <article className="details">
                        <h2>{portfolioProjects[1].projectName}</h2>
                        <h2><a href={portfolioProjects[1].deployedWebLink}>Deployed Application</a></h2>
                        <h2><a href={portfolioProjects[1].githubRepo}>GitHub Repository</a></h2>
                    </article>
                </section> */}

        </div>
        </>
    );
};

export default Portfolio;