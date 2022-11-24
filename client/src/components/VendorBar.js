import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Card, Row} from "react-bootstrap";
import {Context} from "../index";

const VendorBar = observer(() => {
    const {device} = useContext(Context)
    return (
        <Row className="d-flex gap-2">
            {device.vendors.map(vendor =>
                <Card
                    style={{width: 'auto', cursor:'pointer'}}
                    className="p-3"
                    key={vendor.id}
                    onClick={() => device.setSelectedVendor(vendor)}
                    border={vendor.id === device.selectedVendor.id ? 'danger' : 'light'}
                >

                    {vendor.name}
                </Card>
            )}
        </Row>
    );
});

export default VendorBar;