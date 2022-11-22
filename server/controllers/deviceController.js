const uuid = require('uuid')
const path = require('path')
const {Device, DeviceInfo} = require('../models/models')
const ApiError = require('../error/ApiError')

class DeviceController {
    async create(req, res, next) {
        try {
            let {name, price, vendorId, folderId, info} = req.body;
            const {img} = req.files;
            let filename = uuid.v4() + '.jpg'
            await img.mv(path.resolve(__dirname, '..', 'static', filename))
            const device = await Device.create({name, price, vendorId, folderId, img: filename})

            if (info) {
                info = JSON.parse(info);
                info.forEach(i =>
                    DeviceInfo.create({
                        title: i.title,
                        description: i.description,
                        deviceId: device.id
                    })
                )
            }
            return res.json(device)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        let {vendorId, folderId, limit, page} = req.body;
        page = page || 1;
        limit = limit || 9;
        let offset = page * limit - limit;
        let devices;
        if (!vendorId && !folderId) {
            devices = await Device.findAndCountAll({limit, offset});
        }
        if (vendorId && !folderId) {
            devices = await Device.findAndCountAll({where: {vendorId}, limit, offset});
        }
        if (!vendorId && folderId) {
            devices = await Device.findAndCountAll({where: {folderId}, limit, offset});
        }
        if (vendorId && folderId) {
            devices = await Device.findAndCountAll({where: {folderId, vendorId}, limit, offset});
        }
        return res.json(devices)
    }

    async getOne(req, res) {
        const {id} = req.params;
        const device = await Device.findOne(
            {
                where: {id},
                include: [{model:DeviceInfo, as: 'info'}]
            }
        )
        return res.json(device)
    }
}

module.exports = new DeviceController()