function Navigation({ currentPage, handlePageChange }) {
    return (
        <>
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <a
                href="#about-me"
                onClick={() => handlePageChange('AboutMe')}
                // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
                >
                About
                </a>
            </li>
            <li className="nav-item">
                <a
                href="#portfolio"
                onClick={() => handlePageChange('Portfolio')}
                // Check to see if the currentPage is `Portfolio`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                >
                Portfolio
                </a>
            </li>
            <li className="nav-item">
                <a
                href="#contact"
                onClick={() => handlePageChange('Contact')}
                // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                >
                Contact
                </a>
            </li>
            <li className="nav-item">
                <a
                href="#resume"
                onClick={() => handlePageChange('Resume')}
                // This is a conditional (ternary) operator that checks to see if the current page is "Resume"
                // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
                className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                >
                Resume
                </a>
            </li>
        </ul>
        </>
    );
};

export default Navigation;