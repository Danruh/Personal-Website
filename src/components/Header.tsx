import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';

import GithubIcon from '../assets/github.svg';
import LinkedInIcon from '../assets/linkedin.svg';
import OutlookIcon from '../assets/microsoftoutlook.svg';

class Header extends React.Component {
    render() {
        return (
            <Container className='Header' fluid='md'>
                <Row>
                    <Col lg={true}>
                        <br />
                        <br />
                        <h1>Danruh Ryan Tarog Lasta</h1>
                        <h6>Digital Design and L1SW intern, MEng Electronic Engineering Student</h6>
                    </Col>
                    <Col lg={true}>
                        <br />
                        <a href='https://github.com/Danruh'>
                            <img src={GithubIcon} className="github-icon" alt="Github" width='50px' />
                        </a>
                        <img src={LinkedInIcon} className="linkedin-icon" alt="LinkedIn" width='50px' />
                        <img src={OutlookIcon} className="outlook-icon" alt="Outlook" width='50px' />
                        <p>
                            Email: danruhlasta@outlook.com
                            <br />
                            Web: www.google.com
                        </p>
                        <br />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Header;