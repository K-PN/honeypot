import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import myImg from '../../Assets/HONEYPOT.png';
import Tilt from 'react-parallax-tilt';
import Particle from '../Particle';

function Home2() {
  return (
    <Container fluid className='home-about-section' id='about'>
      <Particle />
      <Container>
        <Row>
          <Col md={8} className='home-about-description'>
            <h1 style={{ fontSize: '2.6em' }}>
              <span className='purple'>Token Features </span>
            </h1>
            <p className='home-about-body'>
              <span className='purple'>HONEYPOT </span> is creating a new way of
              investing and getting passive income. The contract is
              well-designed for generating passive income by auto-reflection for
              each buy/sell transaction in real time..😉
              <br />
              <br />
              <i>
                <b className='purple'> 🍯 HoneyPot 🍯 </b>
              </i>
              <br />
              ✅ Utility and Check honeypot CA
              <br />
              ✅ % Reflection
              <br />
              ✅ Daily Marketing
              <br />
              ✅ Dev Based
              <br />
              ✅ CMC & CG Coming
              <br />✅ LP Locked
            </p>
          </Col>
          <Col md={4} className='myAvtar'>
            <Tilt>
              <img src={myImg} className='img-fluid' alt='avatar' />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
