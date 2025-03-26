const _ = require('lodash');

const User=require('../Modules/UserModule')

 async function createUser(req, res)  {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).send({ id: user._id });
    } catch (error) {
        res.status(400).send(error.message);
    }
}

async function getUserById(req, res)  {
    try {
        const {id} = req.params;
        let user = await User.findById(id);
        if (!user) {
           res.status(404).send(null);
        }
        else res.status(200).send(user);
    } catch (error) {
        res.status(500).send(error.message);
    }
}


async function updateUserDetails(req, res)  {
    try {
        let { id } = req.params;
        let user = await User.findById(id);
        if (!user) {
            return res.status(404).send('User not found');
        }
        _.assign(user, req.body);
        let updated = await user.save();
        res.status(200).send(updated);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

async function deleteUser(req, res)  {
    try {
        let { id } = req.params
        let user =await User.findByIdAndDelete(id)
        if (!user) {
            res.status(404).send('User not found');
         }
         else res.status(204).send()
    } catch (error) {
        res.status(500).send(error.message);
    }
}
module.exports= {getUserById,createUser,updateUserDetails,deleteUser}

