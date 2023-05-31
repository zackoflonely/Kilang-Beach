import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {GrMapLocation} from 'react-icons/gr';
import {AiFillLike} from 'react-icons/ai';
import {MdRecommend} from 'react-icons/md';
import {FaUmbrellaBeach} from 'react-icons/fa';
import {LuMilestone} from 'react-icons/lu';

function Information() {
  return (
    <div>
    <CardGroup style={{ marginTop:'5%' }}>
      <Card>
        <Card.Body style={{padding:'20%'}}>
          <Card.Title><AiFillLike/>Rating</Card.Title>
          <Card.Text>
            <span>4.0</span>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body style={{padding:'20%'}}>
          <Card.Title><FaUmbrellaBeach/>Fasilitas</Card.Title>
          <Card.Text>
            <ul>
            <li>Heliped</li>
            <li>Gazebo</li>
            <li>Live Music</li>
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body style={{padding:'20%'}}>
          <Card.Title><LuMilestone/>Price</Card.Title>
          <Card.Text>Rp. 5000</Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
    <Card style={{textAlign:'left'}}>
      <Card.Body>
        <Card.Title><GrMapLocation/> Location</Card.Title>
        <Card.Text>
          <span>PR98+FG5, Jl. Jenderal Sudirman, Prapatan, Kecamatan Balikpapan Selatan, Kota Balikpapan, Kalimantan Timur</span>
        </Card.Text>
      </Card.Body>
    </Card>
    <CardGroup style={{ marginBottom:'5%' }}>
      <Card>
        <Card.Body>
          <Card.Title><MdRecommend/> Recommended Resort</Card.Title>
          <Card.Text>
            Cari tempat penginapan terdekat untuk beristirahat dengan nyaman.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Button variant="primary">
            <Link to="hotel" style={{ textDecoration: 'None', color: 'inherit' }}>
              Cari Sekarang
            </Link>
        </Button>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title><MdRecommend/> Restaurant and Cafe</Card.Title>
          <Card.Text>
            Cari tempat makan terdekat untuk mengisi perut dengan aneka makanan ala Balikpapan.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Button variant="primary">
            <Link to="resto" style={{ textDecoration: 'None', color: 'inherit' }}>
              Cari Sekarang
            </Link>
        </Button>
        </Card.Footer>
      </Card>
    </CardGroup>
    </div>
  );
}

export default Information;
