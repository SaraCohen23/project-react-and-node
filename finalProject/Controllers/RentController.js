const Rent=require("../Modules/RentModule");
const Renter=require("../Modules/RenterModule");
const Accessory=require("../Modules/AccessoryModule");

async function createRent(req,res){
     try {
           const rent = new Rent(req.body);         
           await rent.save();
           res.status(201).send({rent:rent});
       } catch (error) {
           res.status(400).send(error.message);
       }
}

async function addAccessory(req, res) {
    try {
        const { userId, renterId } = req.params; 
        const accessory = await Accessory.findById(req.body.accessoryId);
                const dateExists = accessory.accessoryRent.find(rent => rent.date.toString() === req.body.rentDate && rent.renter.toString() === renterId);
        if (dateExists) {
            return res.status(409).send("תאריך זה כבר תפוס עבור השוכר.");
        }

        let rent = await Rent.findOne({ rentUser: userId, rentDate: req.body.rentDate });
        if (!rent) {
            rent = await createRent(req.body);
        }
        
        // הוספה למערך המוצרים בהזמנה
        rent.rentAccessories.push(req.body.accessoryId);
        rent.rentRenter.push(renterId);
        await rent.save();

        // עדכון השוכרים
        const renter = await Renter.findById(renterId);
        renter.renterRents.push({ rentId: rent._id });
        await renter.save();

        // עדכון היסטוריית השכרת האביזר
        accessory.accessoryRent.push({ date: req.body.rentDate, renter: renterId });
        await accessory.save();

        res.status(201).send({ rent: rent });
    } catch (error) {
        res.status(400).send(error.message);
    }
}

async function getAllRents(req, res) {
    try {
        const rents = await Rent.find().populate('rentUser').populate('rentAccessories').populate('rentRenter');
        res.status(200).send({ rents: rents });
    } catch (error) {
        console.error(error); 
        res.status(400).send(error.message);
    }
}

async function deleteRent(req, res) {
    try {
        const rentId = req.params.id;
        
        // מצא את השכרה
        const rent = await Rent.findById(rentId);
        if (!rent) {
            return res.status(404).send("השכרה לא נמצאה.");
        }

        // עדכון טבלת Renters
        await Renter.updateMany(
            { renterRents: rentId },
            { $pull: { renterRents: rentId } }
        );

        // עדכון טבלת Accessories
        await Accessory.updateMany(
            { accessoryRent: { $elemMatch: { rent: rentId } } },
            { $pull: { accessoryRent: { rent: rentId } } }
        );

        // מחק את השכרה
        await Rent.findByIdAndDelete(rentId);

        res.status(200).send("השכרה נמחקה בהצלחה.");
    } catch (error) {
        console.error(error); // לוג של השגיאה
        res.status(400).send(error.message);
    }
}

async function updateRent(req, res) {
    try {
        const rentId = req.params.id; 
        
        // מצא את השכרה
        const rent = await Rent.findById(rentId);
        if (!rent) {
            return res.status(404).send("השכרה לא נמצאה.");
        }

        // עדכון תאריך השכרה
        rent.rentDate = req.body.date;
        await rent.save(); // שמור את השינויים

        res.status(200).send("תאריך השכרה עודכן בהצלחה.");
    } catch (error) {
        console.error(error); // לוג של השגיאה
        res.status(400).send(error.message);
    }
}

async function removeAccessory(req, res) {
    try {
        const { userId, renterId } = req.params; 
        const accessoryId = req.body.accessoryId;
        const rentDate = req.body.rentDate;

        // מצא את השכרה לפי המשתמש ותאריך
        let rent = await Rent.findOne({ rentUser: userId, rentDate: rentDate });
        if (!rent) {
            return res.status(404).send("השכרה לא נמצאה.");
        }

        // בדוק אם האביזר קיים בהשכרה
        const accessoryIndex = rent.rentAccessories.indexOf(accessoryId);
        if (accessoryIndex === -1) {
            return res.status(404).send("אביזר לא נמצא בהשכרה.");
        }

        // הסר את האביזר מהשכרה
        rent.rentAccessories.splice(accessoryIndex, 1);
        await rent.save();

        // עדכון היסטוריית השכרת האביזר
        const accessory = await Accessory.findById(accessoryId);
        accessory.accessoryRent = accessory.accessoryRent.filter(rent => rent.renter.toString() !== renterId || rent.date !== rentDate);
        await accessory.save();

        res.status(200).send("אביזר נמחק בהצלחה מהשכרה.");
    } catch (error) {
        res.status(400).send(error.message);
    }
}






module.exports={ deleteRent,createRent,addAccessory,getAllRents,updateRent,removeAccessory}