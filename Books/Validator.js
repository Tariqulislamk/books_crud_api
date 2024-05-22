const { body, query } = require("express-validator");

module.exports.create = [
    body("Title").not().isEmpty().withMessage("Title Is Required"),
    body("AuthorID").not().isEmpty().withMessage("Author ID Is Required"),
    body("PublisherID").not().isEmpty().withMessage("Publisher ID Is Required"),
    body("PublicationDate").not().isEmpty().withMessage("Publication Date Is Required"),
    body("Price").not().isEmpty().withMessage("Price Is Required"),
];

module.exports.update = [
    body("BookID").not().isEmpty().withMessage("Book Is Required"),
    body("Title").not().isEmpty().withMessage("Title Is Required"),
    body("AuthorID").not().isEmpty().withMessage("Author ID Is Required"),
    body("PublisherID").not().isEmpty().withMessage("Publisher ID Is Required"),
    body("PublicationDate").not().isEmpty().withMessage("Publication Date Is Required"),
    body("Price").not().isEmpty().withMessage("Price Is Required"),
];

module.exports.get = [];

module.exports.delete = [
    query("BookID").not().isEmpty().withMessage("BookID Is Required"),
];