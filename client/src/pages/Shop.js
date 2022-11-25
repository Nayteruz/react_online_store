import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import FolderBar from "../components/FolderBar";
import VendorBar from "../components/VendorBar";
import DeviceList from "../components/DeviceList";

const Shop = () => {
    return (
        <Container>
            <Row className="mt-2">
                <Col md={3}>
                    <FolderBar/>
                </Col>
                <Col md={9}>
                    <VendorBar/>
                    <DeviceList/>
                </Col>
            </Row>
        </Container>
    );
};

export default Shop;