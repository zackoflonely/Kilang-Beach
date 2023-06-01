import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import All from './section2/All';
import Quote from './section2/Quote';
import { Container } from 'react-bootstrap';
import About from './section2/About';
import MultiCarousel from './section2/MultiCarousel';
import { Link as Linkobj } from 'react-scroll';

function Section1() {
  return (
    <>
    <div style={{minHeight:'100vh'}}>
    <Card className="text-center wlc">
      {/* <Card.Header>Welcome To My Favorite Destination</Card.Header> */}
      <Card.Body  className='font-title'>
        <Card.Title>Welcome to</Card.Title>
        <Card.Text>
          Pantai Kilang Balikpapan
        </Card.Text>
        <Button variant="primary"><Linkobj to="pesona" activeClass="active" spy={true} smooth={true} offset={50} duration={500}>Scroll Down</Linkobj></Button>
        </Card.Body>
    </Card>
    </div>
    <br/>
    <div id="pesona"></div>
    <div style={{minHeight:'50vh'}}>
    <Card className="text-center wlc">
      {/* <Card.Header>Welcome To My Favorite Destination</Card.Header> */}
      <Card.Body>
        <Card.Title>My Favorite</Card.Title>
        <Card.Text>
          Destination For Healing in Balikpapan
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