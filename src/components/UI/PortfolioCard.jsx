const PortfolioCard = ({ portfolioProjects }) => {
    return (
        <>
            <section className="portfolio-card" id={portfolioProjects.projectName}>
                <figure>
                    <img src={portfolioProjects.projectScreenshot} alt={portfolioProjects.projectName} />
                </figure>
                <article className="details">
                    <h2>{portfolioProjects.projectName}</h2>
                    <h2><a href={portfolioProjects.githubRepo}>GitHub Repository</a></h2>
                    {portfolioProjects.deployedWebLink? <h2><a href={portfolioProjects.deployedWebLink}>Deployed Application</a></h2> : <></>}
                </article>
            </section>
        </>
    );
};

export default PortfolioCard;