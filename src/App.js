import './App.css';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import vivek from './images/vivek.jpg';
function App() {
  return (
    <Container>
      <Row>
        <Col>
            <Image rounded={true} src={vivek} height={'100px'} />
        </Col>
        <Col>vivek</Col>
      </Row>
    </Container>
  );
}

export default App;
