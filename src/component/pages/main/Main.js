import { Row, Col, Card, Container } from 'react-bootstrap';
import img1 from '../../../img/img3.jpg';
import Accordion from './Accordion';
import { useEffect } from 'react';
import Article from '../artikel/Article';

function Main() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll ke atas saat halaman B dimuat
  }, []);
  return (
    <div className="main-content">
      <Container>
      <h1 style={{
            padding: '1%',
            fontWeight: 'bold',
            fontFamily: 'cursive',
            fontSize: '42px',
            margin: '0',
            backgroundColor:' rgb(255, 255, 255)',
            marginBottom:'25px'
          }}>
          For Your Information
        </h1>
        <Row className="justify-content-center">
          <Col xs lg="4" className="col-main1 mx-auto">
            <Card.Img src={img1} />
          </Col>
          <Col className="col-main">
            <p>
              Pantai Kilang di Balikpapan, Kalimantan Timur, adalah salah satu destinasi wisata yang menawarkan keindahan alam yang menakjubkan. Dengan pasir putih yang lembut, air laut yang jernih, dan pemandangan alam yang memesona, pantai ini menjadi tempat yang sempurna untuk bersantai dan menikmati momen indah.
            </p>
            <p>
              Pantai Kilang terletak tidak jauh  dari pusat kota Balikpapan, sehingga mudah diakses oleh wisatawan lokal maupun mancanegara. Keindahan alamnya yang masih alami menjadikannya tempat yang cocok untuk melarikan diri dari hiruk-pikuk kehidupan perkotaan. Begitu tiba di pantai ini, Anda akan disambut dengan hembusan angin segar dan suara deburan ombak yang menenangkan.
            </p>
          </Col>
        </Row>
      </Container>
      <Article/>
      <Accordion/>
    </div>
  );
}

export default Main;
