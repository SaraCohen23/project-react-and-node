const Renter=require("../Modules/RenterModule");
const Accessory=require("../Modules/AccessoryModule")
const createAccessory=require("../Controllers/AccessoryController")
async function createRenter(req, res)  {
    try {
        const renter = new Renter(req.body);
        await renter.save();
        res.status(201).send({ id:renter._id });
    } catch (error) {
        res.status(400).send(error.message);
    }
}
async function getRenterById(req,res){
    try {
            const {id} = req.params;
            let renter = await Renter.findById(id).populate('renterRent')
            if (!renter) {
               res.status(404).send(null);
            }
            else res.status(200).send(renter);
        } catch (error) {
            res.status(500).send(error.message);
        }
}
async function updatePersonalDetails(req, res)  {
    try {
        let { id } = req.params;
        let renter = await Renter.findById(id);
        if (!renter) {
            return res.status(404).send('User not found');
        }
        _.assign(renter, req.body);
        let updated = await renter.save();
        res.status(200).send(updated);
    } catch (error) {
        res.status(500).send(error.message);
    }
}
async function addAccessory(req,res){
  let{renterId}=req.params;
  let name=req.body.accessoryName;
  let accessory= await Accessory.findOne({accessoryName:name})
  if(!accessory){
  let accessory= await createAccessory(req, res);
  let renterDoc = await Renter.findById(renterId); 
  if (!renterDoc) {
      return res.status(404).send('Renter not found');
  }

     renterDoc.renterAccessory.push({
      accessory: accessory._id,
      price: req.body.price
  });

  accessory.accessoryRenter.push({ renter: renterDoc._id });
  
  await renterDoc.save(); 
  await accessory.save(); 
  res.status(200).send({ message: 'Accessory added successfully' });

}
}
module.exports={createRenter,getRenterById,addAccessory,updatePersonalDetails}