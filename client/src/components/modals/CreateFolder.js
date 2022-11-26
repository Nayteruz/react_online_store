import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {createFolder} from "../../http/deviceApi";

const CreateFolder = ({show, onHide}) => {

	const [value, setValue] = useState('');
	const addFolder = (e) => {
		e.preventDefault();
		if (value.trim().length > 0) {
			createFolder({name: value.trim()}).then((e) => {
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
					Добавить категорию
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form onSubmit={addFolder}>
					<Form.Control
						placeholder={"Введите название категории..."}
						value={value}
						onChange={e => setValue(e.target.value)}
						required={true}
					/>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant={"outline-danger"} onClick={onHide}>Закрыть</Button>
				<Button variant={"outline-success"} onClick={addFolder}>Добавить</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default CreateFolder;