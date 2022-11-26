import {$authHost, $host} from "./index";

export const createFolder = async (folder) => {
	const {data} = await $authHost.post('api/folder', folder);
	return data;
}

export const fetchFolders = async () => {
	const {data} = await $host.get('api/folder');
	return data;
}

export const createVendor = async (vendor) => {
	const {data} = await $authHost.post('api/vendor', vendor);
	return data;
}

export const fetchVendors = async () => {
	const {data} = await $host.get('api/vendor');
	return data;
}

export const createDevice = async (device) => {
	const {data} = await $authHost.post('api/device', device);
	return data;
}

export const fetchDevices = async (folderId, vendorId, page, limit) => {
	const {data} = await $host.get('api/device', {
		params: {
			folderId, vendorId, page, limit
		}
	});
	return data;
}
export const fetchOneDevice = async (id) => {
	if (id) {
		const {data} = await $host.get('api/device/' + id);
		return data;
	}
	return {info: []}

}