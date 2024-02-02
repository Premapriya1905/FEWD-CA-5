import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import "../Styles/Navbar.css"
import kalvium from '../../src/assets/kalvium-logo.png';
import About from "./About"


function Navbar({ setSearchTerm }) {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <nav className="navbar">
        <div>
        <img
            className="logo"
            src={kalvium}
            alt="kalvium"
            onClick={openModal}
          />
          <About isOpen={isModalOpen} closeModal={closeModal} />
        </div>
        <div>
          <Link to="/">
            <input
              className="input"
              type="text"
              placeholder="Search for books"
              onChange={handleSearch}
            />
          </Link>
        </div>
        <div>
          <Link to="/forms">
            <button id="link">Register</button>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
