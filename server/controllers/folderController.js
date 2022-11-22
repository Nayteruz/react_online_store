const {Folder} = require('../models/models')
const ApiError = require('../error/ApiError')
class FolderController {
    async create(req, res){
        const {name} = req.body;
        const folder = await Folder.create({name})
        return res.json(folder)
    }
    async getAll(req, res){
        const folders = await Folder.findAll()
        return res.json(folders)
    }
}

module.exports = new FolderController()