import React, { useState } from 'react';

import { Row, Col, Modal, Container } from 'react-bootstrap';

const WeekCalender = (props) => {

    const {data} = props;
    const [lgShow, setLgShow] = useState(false);
    const [slider, setSlider] = useState(0)

    const openModal = (date, modalVal) => {
        console.log(date)
        setLgShow(modalVal)
    }

    const handleSliderChange = (e) => {
        console.log(e)
        console.log(e.target)
        console.log(e.target.value)
        setSlider(e.target.value)
    }

    return (
        <React.Fragment>
            <Row>
                {
                    data.map((item, index) => {
                        return(
                            <Col key={index} className="date-content">
                                <div className="dateBox text-center">
                                    <div>{item.date}</div>
                                    <div>{item.day}</div>
                                </div>
                            </Col>
                        )
                    })
                }
            </Row>

            <Row>
                {
                    data.map((item, index) => {
                        return(
                            <Col key={index} className="date-textbox" onClick={() => openModal(item.date, true)}></Col>
                        )
                    })
                }
            </Row>

            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">Large Modal</Modal.Title>
                </Modal.Header>
                <Modal.Body className="show-grid">
                    <Container>
                        <Row>
                            <Col xs={6} md={6}>

                                <div className="slidecontainer">
                                    <input type="range" min="01:00 AM" max="00:" value={slider} className="slider" id="myRange" onChange={(e) => handleSliderChange(e)} />
                                </div>
                            </Col>
                            <Col xs={6} md={6}>
                                
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
            </Modal>
        </React.Fragment>

    )
}

export default WeekCalender
