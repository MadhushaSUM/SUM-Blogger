import mysql from "mysql"

export const db = mysql.createConnection({
    host:"localhost",
    user:"webuser",
    password:"17458",
    database:"sum_blogger"
})