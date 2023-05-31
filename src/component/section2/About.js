import { Row, Col, Container } from "react-bootstrap";
import {FaSwimmer} from 'react-icons/fa';
import {BsCameraFill} from 'react-icons/bs';
import {BiRun, BiCycling} from 'react-icons/bi';



function About() {
  return (
    <div>
      <div>
        <h1>Kamu Bisa Melakukan</h1>
        <Container style={{padding:'10%'}}>
        <Row style={{fontSize:'36px'}}>
          <Col>
          <FaSwimmer/><br/>Berenang</Col>
          <Col><BsCameraFill/><br/>Fotografi</Col>
          <Col><BiRun/><br/>Jogging</Col>
          <Col><BiCycling/><br/>Sepedaan</Col>
        </Row>
        </Container>
      </div>
    </div>
  );
}

export default About;
