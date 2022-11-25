import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateFolder from "../components/modals/CreateFolder";
import CreateDevice from "../components/modals/CreateDevice";
import CreateVendor from "../components/modals/CreateVendor";

const Admin = () => {

    const [folderVisible, setFolderVisible] = useState(false);
    const [vendorVisible, setVendorVisible] = useState(false);
    const [deviceVisible, setDeviceVisible] = useState(false);

    return (
        <Container className="d-flex flex-column">
            <Button
                variant={"outline-dark"} className="mt-4 pt-2"
                onClick={() => setFolderVisible(true)}
            >
                Добавить категорию
            </Button>
            <Button
                variant={"outline-dark"} className="mt-4 pt-2"
                onClick={() => setVendorVisible(true)}
            >
                Добавить производителя
            </Button>
            <Button
                variant={"outline-dark"} className="mt-4 pt-2"
                onClick={() => setDeviceVisible(true)}
            >
                Добавить устройство
            </Button>
            <CreateFolder show={folderVisible} onHide={() => setFolderVisible(false)}/>
            <CreateVendor show={vendorVisible} onHide={() => setVendorVisible(false)}/>
            <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)}/>
        </Container>
    );
};

export default Admin;