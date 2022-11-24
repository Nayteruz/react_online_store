import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import FolderBar from "../components/FolderBar";
import VendorBar from "../components/VendorBar";

const Shop = () => {
    return (
        <Container>
          <Row className="mt-2">
              <Col md={3}>
                <FolderBar />
              </Col>
              <Col md={9}>
                <VendorBar />
              </Col>
          </Row>
        </Container>
    );
};

export default Shop;