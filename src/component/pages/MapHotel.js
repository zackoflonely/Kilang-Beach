import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col, ListGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

const MapHotel = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll ke atas saat halaman B dimuat
  }, []);
  const origin = { lat: -1.2803641658328473,  lng: 116.81660218541494 }; // Titik awal
  const apiKey = 'AIzaSyB69Z695aQcwGy-WBqmWT3-XoMZ3Xse9Es'; // Kunci API Google Directions

  const [route, setRoute] = useState(null);
  const [destination, setDestination] = useState({ lat: -1.2754073031667734, lng: 116.83485331256175 });

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
        <Card.Title><h3>Hotel Nearby</h3></Card.Title>
        <Card.Body>
          <ListGroup>
          <ListGroup.Item
              action
              active={destination.lat === -1.2754073031667734 && destination.lng === 116.83485331256175}
              onClick={() => handleDestinationClick(-1.2754073031667734, 116.83485331256175)}
            >
              Novotel
            </ListGroup.Item>
            <ListGroup.Item
              action
              active={destination.lat === -1.2783772219856986 && destination.lng === 116.8408617972162}
              onClick={() => handleDestinationClick(-1.2783772219856986, 116.8408617972162)}
            >
              SwissBell Hotel
            </ListGroup.Item>
            <ListGroup.Item
              action
              active={destination.lat === -1.2692089381652583 && destination.lng === 116.84582753546513}
              onClick={() => handleDestinationClick(-1.2692089381652583, 116.84582753546513)}
            >
              Sagita Hotel
            </ListGroup.Item>
            <ListGroup.Item
              action
              active={destination.lat === -1.2753772502061955 && destination.lng === 116.83471063566935}
              onClick={() => handleDestinationClick(-1.2753772502061955, 116.83471063566935)}>
              ibis Hotel
            </ListGroup.Item>
            <ListGroup.Item
              action
              active={destination.lat === -1.275782683268204 && destination.lng === 116.8336912336035}
              onClick={() => handleDestinationClick(-1.275782683268204, 116.8336912336035)}>
              Hotel Mega Lestari
            </ListGroup.Item>
            <ListGroup.Item
              action
              active={destination.lat === -1.2730744871082365 && destination.lng === 116.83307038638463}
              onClick={() => handleDestinationClick(-1.2730744871082365, 116.83307038638463)}>
              Hotel Grand Senyiur
            </ListGroup.Item>
            <ListGroup.Item
              action
              active={destination.lat === -1.2777192664674923 && destination.lng === 116.83914932933342}
              onClick={() => handleDestinationClick(-1.2777192664674923, 116.83914932933342)}>
              Borneo Apart
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
        <Card.Footer>
        <Card.Footer>
        <Button variant="primary">
            <Link to="../map" style={{ textDecoration: 'None', color: 'inherit' }}>
              Kembali
            </Link>
        </Button>
        </Card.Footer>
        </Card.Footer>
      </Card>
    </Col>
  </Row>
  </Container>
  </div>
  );
};

export default MapHotel;