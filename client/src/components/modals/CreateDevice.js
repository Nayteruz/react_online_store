import React, {useContext, useEffect, useState} from 'react';
import {Button, Col, Dropdown, Form, Modal, Row} from "react-bootstrap";
import {Context} from "../../index";
import {createDevice, fetchFolders, fetchVendors} from "../../http/deviceApi";
import {observer} from "mobx-react-lite";

const CreateDevice = observer(({show, onHide}) => {

	const {device} = useContext(Context)

	useEffect(()=>{
		fetchFolders().then(data => device.setFolders(data))
		fetchVendors().then(data => device.setVendors(data))
	}, [])

	const [name, setName] = useState('');
	const [price, setPrice] = useState(0);
	const [deviceImage, setDeviceImage] = useState(null);
	const [info, setInfo] = useState([])

	const addInfo = () => {
		setInfo([...info, {title: '', description: '', number: Date.now()}])
	}
	const removeInfo = (number) => {
		setInfo(info.filter(i => i.number !== number))
	}
	const changeInfo = (key, value, number) => {
		setInfo(info.map(i => i.number === number ? {...i, [key]:value} : i))
	}

	const selectDeviceImage = (e) => {
		setDeviceImage(e.target.files[0])
	}

	const addDevice = () => {
		const formData = new FormData()
		formData.append('name', name);
		formData.append('price', `${price}`)
		formData.append('img', deviceImage)
		formData.append('vendorId', device.selectedFolder.id)
		formData.append('folderId', device.selectedVendor.id)
		formData.append('info', JSON.stringify(info))

		createDevice(formData).then(data => onHide())
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
				<Form onSubmit={addDevice}>
					<Dropdown className="mt-2 mb-3">
						<Dropdown.Toggle>{device.selectedFolder?.name || 'Выберите категорию'}</Dropdown.Toggle>
						<Dropdown.Menu>
							{device.folders.map(folder =>
								<Dropdown.Item
									onClick={() => device.setSelectedFolder(folder)}
									key={folder.id}
									active={device.selectedFolder?.id === folder.id}
								>
									{folder.name}
								</Dropdown.Item>
							)}
						</Dropdown.Menu>
					</Dropdown>
					<Dropdown className="mt-2 mb-3">
						<Dropdown.Toggle>{device.selectedVendor?.name || 'Выберите производителя'}</Dropdown.Toggle>
						<Dropdown.Menu>
							{device.vendors.map(vendor =>
								<Dropdown.Item
									onClick={() => device.setSelectedVendor(vendor)}
									key={vendor.id}
									active={device.selectedVendor?.id === vendor.id}
								>
									{vendor.name}
								</Dropdown.Item>
							)}
						</Dropdown.Menu>
					</Dropdown>
					<Form.Control
						className="mt-3"
						placeholder={"Введите название устройства"}
						value={name}
						onChange={e => setName(e.target.value)}
						required={true}
					/>
					<Form.Control
						className="mt-3"
						placeholder={"Введите стоимость устройства"}
						type="number"
						value={price}
						onChange={e => setPrice(+e.target.value)}
						required={true}
						min={0}
					/>
					<Form.Control
						className="mt-3"
						type="file"
						onChange={selectDeviceImage}
					/>
					<hr/>
					<Button onClick={addInfo} variant={"outline-dark"}>Добавить новое свойство</Button>
					{info.map(i =>
						<Row className="mt-4" key={i.number}>
							<Col md={4}>
								<Form.Control
									value={i.title}
									onChange={e=> changeInfo('title', e.target.value, i.number)}
									placeholder={"Введите название свойства"}
								/>
							</Col>
							<Col md={4}>
								<Form.Control
									value={i.description}
									onChange={e=> changeInfo('description', e.target.value, i.number)}
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
				<Button variant={"outline-success"} onClick={addDevice}>Добавить</Button>
			</Modal.Footer>
		</Modal>
	);
});

export default CreateDevice;