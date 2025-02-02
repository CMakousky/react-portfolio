const PortfolioCard = (projectScreenshot, projectName, deployedWebLink, githubRepo) => {
    return (
        <>
            <section className="portfolio-card" id={projectName}>
                <figure>
                    <img src={projectScreenshot} alt={projectName} />
                </figure>
                <article className="details">
                    <h2>{projectName}</h2>
                    <h2><a href={deployedWebLink}>Deployed Application</a></h2>
                    <h2><a href={githubRepo}>GitHub Repository</a></h2>
                </article>
            </section>
        </>
    );
};

export default PortfolioCard;