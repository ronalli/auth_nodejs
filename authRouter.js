const Router = require('express');
const router = new Router();
const controller = require('./authController');
const { check } = require('express-validator');

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
router.get('/users', controller.getUsers);

module.exports = router;
