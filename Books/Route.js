const express = require('express');
const router = express.Router();

const validator = require('./Validator');
const {
    returnIfHasValidationError
} = require('../utils/errorHandler');

const controller = require('./Controller');

router.post('/', validator.create, returnIfHasValidationError, controller.create);
router.put('/', validator.update, returnIfHasValidationError, controller.create);
router.get('/', validator.get, returnIfHasValidationError, controller.get);
router.delete('/', validator.delete, returnIfHasValidationError, controller.delete);

module.exports = router;