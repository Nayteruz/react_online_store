import React, {useContext, useState} from 'react';
import {Button, Col, Dropdown, Form, Modal, Row} from "react-bootstrap";
import {Context} from "../../index";

const CreateDevice = ({show, onHide}) => {

    const {device} = useContext(Context)
    const [info, setInfo] = useState([])

    const addInfo = () => {
        setInfo([...info, {title:'', description:'', number: Date.now()}])
    }
    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }

    return (
        <Modal
            size="lg"
            centered
            show={show}
            onHide={onHide}
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить устройство
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className="mt-2 mb-3">
                        <Dropdown.Toggle>Выберите категорию</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.folders.map(folder=>
                                <Dropdown.Item key={folder.id}>{folder.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="mt-2 mb-3">
                        <Dropdown.Toggle>Выберите производителя</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.vendors.map(vendor=>
                                <Dropdown.Item key={vendor.id}>{vendor.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        className="mt-3"
                        placeholder={"Введите название устройства"}
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder={"Введите стоимость устройства"}
                        type="number"
                    />
                    <Form.Control
                        className="mt-3"
                        type="file"
                    />
                    <hr/>
                    <Button onClick={addInfo} variant={"outline-dark"}>Добавить новое свойство</Button>
                    {info.map(i =>
                        <Row className="mt-4" key={i.number}>
                            <Col md={4}>
                                <Form.Control
                                    placeholder={"Введите название свойства"}
                                />
                            </Col>
                            <Col md={4}>
                                <Form.Control
                                    placeholder={"Введите описание свойства"}
                                />
                            </Col>
                            <Col md={4}>
                                <Button onClick={() => removeInfo(i.number)} variant={"outline-danger"}>
                                    Удалить
                                </Button>
                            </Col>
                        </Row>
                    )}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-danger"} onClick={onHide}>Закрыть</Button>
                <Button variant={"outline-success"} onClick={onHide}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateDevice;