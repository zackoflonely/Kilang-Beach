import React from 'react';
import Card from 'react-bootstrap/Card';
import Information from './Information';
import { Container } from 'react-bootstrap';
import { useEffect } from 'react';


const MapContainer = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll ke atas saat halaman B dimuat
  }, []);
  return (
    <Container>
    <Card className="text-center wlc2">
      {/* <Card.Header>Welcome To My Favorite Destination</Card.Header> */}
      <Card.Body>
        <Card.Title>Special For You</Card.Title>
        <Card.Text>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8206098307046!2d116.813799873825!3d-1.2813636356183675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df1472f6cbb95bb%3A0x62c0dbbccde2df3d!2sPantai%20Kilang%20Mandiri!5e0!3m2!1sid!2sid!4v1684966135244!5m2!1sid!2sid"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
        </Card.Text>
        </Card.Body>
    </Card>
    <Information/>
    </Container>
  );
};

export default MapContainer;
