const express = require('express');
const { body } = require('express-validator');
const userController = require('../controllers/userController');

const router = express.Router();

const userValidationRules = [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('age').isInt({ min: 0 }).withMessage('Age must be a non-negative integer'),
];

router.get('/users', userController.getAllUsers);
router.get('/users/:id', userController.getUserById);
router.post('/users', userValidationRules, userController.createUser);
router.put('/users/:id', userValidationRules, userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

module.exports = router;
