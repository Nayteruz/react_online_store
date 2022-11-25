import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._folders = [
            {id: 1, name: 'Холодильники'},
            {id: 2, name: 'Смартфоны'},
            {id: 3, name: 'Ноутбуки'},
            {id: 4, name: 'Телевизоры'},
        ];
        this._vendors = [
            {id: 1, name: 'Samsung'},
            {id: 2, name: 'Apple'},
            {id: 3, name: 'Lenovo'},
            {id: 4, name: 'Asus'},
        ];
        this._devices = [
            {id: 1, name: 'Ipone 12 pro', price: 20000, rating: 5, img: 'https://picsum.photos/400/301'},
            {id: 2, name: 'Ipone 12 pro', price: 25000, rating: 5, img: 'https://picsum.photos/400/302'},
            {id: 3, name: 'Ipone 12 pro', price: 30000, rating: 5, img: 'https://picsum.photos/400/303'},
            {id: 4, name: 'Ipone 12 pro', price: 28000, rating: 5, img: 'https://picsum.photos/400/304'},
            {id: 5, name: 'Ipone 12 pro', price: 38000, rating: 5, img: 'https://picsum.photos/400/305'},
        ]
        this._selectedFolder = {}
        this._selectedVendor = {}
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
        this._selectedFolder = folder;
    }

    setSelectedVendor(vendor) {
        this._selectedVendor = vendor
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

}