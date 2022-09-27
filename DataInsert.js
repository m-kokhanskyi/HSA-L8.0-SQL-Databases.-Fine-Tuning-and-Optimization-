const mysql = require('mysql');
const {faker} = require('@faker-js/faker');
const util = require('util');

const connection = mysql.createConnection({
    host: "localhost",
    port: 2345,
    user: "max",
    password: "secret"
});

async function f() {
    let sql = 'INSERT INTO max.clients (id, name, last_name, city, birthday) VALUES ';
    for (let t = 30000; t > 0; t--) {
        for (let i = 500; i > 0; i--) {
            sql += `('${faker.datatype.uuid()}', '${faker.name.firstName().replace('\'', '')}', '${faker.name.lastName().replace('\'', '')}','Stockton', FROM_UNIXTIME(${faker.datatype.datetime({min: 327798000000, max: 1663967804960}).getTime() / 1000})),`
        }
        try {
            await new Promise((resolve, reject) => {
                connection.query(sql.slice(0, -1), (err, results, fields) => {
                    if (err) {
                        reject(err)
                    } else {
                        // get inserted rows
                        console.log('Row inserted:' + results.affectedRows);
                        resolve();
                    }
                });
            })
        } catch (e) {
            console.error(e.message);
        }


        sql = 'INSERT INTO max.clients (id, name, last_name, city, birthday) VALUES ';
        console.log(t);
    }

}

f()