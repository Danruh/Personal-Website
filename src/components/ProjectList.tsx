import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

class ProjectList extends React.Component {
    render() {
        return (
            <Container className="Project-list">
                <h3>Projects</h3>
                <br />
                <Row>
                    <Col lg={true}>
                        <h5>Sudoku Solver</h5>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default ProjectList;