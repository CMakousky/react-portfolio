import { useState, useEffect } from "react";
import PortfolioCard from "../components/UI/PortfolioCard.jsx";
import projectShowcase from "../components/ProjectShowcase.json";

function Portfolio() {
    const portfolioProjects = projectShowcase.content;

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
                    )}
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
            <section>
                <h1>Portfolio Content</h1>
                {cardArray}
            </section>
        </>
    );
};

export default Portfolio;