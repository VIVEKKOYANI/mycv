import './App.css';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import vivek from './images/vivek.jpg';
import webdesign from './images/web_design.png';
import frontend from './images/frontend.png';
import geo from './images/geo-alt-fill.svg';
import telephone from './images/telephone.svg';
import envelope from './images/envelope.svg';

function App() {
  return (
    <Container>
      <div style={{ margin: '10px' }}></div>
      <Row>
        <Col>
          <Image rounded={true} src={vivek} height={'100px'} />
          <h3>Vivek koyani</h3>
          <h4><img src={geo} /> 52, Shantivan Society,
            Signet mall bardoli Rd,
            beside petrol pump,
            Kamrej, Gujarat 394185
          </h4>
          <h4><img src={telephone} /> Mobile No: +91.9574170590</h4>
          <h4><img src={envelope} /> vivek.koyani@gmail.com</h4>
          <h2 style={{ backgroundColor: 'navy', color: 'white' }}>Certificate:</h2>
          <Row>
            <Col>Responsive Web Design <Image rounded={true} src={webdesign} height={'100px'} className='certificate' onClick={() => {
              window.open('https://www.freecodecamp.org/certification/fccbcc7ed87-ef88-467e-b996-c3d68f76fb7b/responsive-web-design')
            }} /></Col>
            <Col>Front End Development <Image rounded={true} src={frontend} height={'100px'} className='certificate' onClick={() => {
              window.open('https://www.freecodecamp.org/certification/fccbcc7ed87-ef88-467e-b996-c3d68f76fb7b/front-end-development-libraries')
            }} /></Col>
          </Row>
          <h2 style={{ backgroundColor: 'navy', color: 'white' }}>Objective:</h2>
          <h4>
            - Self-motivated individual with interest in an IT specialist position. Bringing exceptional awareness on trending technologies and how they function.
          </h4>
          <h4>- 	To obtain a challenging IT position with Bright Inc; a progressive establishment where extensive knowledge of data processing will be fully utilized.</h4>
          <h2 style={{ backgroundColor: 'navy', color: 'white' }}>Responsibilities:</h2>
          <h4>- Leverage the inbuilt React toolkit for creating frontend features</h4>
          <h4>- Create data visualization tools, libraries, and reusable code for prospects</h4>
          <h4>- Integrate designs and wireframes within the application code</h4>
          <h4>- Monitor interaction of users and convert them into insightful information</h4>
        </Col>
        <Col>
          <h2 style={{ backgroundColor: 'navy', color: 'white' }}>Experience:</h2>
          <h4 style={{ border: '1px solid', paddingLeft: 'inherit' }}>
            1-November-2021- Till Now working,
            React developer, NYsolution
          </h4>
          <h4 style={{ border: '1px solid', paddingLeft: 'inherit' }}>
            1-September-2020 -  31-October-2021,
            React Developere, Aartoon Solution pvt. Ltd.
          </h4>
          <h4 style={{ border: '1px solid', paddingLeft: 'inherit' }}>
            5-January-2020  -  5-May-2020,
            React Developere, Bitontree
          </h4>
          <h4 style={{ border: '1px solid', paddingLeft: 'inherit' }}>
            1-August-2019 - 30-November-2019,
            internship in React, Dev It
          </h4>
          <h2 style={{ backgroundColor: 'navy', color: 'white' }}>Education:</h2>
          <h4>- SEMCOM College,Sardar Patel University, Anand(Vallabh Vidyanagar),
            Bachelor of Computer Applications (BCA)</h4>
          <h2 style={{ backgroundColor: 'navy', color: 'white' }}>Technical Skills:</h2>
          <h4>HTML</h4>
          <h4>CSS</h4>
          <h4>JavaScript</h4>
          <h4>Bootstrap</h4>
          <h4>React.js</h4>
          <h4>Next.js</h4>
          <h4>Gatsby.js</h4>
          <h2 style={{ backgroundColor: 'navy', color: 'white' }}>Strength:</h2>
          <h4>- Simpler code with fewer bugs</h4>
          <h4>- It plays nicely with your existing code</h4>
          <h4>- Learn once, write anywhere</h4>
          <h2 style={{ backgroundColor: 'navy', color: 'white' }}>Declaration:</h2>
          <h4>- all the information provided above is best and correct into my knowledge</h4>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
