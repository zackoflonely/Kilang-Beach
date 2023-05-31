import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import All from './section2/All';
import Quote from './section2/Quote';
import { Container } from 'react-bootstrap';
import About from './section2/About';
import MultiCarousel from './section2/MultiCarousel';

function Section1() {
  return (
    <>
    <div style={{minHeight:'100vh'}}>
    <Card className="text-center wlc">
      {/* <Card.Header>Welcome To My Favorite Destination</Card.Header> */}
      <Card.Body>
        <Card.Title>Welcome to</Card.Title>
        <Card.Text>
          My Favorite Destination For Healing in Borneo
        </Card.Text>
        <Button variant="primary"><Link to="map" style={{textDecoration:'None',color:'inherit'}}>Explore Now</Link></Button>
      </Card.Body>
    </Card>
    </div>
    <Container className='sec2'>
        <All/>
        <MultiCarousel/>
        <Quote/>
        <About/>
    </Container>
    </>
  );
}

export default Section1;