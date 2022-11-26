import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Card, Col, Row} from "react-bootstrap";
import {Context} from "../index";

const VendorBar = observer(() => {
    const {device} = useContext(Context)
    return (
        <Row className="d-flex">
            {device.vendors.map(vendor =>
                <Col key={vendor.id} style={{width:'auto', flex:'0 0 auto', }} className="vendor-list">
                    <Card
                        style={{cursor:'pointer'}}
                        className="p-3"
                        key={vendor.id}
                        onClick={() => device.setSelectedVendor(vendor)}
                        border={vendor.id === device.selectedVendor.id ? 'danger' : 'light'}
                    >

                        {vendor.name}
                    </Card>
                </Col>
            )}
        </Row>
    );
});

export default VendorBar;