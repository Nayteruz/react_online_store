import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {createVendor} from "../../http/deviceApi";

const CreateVendor = ({show, onHide}) => {

	const [value, setValue] = useState('');
	const addVendor = (e) => {
		e.preventDefault();
		if (value.trim().length > 0) {
			createVendor({name: value.trim()}).then(() => {
				setValue('');
				onHide()
			})
		}

	}

	return (
		<Modal
			centered
			show={show}
			onHide={onHide}
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					Добавить производителя
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form onSubmit={addVendor}>
					<Form.Control
						placeholder={"Введите название производителя..."}
						value={value}
						onChange={e => setValue(e.target.value)}
						required={true}
					/>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant={"outline-danger"} onClick={onHide}>Закрыть</Button>
				<Button variant={"outline-success"} onClick={addVendor}>Добавить</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default CreateVendor;