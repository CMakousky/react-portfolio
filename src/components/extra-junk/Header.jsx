import { useState } from "react";

import Navigation from "./Navigation";
import AboutMe from "../pages/AboutMe";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";
import Resume from "../pages/Resume";

function Header() {

    const [currentPage, setCurrentPage] = useState('AboutMe');

    // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
    const renderPage = () => {
      if (currentPage === 'AboutMe') {
        return <AboutMe />;
      }
      if (currentPage === 'Portfolio') {
        return <Portfolio />;
      }
      if (currentPage === 'Contact') {
        return <Contact />;
      }
      return <Resume />;
    };
  
    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <>
        <header>
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
        </header>
        <main className="mx-3">
            {renderPage()}
        </main>
        </>
    );
};

export default Header;