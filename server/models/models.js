const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
	id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
	email: {type: DataTypes.STRING, unique: true},
	password: {type: DataTypes.STRING},
	role: {type: DataTypes.STRING, defaultValue: 'USER'}
})

const Cart = sequelize.define('cart', {
	id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

const CartDevice = sequelize.define('cart_device', {
	id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

const Device = sequelize.define('device', {
	id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
	name: {type: DataTypes.STRING, unique: true, allowNull: false},
	price: {type: DataTypes.INTEGER, allowNull: false},
	rating: {type: DataTypes.INTEGER, allowNull: false},
	img: {type: DataTypes.STRING, allowNull: false},
})

const Folder = sequelize.define('folder', {
	id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
	name: {type: DataTypes.STRING, unique:true, allowNull: false}
})
const Vendor = sequelize.define('vendor', {
	id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
	name: {type: DataTypes.STRING, unique:true, allowNull: false}
})

const Rating = sequelize.define('rating', {
	id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
	rate: {type: DataTypes.INTEGER, allowNull: false}
})

const DeviceInfo = sequelize.define('device_info', {
	id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
	title: {type: DataTypes.STRING, allowNull: false},
	description: {type: DataTypes.STRING, allowNull: false}
})

const FolderVendor = sequelize.define('folder_vendor', {
	id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})


User.hasOne(Cart)
Cart.belongsTo(User)

User.hasMany(Rating)
Rating.belongsTo(User)

Cart.hasMany(CartDevice)
CartDevice.belongsTo(Cart)

Folder.hasMany(Device)
Device.belongsTo(Folder)

Vendor.hasMany(Device)
Device.belongsTo(Vendor)

Device.hasMany(Rating)
Rating.belongsTo(Device)

Device.hasMany(CartDevice)
CartDevice.belongsTo(Device)

Device.hasMany(DeviceInfo)
DeviceInfo.belongsTo(Device)

Folder.belongsToMany(Vendor, {through: FolderVendor})
Vendor.belongsToMany(Folder, {through: FolderVendor})

module.exports = {
	User,
	Cart,
	CartDevice,
	Device,
	Folder,
	Vendor,
	Rating,
	FolderVendor,
	DeviceInfo
}

