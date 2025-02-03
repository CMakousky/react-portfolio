// Bringing in the required import from 'react-router-dom'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './UI/Navbar';

export default function Nav() {
  // Set up useState to keep track of the current page
  const [currentPage, setCurrentPage] = useState('About');
  
  // Function to update the currentPage useState
  const handlePageChange = (page) => setCurrentPage(page);

  // The Navbar UI component will render each of the Link elements in the links prop
  return (
    <Navbar
      links={[
        <li>
          <Link key={1} className={currentPage === "About" ? "nav-link active text-light" : "nav-link text-light"} id='about-link' to="/" onClick={() => handlePageChange('About')}>
              About
          </Link>
        </li>,
        <li>
          <Link key={2} className={currentPage === "Portfolio" ? "nav-link active text-light" : "nav-link text-light"} id='portfolio-link' to="/portfolio" onClick={() => handlePageChange('Portfolio')}>
              Portfolio
          </Link>
        </li>,
        <li>
          <Link key={3} className={currentPage === "Contact" ? "nav-link active text-light" : "nav-link text-light"} id='contact-link' to="/contact" onClick={() => handlePageChange('Contact')}>
              Contact
          </Link>
        </li>,
        <li>
          <Link key={4} className={currentPage === "Resume" ? "nav-link active text-light" : "nav-link text-light"} id='resume-link' to="/resume" onClick={() => handlePageChange('Resume')}>
              Resume
          </Link>
        </li>,
      ]}
    />
  );
}