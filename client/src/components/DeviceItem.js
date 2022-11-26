import React from 'react';
import {Card, Col, Image} from "react-bootstrap";
import star from '../assets/images/star-fill.svg'
import {useNavigate} from "react-router-dom";
import {DEVICE_ROUTE} from "../utils/consts";
const DeviceItem = ({device}) => {
    const history = useNavigate();
    const baseUrl = process.env.REACT_APP_API_URL;
    return (
        <Col md={3} className="mt-3" onClick={() => history(DEVICE_ROUTE + '/' + device.id)}>
            <Card style={{cursor:'pointer'}} border={'light'}>
                <Image src={baseUrl + '/' + device.img} style={{borderRadius:'8px'}} />
                <div className="text-black-50 d-flex justify-content-between">
                    <div>Samsung...</div>
                    <div className="d-flex align-items-center gap-1">
                        <div>{device.rating}</div>
                        <Image src={star} width={16}/>
                    </div>
                </div>
                <div>{device.name}</div>
            </Card>
        </Col>
    );
};

export default DeviceItem;