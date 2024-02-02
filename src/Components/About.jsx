import React from "react";
import Modal from "react-modal";
import "../Styles/Navbar.css"
const WelcomeModal = ({ isOpen, closeModal }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      className="welcome-modal"
      overlayClassName="welcome-overlay"
    >
      <div className="about">
        <h1>About Us</h1>
        <h3>Welcome to Kalvium Books World! 💙</h3>
        <p>
          At Kalvium, we invite you to embark on an enchanting journey through
          the world of literature...
          <br />
          Join our community of fellow readers, share your thoughts, and embark on discussions that celebrate the joy of reading. From riveting novels to insightful non-fiction, Kalvium Books is your haven for literary exploration and discovery.
        </p>
        <h3>"This is just a trailer , to see the main picture join our Kalvium Course to seek more information!!! 😁</h3>
      </div>
      <button id="close" onClick={closeModal}>Close</button>
    </Modal>
  );
};

export default WelcomeModal;
