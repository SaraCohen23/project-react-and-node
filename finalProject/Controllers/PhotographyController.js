const mongoose = require("mongoose");
const moment = require('moment');
const Photography = require("./path/to/PhotographyModel"); // עדכן את הנתיב למודל

const createPhotography = async (req, res) => {
    const { photographyPassword, photographyName, photographyAddress, photographyMail, photographyPhone, photographyPrice, photographyLink } = req.body;
    // בדיקות קלט
    if (!photographyPassword || !photographyName || !photographyAddress || !photographyMail || !photographyPrice || !photographyLink) {
        return res.status(400).send("כל השדות הם חובה.");
    }
    try {
        const newPhotography = new Photography({
            photographyPassword,
            photographyName,
            photographyAddress,
            photographyMail,
            photographyPhone,
            photographyPrice,
            photographyLink
        });
        await newPhotography.save();
        res.status(201).send(newPhotography);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const getAllPhotography = async (req, res) => {
    try {
        const allPhotography = await Photography.find();
        res.status(200).send(allPhotography);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const addImage = async (req, res) => {
    const { photographyId, imageUrl, gallery } = req.body;
    if (!photographyId || !imageUrl || !gallery) {
        return res.status(400).send("photographyId, imageUrl ו-gallery הם חובה.");
    }
    try {
        const photography = await Photography.findById(photographyId);
        if (!photography) {
            return res.status(404).send("צילום לא נמצא.");
        }

        photography.photographyImages.push({ url: imageUrl, galery: gallery });
        await photography.save();
        res.status(200).send(photography);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const addResponse = async (req, res) => {
    const { photographyId, response } = req.body;
    if (!photographyId || !response) {
        return res.status(400).send("photographyId ו-response הם חובה.");
    }
    try {
        const photography = await Photography.findById(photographyId);
        if (!photography) {
            return res.status(404).send("צילום לא נמצא.");
        }
        photography.photographyResponse.push(response);
        await photography.save();
        res.status(200).send(photography);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const getPhotographyByName = async (req, res) => {
    const { name } = req.params;
    try {
        const photography = await Photography.findOne({ photographyName: name });
        if (!photography) {
            return res.status(404).send("צילום לא נמצא.");
        }
        res.status(200).send(photography);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const updatePersonalDetails = async (req, res) => {
    const { photographyId, updates } = req.body;
    if (!photographyId || !updates) {
        return res.status(400).send("photographyId ו-updates הם חובה.");
    }
    try {
        const photography = await Photography.findByIdAndUpdate(photographyId, updates, { new: true });
        if (!photography) {
            return res.status(404).send("צילום לא נמצא.");
        }
        res.status(200).send(photography);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

async function matchPhotography(req, res) {
    const { userId, minPrice, maxPrice } = req.body;
    // if (!userId || minPrice === undefined || maxPrice === undefined) {
    //     return res.status(400).send("userId, minPrice ו-maxPrice הם חובה.");
    // }
    try {
        // חיפוש הלקוח לפי userId
        const client = await Users.findById(userId);
        if (!client) {
            return res.status(404).send("לקוח לא נמצא.");
        }

        const clientLocation = client.userAddress; 

        // חיפוש הצלמות המתאימות
        const matchedPhotographers = await Photographies.find({
            photographyAddress: clientLocation,
            'photographyGaleries.minPrice': { $lte: maxPrice },
            'photographyGaleries.maxPrice': { $gte: minPrice }
        });

        if (matchedPhotographers.length === 0) {
            return res.status(404).send("לא נמצאו צלמות מתאימות.");
        }

        res.status(200).send(matchedPhotographers);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

async function getAvailableDates(req, res) {
    const { id } = req.params; // מזהה הצלמת מהפרמטרים
    const { month, year } = req.body; // חודש ושנה מהגוף של הבקשה

    try {
        // חיפוש הזמנות של הצלמת בחודש ובשנה שנבחרו
        const orders = await Orders.find({
            orderPhotography: id,
            orderDate: {
                $gte: moment(`${year}-${month}-01`).startOf('month').toDate(),
                $lt: moment(`${year}-${month}-01`).endOf('month').toDate()
            }
        });

        // יצירת מערך של כל התאריכים בחודש המבוקש
        const daysInMonth = moment(`${year}-${month}`, "YYYY-MM").daysInMonth();
        const allDates = Array.from({ length: daysInMonth }, (_, i) => moment(`${year}-${month}-${i + 1}`).toDate());

        // סינון התאריכים הפנויים
        const bookedDates = orders.map(order => order.orderDate.toISOString().split('T')[0]); // קבלת תאריכים שהוזמנו
        const availableDates = allDates.filter(date => !bookedDates.includes(date.toISOString().split('T')[0]));

        return res.status(200).send(availableDates); // החזרת התאריכים הפנויים
    } catch (error) {
        return res.status(500).send(error.message); // טיפול בשגיאות
    }
}

module.exports = {
    createPhotography,
    getAllPhotography,
    addImage,
    addResponse,
    getPhotographyByName,
    updatePersonalDetails,
    matchPhotography,
    getAvailableDates
};
