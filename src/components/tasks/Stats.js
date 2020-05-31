import React, { useState } from 'react';
import '../../css/Stats.css';
import { Row, Col } from 'react-bootstrap';

const Stats = () => {
    const [stats, setStats] = useState(["48", "42", "6"]);
    return(
        <div>
            <Row xs={3} md={4} lg={6}>
                <Col>
                    <div id="stats-col-total">
                        <i className="far fa-clone" id="stats-icon"></i>
                        <span id="stats-numeric">{stats[0]}</span>
                        <span id="stats-description"> taks</span>
                    </div>
                </Col>
                <Col>
                    <div id="stats-col-completed">
                        <i className="far fa-check-square" id="stats-icon-completed"></i>
                        <span id="stats-numeric">{stats[1]}</span>
                        <span id="stats-description"> completed</span>
                    </div>
                </Col>
                <Col>
                    <div id="stats-col-completed">
                        <i className="fas fa-grip-vertical" id="stats-icon-progress"></i>
                        <span id="stats-numeric">{stats[2]}</span>
                        <span id="stats-description"> in-progress</span>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Stats;