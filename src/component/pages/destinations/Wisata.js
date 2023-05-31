import React from 'react';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import images from '../../../img/images';
import ControlledCarousel from './ControlledCarousel';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Wisata() {
  const [modalShow, setModalShow] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll ke atas saat halaman B dimuat
  }, []);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setModalShow(true);
  };

  return (
    <div>
      <Container className='container-img'>
        <ControlledCarousel />
        <h1
          style={{
            paddingTop: '5%',
            fontWeight: 'bold',
            fontFamily: 'cursive',
            fontSize: '52px',
            margin: '0',
          }}
        >
          All Moment
        </h1>
        <div className="img-container">
          <Row xs={1} md={4} className="row-img">
            {images.map((image) => (
              <Col key={image.id} style={{ marginTop: '25px' }}>
                <Card onClick={() => handleImageClick(image)} className="card-img-container">
                  <Card.Img variant="top" src={image.image} className="card-img" />
                  <Card.Body>
                    <Card.Title>{image.id}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
      <Modals show={modalShow} onHide={() => setModalShow(false)} image={selectedImage} />
    </div>
  );
}

function Modals({ show, onHide, image }) {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Pict {image?.id}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={image?.image} alt={image?.id} style={{ width: '100%' }} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary">Save changes</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Wisata;