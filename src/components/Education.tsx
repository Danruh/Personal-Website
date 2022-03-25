import React from "react";
import { Container, Row, Col } from "react-bootstrap";


class Education extends React.Component {
    render() {
        return (
            <Container className='Education'>
                <h3>Education</h3>
                <br />
                <Row>
                    <Col lg={true}>
                        <br />
                        <h5>University of Southampton</h5>
                        <strong>MEng Electronic Engineering</strong>
                        <br />
                        2018-Present
                    </Col>
                    <Col>
                        <ul>
                            <li>Did stuff</li>
                            <li>More things</li>
                        </ul>
                        <br />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Education;