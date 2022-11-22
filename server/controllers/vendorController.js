const {Vendor, Folder} = require('../models/models')
const ApiError = require('../error/ApiError')
class VendorController {
    async create(req, res){
        const {name} = req.body;
        const vendor = await Vendor.create({name})
        return res.json(vendor)
    }
    async getAll(req, res){
        const vendors = await Vendor.findAll()
        return res.json(vendors)
    }
}

module.exports = new VendorController()