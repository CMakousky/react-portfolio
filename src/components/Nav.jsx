// Bringing in the required import from 'react-router-dom'
import { Link } from 'react-router-dom';
import Navbar from './UI/Navbar';

export default function Nav() {
  // The Navbar UI component will render each of the Link elements in the links prop
  return (
    <Navbar
      links={[
        <li>
          <Link key={1} className="nav-link text-light" to="/">
              About
          </Link>
        </li>,
        <li>
          <Link key={2} className="nav-link text-light" to="/portfolio">
              Portfolio
          </Link>
        </li>,
        <li>
          <Link key={3} className="nav-link text-light" to="/contact">
              Contact
          </Link>
        </li>,
        <li>
          <Link key={4} className="nav-link text-light" to="/resume">
              Resume
          </Link>
        </li>,
      ]}
    />
  );
}