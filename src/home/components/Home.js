import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import { useSelector } from 'react-redux';
import './Home.css';
import gorilla from '../../assets/images/gorillas.jpg';

const Home = () => {
  const activities = useSelector((state) => state.allActivities.activities);
  if (!activities) {
    return (
      <div>
        <h3 className="text-center text-danger">No activities found...</h3>
      </div>
    );
  }
  return (
    <Container fluid className="title_container" data-testid="home-test">
      <div className="banner-bg">
        <h2 className="home_title">Game Safaris Reservations</h2>
        <p className="home_slogan">
          experience the beauty of Uganda, the Pearl of Africa
        </p>
      </div>
      <div className="home-page-details">
        <h4 className="home-activity-title">
          Featured activity of the month...
        </h4>
        <div className="details-container">
          <div className="activity-details">
            <h3 className="activity-details-title">Gorilla Trekking</h3>
            <p className="activity-details-body">
              Uganda is a wonderland in all senses from the mighty King Kong
              that rule the impenetrable forest of Bwindi to chimpanzees that
              are our closest cousins. Gorilla trekking is such a thrilling
              primate experience that any visitor on Uganda safari should not
              miss out.
            </p>
            <Link to="/activities" className="fst-italic font-monospace">
              See more details
            </Link>
          </div>
          <div className="image-container">
            <img src={gorilla} alt="Gorilla" className="featured-image" />
          </div>
        </div>
      </div>
      <section className="more-activies-section">
        <h4 className="text-center mb-3">More activities</h4>
        <Carousel className="more-activities-images">
          {activities.map((activity) => {
            const { attributes } = activity;
            return (
              <Carousel.Item key={`game-${attributes.id}`}>
                <img
                  className="d-block w-100"
                  src={attributes.image_url}
                  alt={attributes.title}
                />
                <Carousel.Caption>
                  <h3>{attributes.title}</h3>
                  <p>{attributes.park}</p>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </section>
    </Container>
  );
};

export default Home;
