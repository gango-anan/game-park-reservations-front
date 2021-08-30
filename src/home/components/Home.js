import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css';
import gorilla from '../../assets/images/gorillas.jpg';

const Home = () => (
  <Container fluid className="title_container">
    <div className="home-bg">
      <h2 className="home_title">Game Safaris Reservations</h2>
      <p className="home_slogan">
        experience the beauty of Uganda, the Pearl of Africa
      </p>
    </div>
    <div className="home-page-details">
      <div>
        <h2 className="home-activity-title">
          Experience the best Gorilla Trekking moments...
        </h2>
      </div>
      <div className="details-container">
        <div className="activity-details">
          <h3>Gorilla Trekking</h3>
          <p>
            Uganda is a wonderland in all senses from the mighty King Kong that
            rule the impenetrable forest of Bwindi to chimpanzees that are our
            closest cousins. Gorilla trekking is such a thrilling primate
            experience that any visitor on Uganda safari should not miss out.
          </p>
          <button type="button" className="btn-more-details">
            <Link to="/signin">More details</Link>
          </button>
        </div>
        <div className="image-container" style={{ width: '20vw' }}>
          <img src={gorilla} alt="Gorilla" style={{ borderRadius: '50%' }} />
        </div>
      </div>
    </div>
  </Container>
);

export default Home;
