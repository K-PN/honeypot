import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaTelegram } from 'react-icons/fa';

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className='footer'>
      <Row>
        <Col md='4' className='footer-copywright'>
          <h3>Developed by HoneypotBSC</h3>
        </Col>
        <Col md='4' className='footer-copywright'>
          <h3>Copyright © {year} HoneypotBSC</h3>
        </Col>
        <Col md='4' className='footer-body'>
          <ul className='footer-icons'>
            <li className='social-icons'>
              <a
                target='_blank'
                rel='noreferrer'
                href='https://t.me/HoneypotChannel'
                style={{ color: 'white' }}
              >
                <FaTelegram />
              </a>
            </li>
            <li className='social-icons'>
              <a
                target='_blank'
                rel='noreferrer'
                href='https://twitter.com/HoneypotChannel'
                style={{ color: 'white' }}
              >
                <AiOutlineTwitter />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
