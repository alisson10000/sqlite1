const sqlite3 = require('sqlite3').verbose();
let sql;



//conexao db
const db = new sqlite3.Database("./test.db", sqlite3.OPEN_READWRITE, (err) => {
    if (err) return console.error(err.message);
})

/* sql ="CREATE TABLE users(id INTEGER PRIMARY KEY , nome, sobrenome, login, password, email )";
 db.run(sql);*/

//  sql = `INSERT INTO users (nome, sobrenome, login, password, email) VALUES (?,?,?,?,?)`;

//  db.run(sql,["Sandro","Oliveira","Sa56","5479","s@s.com.br"],(err)=>{
// if(err) return console.error(err.message);
//  })

sqlConsulta = `SELECT * FROM users`;
//  
db.all(sqlConsulta, [], (err, rows) => {
    if (err) return console.error(err.message);
//  
//  
    rows.forEach(row => {
        console.log(row)
    })
//  
// 
 });

// sql = `update users set nome = ? where id = ?`;

// db.run(sql, ["alisson",1]),(err)=>{
    // if (err) return console.error(err.message);
// }

sqlDelete = `DELETE FROM users WHERE id = ? `
// 
db.run(sqlDelete, [4]),(err)=>{
    if (err) return console.error(err.message);
}