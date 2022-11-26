import React, {useContext, useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import FolderBar from "../components/FolderBar";
import VendorBar from "../components/VendorBar";
import DeviceList from "../components/DeviceList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchDevices, fetchFolders, fetchVendors} from "../http/deviceApi";
import Pages from "../components/Pages";

const Shop = observer(() => {

	const {device} = useContext(Context);
	const limit = 2;
	useEffect(() => {
		fetchFolders().then(data => device.setFolders(data))
		fetchVendors().then(data => device.setVendors(data))
		fetchDevices(null, null, 1, limit).then(data => {
			device.setDevices(data.rows)
			device.setTotalCount(data.count)
		})
	}, [])

	useEffect(()=>{
		fetchDevices(device.selectedFolder.id, device.selectedVendor.id, device.page, limit).then(data => {
			device.setDevices(data.rows)
			device.setTotalCount(data.count)
		})
	}, [device.page, device.selectedFolder, device.selectedVendor])

	return (
		<Container>
			<Row className="mt-2">
				<Col md={3}>
					<FolderBar/>
				</Col>
				<Col md={9}>
					<VendorBar/>
					<DeviceList/>
					<Pages/>
				</Col>
			</Row>
		</Container>
	);
});

export default Shop;