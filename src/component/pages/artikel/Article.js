import { useState } from 'react';
import { Row, Col, Card, Container, CardGroup, Button, Modal } from 'react-bootstrap';
import image from '../../../img/img4.jpg';
import artikel from '../../../img/artikel';

function Article() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const handleModalShow = (articleId) => {
    setSelectedArticle(articleId);
  };

  const handleModalClose = () => {
    setSelectedArticle(null);
  };

  return (
    <div>
        <h1 style={{
            padding: '1%',
            fontWeight: 'bold',
            fontFamily: 'cursive',
            fontSize: '42px',
            margin: '0',
            backgroundColor:' rgb(255, 255, 255,0.8)',
            marginBottom:'5px',
            marginTop:'25px'
          }}>
          Rekomendasi tempat disekitar
        </h1>
      <Container style={{ marginBottom: '50px' }}>
        <CardGroup style={{ marginTop: '2%' }}>
          {artikel.map((item) => (
            <Card key={item.id}>
              <Card.Body style={{ padding: '20%' }}>
                <Card.Title>Rating</Card.Title>
                <Card.Img src={item.image} />
                <Card.Text>{item.short}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button onClick={() => handleModalShow(item.id)}>Read More..</Button>
              </Card.Footer>
            </Card>
          ))}
        </CardGroup>
      </Container>
      <Modal show={selectedArticle !== null} onHide={handleModalClose} className='map-modal'
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
        <Modal.Body>
          {/* Tampilkan konten deskripsi artikel yang sesuai dengan selectedArticle */}
          {selectedArticle !== null && (
            <p>{artikel[selectedArticle - 1].deskripsi}</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Article;