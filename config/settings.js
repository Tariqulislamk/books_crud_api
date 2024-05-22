let dbConfig = {
    server: 'localhost',
    authentication: {
        type: 'default',
        options: {
            userName: 'sa', // update me
            password: '115251' // update me
        }
    },
    options: {
        database: 'BooksInformation',
        validateBulkLoadParameters: false,
        encrypt: false,
    }
}
var webPort = process.env.PORT || 4050; // Use export PORT=4050 or any port to set port as environment variable from terminal
var hostAddress = 'http://localhost:' + webPort

module.exports = {
    dbConfig,
    webPort,
    hostAddress
}