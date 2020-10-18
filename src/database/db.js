const Database = require("sqlite-async");

function execute(db) {
    // console.log("entrei"); primeiro vc verifica se o database foi criado
    return db.exec(`
          CREATE TABLE IF NOT EXISTS orphanages(
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              lat TEXT,
              lng TEXT,
              name TEXT,
              about TEXT,
              whatsapp TEXT,
              images TEXT,
              instructions TEXT,
              opening_hours TEXT,
              open_on_weekends TEXT  
          );
      `); //template literos ou string= usase a craze
  }

module.exports = Database.open(__dirname + '/database.sqlite').then(execute)