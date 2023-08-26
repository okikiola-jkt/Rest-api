const pool =require('pg').pool;
const pool = new pool({
    user: "postgress",
    host: "localhost",
    database: "students",
    password: "test",
    port: "5432",
    });


    module.exports= pool;