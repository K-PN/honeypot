import React from 'react';
import Card from 'react-bootstrap/Card';
import { ImPointRight } from 'react-icons/im';

function AboutCard() {
  return (
    <Card className='quote-card-view'>
      <Card.Body>
        <blockquote className='blockquote mb-0'>
          <p style={{ textAlign: 'justify' }}>
            <span className='purple'>$Honeypot </span>
            is here to make BSC great again. Launched stealth with no presale,
            LP LOCKED and contract renounced,{' '}
            <span className='purple'>$Honeypot </span> is a coin for the people,
            forever. SAFU team. Join <span className='purple'>HONEYPOT </span>{' '}
            army today!
            <br />
            <br />
            Take action now!
          </p>
          <ul>
            <li className='about-activity'>
              <ImPointRight /> Join and Follow Social $Honeypot
            </li>
            <li className='about-activity'>
              <ImPointRight /> Buy $Honeypot
            </li>
            <li className='about-activity'>
              <ImPointRight /> Shill $$Honeypot
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
