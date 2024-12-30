import mySql from "mysql";

export const connect = mySql.createConnection({
    host: "localhost",
    user: "root",
    password: "Computer@12345%",
    database: "socialmedia"
})