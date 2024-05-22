const Model = require('./Model');

//Start tho Controller of Create Book
exports.create = async (req, res, next) => {
    let responseData, responseError;

    let reqBody = req.body;
    try {
        responseData = await Model.CreateBook(reqBody, req, res)
    } catch (error) {
        console.log("CONTROLLER ERROR:", error);
        responseError = {
            error
        };
    }

    // Prepare for response return
    if (responseError) {
        res.status(500).send(responseError)
    }
    if (responseData) {
        res.json(responseData)
    }
}
//End the controller of Create Book

// Start the Controller of get Books
exports.get = async (req, res, next) => {
    let responseError;
    let responseData = [];

    let reqQuery = req.query;
    try {
        responseData = await Model.getBook(reqQuery, req, res);
    } catch (error) {
        console.log("CONTROLLER ERROR:", error);
        responseError = {
            error,
        };
    }

    // Prepare for response return
    if (responseError) {
        res.status(500).send(responseError);
    }
    if (responseData) {
        res.json(responseData);
    }
};
//End the Controller of get Books

exports.delete = async (req, res, next) => {
    let responseData, responseError;

    let reqQuery = req.query;
    try {
        responseData = await Model.deleteBook(reqQuery, req, res);
    } catch (error) {
        responseError = {
            error,
        };
    }
    // Prepare for response return
    if (responseData) {
        res.json({
            msg: "Deleted Successfully",
        });
    }

    if (responseError) {
        res.status(500).send(responseError);
    }
};