const _ = require('lodash');

const Accessory=require("../Modules/AccessoryModule")
const Renters = require('./path/to/your/renterModel');
async function createAccessory(req, res)  {
    try {
        const accessory = new Accessory(req.body);
        await accessory.save();
        res.status(201).send({ id:accessory._id });
    } catch (error) {
        res.status(400).send(error.message);
    }
}
async function deleteAccessory(req,res){
    try {
        let { id } = req.params
        let accessory  =await Accessory .findByIdAndDelete(id)
        if (!accessory ) {
            res.status(404).send(null);
         }
         else res.status(204).send()
    } catch (error) {
        res.status(500).send(error.message);
    }
}
async function getAccessoryByGallery(req,res){
    try {
        const {gallery} = req.params;
        let accessory= await Accessory.find({gallery:gallery})
        if (!accessory) {
           res.status(404).send(null);
        }
        else res.status(200).send(accessory);
    } catch (error) {
        res.status(500).send(error.message);
    }
}
async function updateAccessory(req, res) {
    try {
        let { id } = req.params;
        let accessory = await Accessory.findById(id);
        if (!accessory) {
            return res.status(404).send(null);
        }
        _.assign(accessory, req.body);
        await accessory.save(); 
        res.status(200).send(accessory);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

async function addRent(req, res) {
    try {
        const { accessoryId, date, quantity } = req.body; 
        const accessory = await AccessoryModule.findById(accessoryId);
        if (!accessory) {
            return res.status(404).json({ message: 'Accessory not found' });
        }

        const existingRent = accessory.accessoryRent.find(rent => rent.date.toISOString() === new Date(date).toISOString());
        if (existingRent) {
            return res.status(400).json({ message: 'Rent for this date already exists' });
        }
        accessory.accessoryRent.push({ date, quantity });
        await accessory.save();
        return res.status(200).json({ message: 'Rent added successfully', accessory });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error' });
    }
}

  

async function addRenter(req, res) {
    const { accessoryId, renterData } = req.body; 
    try {   
     const accessory = await Accessories.findById(accessoryId);
        if (!accessory) {
            return res.status(404).json({ message: 'Accessory not found' });
        }
        const newRenter = new Renters(renterData);
        await newRenter.save();
        accessory.accessoryRenter.push({ renter: newRenter._id });
        await accessory.save();
        return res.status(200).json({ message: 'Renter added successfully', accessory });
    } catch (error) {
        return res.status(500).json({ message: 'Error adding renter', error });
    }

}
module.exports={createAccessory,deleteAccessory,getAccessoryByGallery,updateAccessory,addRent,addRenter}