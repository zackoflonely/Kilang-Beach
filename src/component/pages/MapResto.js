import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MapResto = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll ke atas saat halaman B dimuat
  }, []);
  const origin = { lat: -1.2803641658328473,  lng: 116.81660218541494 }; // Titik awal
  const apiKey = 'AIzaSyB69Z695aQcwGy-WBqmWT3-XoMZ3Xse9Es'; // Kunci API Google Directions

  const [route, setRoute] = useState(null);
  const [destination, setDestination] = useState({ lat: -1.2743733180006722,  lng: 116.82094418665882 });

  const handleDestinationClick = (lat, lng) => {
    setDestination({ lat, lng });
  };

  useEffect(() => {
    const fetchRoute = async () => {
      try {
        const response = await axios.get(
          `https://maps.googleapis.com/maps/api/directions/json?origin=${origin.lat},${origin.lng}&destination=${destination.lat},${destination.lng}&key=${apiKey}`
        );

        const { routes } = response.data;
        if (routes.length > 0) {
          setRoute(routes[0]);
        }
      } catch (error) {
        console.error('Error fetching route:', error);
      }
    };

    fetchRoute();
  }, [origin, destination, apiKey]);

  return (
  <div>
  <Container style={{margin:'5%'}}>
  <Row>
    <Col>
      <Card className="text-center wlc1">
        <Card.Body>
          <Card.Title>Route Information</Card.Title>
          {route && (
            <div>
              <p>Distance: {route?.legs[0]?.distance?.text}</p>
              <p>Duration: {route?.legs[0]?.duration?.text}</p>
            </div>
          )}
          <iframe
            title="Google Maps"
            src={`https://www.google.com/maps/embed/v1/directions?origin=${origin.lat},${origin.lng}&destination=${destination.lat},${destination.lng}&key=${apiKey}`}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </Card.Body>
      </Card>
    </Col>
    <Col className='col-map'>
      <Card className='wlc1'>
        <Card.Title><h3>Restaurant Nearby</h3></Card.Title>
        <Card.Body>
          <ListGroup>
          <ListGroup.Item
              action
              active={destination.lat === -1.2743733180006722 && destination.lng === 116.82094418665882}
              onClick={() => handleDestinationClick(-1.2743733180006722, 116.82094418665882)}
            >
              Warung Melly
            </ListGroup.Item>
            <ListGroup.Item
              action
              active={destination.lat === -1.2810822492304534 && destination.lng === 116.8144363805877}
              onClick={() => handleDestinationClick(-1.2810822492304534, 116.8144363805877)}
            >
              Restoran NYIURKU Beach Resto
            </ListGroup.Item>
            <ListGroup.Item
              action
              active={destination.lat === -1.2792309146086045 && destination.lng === 116.82289653317656}
              onClick={() => handleDestinationClick(-1.2792309146086045, 116.82289653317656)}
            >
              Biru Laut Restaurant
            </ListGroup.Item>
            <ListGroup.Item
              action
              active={destination.lat === -1.2782360497046845 && destination.lng === 116.83490970883392}
              onClick={() => handleDestinationClick(-1.2782360497046845, 116.83490970883392)}>
              Eatboss
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
        <Card.Footer>
        <Button variant="primary">
            <Link to="../map" style={{ textDecoration: 'None', color: 'inherit' }}>
              Kembali
            </Link>
        </Button>
        </Card.Footer>
      </Card>
    </Col>
  </Row>
  </Container>
  </div>
  );
};

export default MapResto;