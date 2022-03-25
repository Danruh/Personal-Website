import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Idiot from '../assets/photo.jpeg';

class About extends React.Component {
    render() {
        return(
            <Container className='About' fluid='md'>
                <Row>
                    <Col lg={true}>
                        <h3>About</h3>
                        <p>
                            My name is Danruh and I'm an undergrad studying an MEng Electronic Engineering at the
                            University of Southampton. 
                            I'm currently a Digital Design and L1SW intern at MediaTek Wireless Ltd, based in Cabourne.
                        </p>
                        <p>
                            I am skilled in RTL design with SystemVerilog, Analog and Mixed-Signal Verification
                        </p>
                    </Col>
                    <Col lg={true} className='About-photo-column'>
                        <img src={Idiot} className='self-photo' width='200px' />
                    </Col>
                </Row>
                <Row>
                    <h3>Skills</h3>
                    <ul>
                        <li>SystemVerilog</li>
                        <li>Python</li>
                        <li>C++</li>
                    </ul>
                </Row>
            </Container>
        );
    }
}


export default About;