import {makeAutoObservable} from "mobx";

export default class DeviceStore {
	constructor() {
		this._folders = [];
		this._vendors = [];
		this._devices = []
		this._selectedFolder = {}
		this._selectedVendor = {}
		this._page = 1
		this._totalCount = 0
		this._limit = 3
		makeAutoObservable(this)
	}

	setFolders(folders) {
		this._folders = folders;
	}

	setVendors(vendors) {
		this._vendors = vendors;
	}

	setDevices(devices) {
		this._devices = devices;
	}

	setSelectedFolder(folder) {
		this.setPage(1)
		this._selectedFolder = folder;
	}

	setSelectedVendor(vendor) {
		this.setPage(1)
		this._selectedVendor = vendor
	}

	setPage(page) {
		this._page = page
	}

	setTotalCount(count) {
		this._totalCount = count
	}

	setLimit(limit) {
		this._limit = limit
	}


	get folders() {
		return this._folders;
	}

	get vendors() {
		return this._vendors;
	}

	get devices() {
		return this._devices;
	}

	get selectedFolder() {
		return this._selectedFolder
	}

	get selectedVendor() {
		return this._selectedVendor
	}

	get page() {
		return this._page;
	}

	get totalCount() {
		return this._totalCount
	}

	get limit() {
		return this._limit
	}

}