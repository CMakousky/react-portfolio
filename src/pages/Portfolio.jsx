import { useState, useEffect } from "react";
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
        {
            projectScreenshot: "https://raw.githubusercontent.com/CMakousky/Kanban-CM/refs/heads/main/images/Kanban-CM.jpg",
            projectName: "Kanban-CM",
            deployedWebLink: "https://kanban-cm.onrender.com/",
            githubRepo: "https://github.com/CMakousky/Kanban-CM"
        },
        {
            projectScreenshot: "https://raw.githubusercontent.com/CMakousky/Book-Search-Engine-CM/refs/heads/main/images/Book-Search-Engine-CM-Screenshot.jpg",
            projectName: "Book-Search-Engine-CM",
            deployedWebLink: "https://book-search-engine-cm.onrender.com/",
            githubRepo: "https://github.com/CMakousky/Book-Search-Engine-CM"
        },
        {
            projectScreenshot: "https://raw.githubusercontent.com/CMakousky/Book-Search-Engine-CM/refs/heads/main/images/Book-Search-Engine-CM-Screenshot.jpg",
            projectName: "Book-Search-Engine-CM",
            deployedWebLink: "https://book-search-engine-cm.onrender.com/",
            githubRepo: "https://github.com/CMakousky/Book-Search-Engine-CM"
        },
        {
            projectScreenshot: "https://raw.githubusercontent.com/CMakousky/Book-Search-Engine-CM/refs/heads/main/images/Book-Search-Engine-CM-Screenshot.jpg",
            projectName: "Book-Search-Engine-CM",
            deployedWebLink: "https://book-search-engine-cm.onrender.com/",
            githubRepo: "https://github.com/CMakousky/Book-Search-Engine-CM"
        },
    ];

    // useState for rendering GameCards
    const [cardArray, setCardArray] = useState(<></>);

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
                                            portfolioProjects={project}
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

    useEffect(() => {
        setCardArray(showCards(portfolioProjects));
    }, []);

    return (
        <>
        {/* Six projects developed by me. */}
        <div>
            <h1>Portfolio Content</h1>
            {cardArray}
        </div>
        </>
    );
};

export default Portfolio;