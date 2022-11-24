import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {ListGroup} from "react-bootstrap";

const FolderBar = observer(() => {
    const {device} = useContext(Context)
    return (
        <ListGroup>
            {device.folders.map(folder =>
                <ListGroup.Item
                    style={{cursor:'pointer'}}
                    active={folder.id === device.selectedFolder.id}
                    key={folder.id}
                    onClick={() => device.setSelectedFolder(folder)}
                >
                    {folder.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default FolderBar;