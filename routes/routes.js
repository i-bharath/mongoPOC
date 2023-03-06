const express = require('express');
const router = express.Router();
const User = require('../Models/user');

router.get('',async  (req, res) => {
    const users = await User.find();
    return res.status(200).json(users);
});
router.get('/:id', async (req, res) => {

    let user = await User.findById(req.params.id );
    return res.status(200).json(user);

});

router.post('/', async (req, res) => {

        let user = new User({
            name: req.body.name,
            age: req.body.age,
            isPaid: req.body.isPaid
        });
        await user.save();
        return res.status(200).json(user);

});

router.put('/:id', async (req, res) => {
    let user = await User.findById(req.params.id);
    user.name = req.body.name;
    user.age = req.body.age;
    user.isPaid = req.body.isPaid;
    await user.save();
    return res.status(200).json(user);
});

router.delete('/:id', async (req, res) => {
    let user = await User.findByIdAndRemove(req.params.id);
    return res.status(200).json(user);
});

module.exports = router;