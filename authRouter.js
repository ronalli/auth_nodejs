const Router = require('express');
const router = new Router();
const controller = require('./authController');
const { check } = require('express-validator');
const authMiddleware = require('./middleware/authMiddleware');
const roleMiddleware = require('./middleware/roleMiddleware');

router.post(
  '/registration',
  [
    check('username', 'Name must not be empty').trim().notEmpty(),
    check(
      'password',
      'Password greater than 4 and less than 10 characters'
    ).isLength({ min: 4, max: 10 }),
  ],
  controller.registration
);
router.post('/login', controller.login);
router.get('/users', roleMiddleware(['ADMIN']), controller.getUsers);

module.exports = router;
