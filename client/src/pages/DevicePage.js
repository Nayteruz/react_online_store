import React from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import star from "../assets/images/star.svg"

const DevicePage = () => {
    const device = {id: 1, name: 'Ipone 12 pro', price: 20000, rating: 5, img: 'https://picsum.photos/400/301'};
    const description = [
        {id:1, title: 'Характеристики 1', description: 'test test'},
        {id:2, title: 'Характеристики 2', description: 'test '},
        {id:3, title: 'Характеристики 3', description: 'te'},
        {id:4, title: 'Характеристики 4', description: 'teest'},
        {id:5, title: 'Характеристики 5', description: 'te test'},
        {id:6, title: 'Характеристики 6', description: 'tt'},
    ]
    return (
        <Container className="mt-3">
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={device.img}/>
                </Col>
                <Col md={4}>
                    <Row>
                        <h2>{device.name}</h2>
                        <div
                            className="d-flex align-items-center justify-content-center"
                            style={{
                                background: `url(${star}) 50% 50% no-repeat`,
                                width: 240,
                                height: 240,
                                backgroundSize: '108%',
                                fontSize: 64
                            }}
                        >
                            {device.rating}
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-center"
                        style={{width:300, height:300, fontSize:32, border:'5px solid gray'}}
                    >
                        <h3>От: {device.price} руб.</h3>
                        <Button variant={'outline-dark'}>Добавить в корзину</Button>
                    </Card>
                </Col>
            </Row>
            <Row>
                <h1>Характеристики</h1>
                {description.map((info, index)=>
                    <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent'}}>
                        {info.title}: {info.description}
                    </Row>
                )}
            </Row>
        </Container>
    );
};

export default DevicePage;