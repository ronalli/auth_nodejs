const User = require('./models/User');
const Role = require('./models/Role');

class authController {
  async registration(req, res) {
    try {
    } catch (err) {
      res.status(400).json({ message: '' });
    }
  }

  async login(req, res) {
    try {
    } catch (err) {
      res.status(400).json({ message: '' });
    }
  }

  async getUsers(req, res) {
    try {
      res.json('server work');
    } catch (err) {
      res.status(400).json({ message: '' });
    }
  }
}

module.exports = new authController();
