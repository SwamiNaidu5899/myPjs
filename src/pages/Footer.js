import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt } from 'react-icons/fa'; // Import icons from react-icons

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#333', color: 'white', padding: '20px 0', width: '100%' }}>
      <Container>
        <Row className="justify-content-center">
          <Col xs="auto">
            {/* Social Media Links */}
            <div className="text-center">
              <a
                href="https://www.linkedin.com/in/swami-naidu-datti-6916a329b/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'white', fontSize: '1.5rem', margin: '0 10px' }}
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/SwamiNaidu5899"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'white', fontSize: '1.5rem', margin: '0 10px' }}
              >
                <FaGithub />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
