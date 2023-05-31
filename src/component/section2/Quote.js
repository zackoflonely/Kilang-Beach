import { Row, Col } from "react-bootstrap";

function Quote() {
  return (
    <div>
    <div>
        <Row>
            <Col><h1 style={{textAlign:'right',fontWeight:'bold',fontFamily:'sans-serif',fontSize:'72px'}}>"</h1></Col>
            <Col xs={6} className="img-quote"></Col>
            <Col></Col>
            <Col className="text-quote"><span className="text2-quote">Sometimes </span>you will <span className="text2-quote">never know </span>the value of <span className="text2-quote">a moment </span>untill it <span className="text2-quote">becomes </span>a memory."</Col>
        </Row>
    </div>
    </div>
  );
}

export default Quote;