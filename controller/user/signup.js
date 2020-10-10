const {user} = require('../../models');

module.exports = async (req, res) => {
    const {username, password } = req.body;
    console.log("body:",req.body)

   let [users, created] = await user.findOrCreate({
        where: {
            username
        },
        defaults: {
            password
        }
    });

    if(!created) {
        return res.status(409).json({
            message: "This email already exists",
        });
    }
    return res.status(201).json({
        message: "Successfully registerd"
    })
};
