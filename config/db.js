
var sql = require('mssql')

settings = require('./settings');

exports.executeSql = async (query) => {
    let result;
    try {
        let pool = await sql.connect(settings.dbConfig)

        result = await pool.request().query(query)
    } catch (err) {
        console.log(err);
        throw `DATABASE ${err.name}`;
    }
    return result
}