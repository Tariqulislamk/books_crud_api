
let db = require('../config/db');

// Start the Model of Create Book
exports.CreateBook = async (data, req, res) => {
    let ClientPc = req.connection.remoteAddress;
    let LoggedInUserID = 1; // It will be dynamic
    let responseData;

    // ************** Preparing query  **************//
    let columnsName = [];
    if (data.BookID) {
        columnsName.push(`@BookID = ${data.BookID}`);
    }
    columnsName.push(`@Title = '${data.Title}'`);
    if (data.Description) {
        columnsName.push(`@Description = '${data.Description}'`);
    }
    columnsName.push(`@AuthorID = ${data.AuthorID}`);
    columnsName.push(`@PublisherID = ${data.PublisherID}`);
    columnsName.push(`@PublicationDate = ${data.PublicationDate}`);
    columnsName.push(`@Price = ${data.Price}`);
    if (data.ImageURL) {
        columnsName.push(`@ImageURL = '${data.ImageURL}'`);
    }

    // Start of default data
    columnsName.push(`@LoggedInUserID = ${LoggedInUserID}`);
    if (ClientPc) {
        columnsName.push(`@CreatedPC = '${ClientPc}'`);
    }
    // End of default data

    let query;
    if (!data.BookID) {
        query = `Sp_CreateBook ${columnsName} ;`;
    } else {
        query = `Sp_UpdateBook ${columnsName} ;`;
    }
    // ************** End of query **************//
    console.log("Query:", query);
    // Run the query
    let queryResult;
    try {
        queryResult = await db.executeSql(query);
    } catch (error) {
        console.log("MODEL ERROR:", error);
        throw error;
    }

    // Start of manipulate data if need
    try {
        responseData = queryResult;
    } catch (error) {
        throw error;
    }
    // End of manipulate data if need

    // Return data
    if (responseData) {
        return responseData;
    } else {
        throw 'Response not found';
    }
}
// End the Model of Create Book

// Start the Model of Get Book
exports.getBook = async (data, req, res) => {

    let responseData;

    // ************** Preparing query for get Book **************//
    let columnsName = [];

    if (data.BookID) {
        columnsName.push(`@BookID = ${data.BookID}`);
    }
    if (data.Paginate) {
        columnsName.push(`@Paginate = ${data.Paginate}`);
    }
    if (data.rowsPerPage) {
        columnsName.push(`@rowsPerPage = ${data.rowsPerPage}`);
    }
    if (data.requestedPage) {
        columnsName.push(`@requestedPage = ${data.requestedPage}`);
    }
    if (data.searchValue) {
        columnsName.push(`@searchValue = '${data.searchValue}'`);
    }
    if (data.orderByColumn) {
        columnsName.push(`@orderByColumn = '${data.orderByColumn}'`);
    }
    if (data.orderBy) {
        columnsName.push(`@orderBy = '${data.orderBy}'`);
    }

    let query = `Sp_GetBooks ${columnsName} ;`;
    // ************** End of query **************//
    console.log(query);
    // Run the query
    let queryResult;
    try {
        queryResult = await db.executeSql(query);
    } catch (error) {
        throw error;
    }

    // Start of manipulate data if need
    try {
        responseData = queryResult.recordsets[0];
    } catch (error) {
        throw error;
    }
    // End of manipulate data if need

    // Return data
    if (responseData) {
        return responseData;
    } else {
        throw "Not found";
    }
};

//End the Model of Get Book


// Start the Model of Delete Book
exports.deleteBook = async (data, req, res) => {
    let ClientPc = req.connection.remoteAddress;
    let LoggedInUserID = 1; // It will be dynamic
    let responseData;

    let columnsName = [];

    if (data.BookID) {
        columnsName.push(`@BookID = ${data.BookID}`);
    }

    // Start of default data
    columnsName.push(`@LoggedInUserID = ${LoggedInUserID}`);
    if (ClientPc) {
        columnsName.push(`@ClientPc = '${ClientPc}'`);
    }
    // End of default data

    let query = `Sp_DeleteBook ${columnsName} ;`;

    // Run the query
    let queryResult;
    try {
        queryResult = await db.executeSql(query);
    } catch (error) {
        throw error;
    }

    // Start of manipulate data if need
    try {
        responseData = queryResult.recordsets[0];
    } catch (error) {
        throw error;
    }
    // End of manipulate data if need

    // Return data
    if (responseData) {
        return responseData;
    } else {
        throw "Not found";
    }
};
// End the Model of Delete Book