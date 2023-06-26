import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Resumecontent from './ResumeContent';

function Resume() {
  return (
    <Container fluid className='resume-section'>
      <Container>
        <h1 className='purple'>ROADMAP</h1>
        <Row className='resume'>
          <Col md={6} className='resume-left'>
            <h3 className='resume-title'>PHASE 1</h3>
            <Resumecontent
              title='Concept development'
              content={['Launchpad project incorporates NFT']}
            />
            <Resumecontent
              title='Finalization of MetaPad project'
              content={['Complete website', 'Community building']}
            />

            <h3 className='resume-title'>PHASE 2</h3>
            <Resumecontent title='Launch Pancakeswap' content={[]} />
            <Resumecontent title='Marketing' content={[]} />
            <Resumecontent title='200 holders' content={[]} />
            <Resumecontent title='Applied CMC, CGC' content={[]} />
          </Col>
          <Col md={6} className='resume-right'>
            <h3 className='resume-title'>PHASE 3</h3>
            <Resumecontent title='Development LaunchPad' content={[]} />
            <Resumecontent title='Website V2' content={[]} />
            <Resumecontent title='Listing On CMC, CGC' content={[]} />
            <Resumecontent title='500 holders' content={[]} />

            <h3 className='resume-title'>PHASE 4</h3>
            <Resumecontent title='1000 holders' content={[]} />
            <Resumecontent title='Launch of the NFT collection' content={[]} />
            <Resumecontent title='Partnership' content={[]} />
            <Resumecontent title='List CEX' content={[]} />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
