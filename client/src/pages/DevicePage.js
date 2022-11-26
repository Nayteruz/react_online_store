import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import star from "../assets/images/star.svg"
import {fetchOneDevice} from "../http/deviceApi";
import {useParams} from "react-router-dom";

const DevicePage = () => {

	const {id} = useParams();
	const baseUrl = process.env.REACT_APP_API_URL;
	const [device, setDevice] = useState({info: []});
	useEffect(() => {
		fetchOneDevice(id).then(data => setDevice(data))
	}, [id])

	return (
		<Container className="mt-3">
			<Row>
				<Col md={4}>
					{device?.img && <Image width={300} height={300} src={baseUrl + '/' + device.img}/>}
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
						style={{width: 300, height: 300, fontSize: 32, border: '5px solid gray'}}
					>
						<h3>От: {device.price} руб.</h3>
						<Button variant={'outline-dark'}>Добавить в корзину</Button>
					</Card>
				</Col>
			</Row>
			<Row>
				<h1>Характеристики</h1>
				{device.info.map((info, index) =>
					<Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent'}}>
						{info.title}: {info.description}
					</Row>
				)}
			</Row>
		</Container>
	);
};

export default DevicePage;