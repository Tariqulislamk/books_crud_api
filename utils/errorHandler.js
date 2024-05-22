const {
	validationResult
} = require('express-validator')

const validationErrorFormatter = require('./validationErrorFormatter')


module.exports.returnIfHasValidationError = (req, res, next) => {
	let errorsFormatted = validationResult(req).formatWith(validationErrorFormatter)
	if (!errorsFormatted.isEmpty()) {
		console.log(errorsFormatted)
		console.log('Has many error');
		res.status(400).json(errorsFormatted.mapped())
		return
	}



	next()
}