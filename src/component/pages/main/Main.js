import { Row, Col, Card, Container } from 'react-bootstrap';
import img1 from '../../../img/img11.jpg';
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
            <p>
              Salah satu daya tarik utama Pantai Kilang adalah pantai pasir putihnya yang luas. Anda dapat menikmati berjalan-jalan santai di sepanjang pantai sambil merasakan lembutnya pasir di bawah kaki Anda. Nikmati juga kegiatan berjemur di bawah sinar matahari yang hangat atau bermain-main air di tepi pantai. Bagi pecinta olahraga air, Pantai Kilang juga menawarkan berbagai aktivitas seperti berenang, snorkeling, atau menyelam untuk menjelajahi keindahan bawah lautnya.
            </p>
            <p>
              Selain itu, pantai ini juga memiliki lanskap yang indah dengan pohon-pohon kelapa yang tumbuh di sepanjang garis pantai. Pemandangan ini menciptakan suasana tropis yang menenangkan dan membuat Anda merasa seperti berada di surga tersembunyi. Jangan lupa untuk membawa kamera Anda karena Pantai Kilang menawarkan pemandangan matahari terbenam yang spektakuler. Anda dapat menyaksikan langit berubah warna dari jingga ke merah muda yang memukau saat matahari terbenam di cakrawala.
            </p>
            <p>
              Selain keindahan alamnya, Pantai Kilang juga menyediakan fasilitas yang memadai untuk para pengunjung. Terdapat area parkir yang luas, tempat istirahat, dan warung-warung makanan yang menjual makanan laut segar dan hidangan lokal khas Balikpapan. Anda dapat mencoba hidangan lezat seperti ikan bakar atau kepiting saus padang yang pasti akan memanjakan lidah Anda.
            </p>
            <p>
              Bagi Anda yang ingin menghabiskan lebih banyak waktu di Pantai Kilang, terdapat juga akomodasi seperti penginapan atau resort yang dapat Anda pilih. Dengan menginap di dekat pantai, Anda dapat merasakan kenyamanan dan keindahan alam secara lebih intim.
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
