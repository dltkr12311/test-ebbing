const {user} = require('../../models');

module.exports = async(req, res) => {
  const {username, password} = req.body;

  let users = await user.findOne({
      where: {
          username,
          password
      }
  });

  if(!users) {
      return res.status(404).json({
          messages: "Email does not exist"
      })
  } else {
    return res.status(200).json({
        messages:"Success signin"
    })
  }
    
};