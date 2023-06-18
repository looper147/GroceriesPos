import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("groceriesPos.db");

db.transaction(
  (tx) => {
    tx.executeSql(
      `
      CREATE TABLE IF NOT EXISTS category(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL UNIQUE
      )`
    );

    tx.executeSql(
      `
      CREATE TABLE IF NOT EXISTS item(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        cost REAL NOT NULL,
        cost_curr TEXT NOT NULL DEFAULT 'LBP',
        price REAL NOT NULL,
        price_curr TEXT NOT NULL DEFAULT 'LBP',
        categ_id INT NOT NULL,
        FOREIGN KEY(categ_id) REFERENCES category(id)
      )`
    );

    tx.executeSql(
      `
      CREATE TABLE IF NOT EXISTS daily_item(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        date DATE NOT NULL,
        item_id INTEGER NOT NULL,
        cost REAL NOT NULL,
        cost_curr TEXT NOT NULL DEFAULT 'LBP',
        price REAL NOT NULL,
        price_curr TEXT NOT NULL DEFAULT 'LBP',
        available_amount REAL NOT NULL,
        FOREIGN KEY(item_id) REFERENCES item(id)
      )`
    );

    tx.executeSql(
      `
      CREATE TABLE IF NOT EXISTS daily_sales(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        date DATE NOT NULL,
        item_id INTEGER NOT NULL,
        sold_amount REAL NOT NULL,
        lost_amount REAL NOT NULL,
        FOREIGN KEY(item_id) REFERENCES item(id)
      )`
    );

    tx.executeSql(
      `
      CREATE TABLE IF NOT EXISTS package(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        unit TEXT NOT NULL,
        quantity REAL NOT NULL,
        price REAL NOT NULL,
        price_curr TEXT NOT NULL DEFAULT 'LBP'
      )`
    );

    tx.executeSql(
      `
      CREATE TABLE IF NOT EXISTS package_links(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        item_id INTEGER NOT NULL,
        pack_id INTEGER NOT NULL,
        price REAL NOT NULL,
        price_curr TEXT NOT NULL DEFAULT 'LBP',
        FOREIGN KEY(item_id) REFERENCES item(id),
        FOREIGN KEY(pack_id) REFERENCES package(id)
      )`
    );
  },
  (error) => {
    alert("Error opening the database" + error);
  },
  () => {
    alert("Database schema created successfully");
  }
);

export default db;
