import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import homeLogo from '../../Assets/nft.webp';
import Home2 from './Home2';
import Resume from './Resume';
import Partner from './Partner';

function Home() {
  return (
    <section>
      <Container fluid className='home-section' id='home'>
        <div className='home-content'>
          <Row>
            <Col md={7} className='home-header'>
              <p className='small-text'>META-PAD</p>
              <p className='home-about-title'>NFT Launchpad</p>
              <p className='home-about-title'>Development Company</p>
              <p className='home-about-body'>
                Be the reason for the success of the impending NFT projects by
                launching your exemplary NFT Launchpad platform by opting for
                the best-in-class NFT Launchpad Development services from the
                industry-leading NFT services provider.
              </p>
            </Col>
            <Col md={5} style={{ paddingBottom: 20 }}>
              <img src={homeLogo} alt='home pic' className='img-fluid' />
            </Col>
          </Row>
          <Button variant='danger' bsSize='large' active>
            <h4>Buy $METAPAD</h4>
          </Button>
        </div>
        <Home2 />
        <Resume />
        <Partner />
      </Container>
    </section>
  );
}

export default Home;
