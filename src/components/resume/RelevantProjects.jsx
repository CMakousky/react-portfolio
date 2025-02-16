const RelevantProjects = () => {
    return (
        <>
        <h2>Relevant Projects</h2>

        <span>
            <h4>Software Developer:</h4>
            <h4>Sept 2024 - Mar 2025</h4>
        </span>

        <span>
            <h4>U of MN Coding Bootcamp</h4>
            <h4>Minneapolis, MN</h4>
        </span>

        <p>
            Working in teams of three to four developers to plan, design and create web-based projects that resemble real-world user applications. Created a robust portfolio of projects, and acquired skills applicable to software developer certification. Assumed role of the git configuration manager for my team ensuring that each developer's changes were correctly added to our baseline design.  Experienced with web development technologies, team dynamics and project planning. Used zoom and a dedicated #slack channel to facilitate team coordination with developers of diverse skill levels to deliver projects on-time.
        </p>

        <span id="key-accomplishments">
            <h4>Key Accomplishments (GitHub repository deployed web applications):</h4>
        </span>

        <ul>
            <li>
                <b>Weather-Report-Dashboard-CM</b> - Client Server system that allows a user logged into an SQL database via a web interface to search a foreign open database for current temperature conditions and display a 5-day temperature forecast for his favorite cities.
            </li>

            <li>
                <b>BookSearch-Engine-CM</b> - Client Server system that allows a user logged into a NoSQL database via a web interface to search a foreign open database for books.  It allows the user to save his favorite book selections and metadata to the native NoSQL database
            </li>

            <li>
                <b>PixelOracle-CM</b> - Client Server system that allows a user logged into a NoSQL database via a web interface to search a foreign open database for video game applications. It allows the user to save metadata for his favorite video game applications to the native NoSQL database and uses AI to make suggestions to the user for other video games that may be of interest based on his previous selections.
            </li>
        </ul>
        </>
    );
};

export default RelevantProjects;