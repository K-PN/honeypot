import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import homeLogo from '../../Assets/bee.png';
import Particle from '../Particle';
import Home2 from './Home2';
import Resume from './Resume';
import Type from './Type';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaTelegram } from 'react-icons/fa';

function Home() {
  return (
    <section>
      <Container fluid className='home-section' id='home'>
        <Particle />
        <Container className='home-content'>
          <Row>
            <Col md={7} className='home-header'>
              <h1 style={{ paddingBottom: 15 }} className='heading'>
                Hi There! <span className='wave'>👋🏻</span>
              </h1>

              <h1 className='heading-name'>
                Welcome to
                <strong className='main-name'> Honeypot</strong>
              </h1>

              <div style={{ padding: 50, textAlign: 'left' }}>
                <Type />
              </div>
              <h3>
                <strong className='main-name'>
                  CA: 0x20416147d0D78eF186eE63d9c995058C5c8f59ab
                </strong>
              </h3>
              <ul className='home-about-social-links'>
                <li className='social-icons'>
                  <a
                    href='https://t.me/HoneypotChannel'
                    target='_blank'
                    rel='noreferrer'
                    className='icon-colour home-social-icons'
                  >
                    <FaTelegram />
                  </a>
                </li>
                <li className='social-icons'>
                  <a
                    href='https://twitter.com/HoneypotChannel'
                    target='_blank'
                    rel='noreferrer'
                    className='icon-colour  home-social-icons'
                  >
                    <AiOutlineTwitter />
                  </a>
                </li>
              </ul>
              <div id='dexscreener-embed'>
                <iframe src='https://dexscreener.com/bsc/0x0910B40F8Aa803d63654de2c19b3B64670473312?embed=1&theme=dark&trades=0&info=0'></iframe>
              </div>
            </Col>
            <Col md={5} style={{ paddingBottom: 20 }}>
              <img src={homeLogo} alt='home pic' className='img-fluid' />
            </Col>
          </Row>
        </Container>
        <Home2 />
        <Resume />
      </Container>
    </section>
  );
}

export default Home;
