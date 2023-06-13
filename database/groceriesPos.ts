import SQLite from "sqlite3";
const db = new SQLite.Database("../database/groceriesPos.ts", (err) => {
  if (err) {
    console.error("Error opening the database", err.message);
  } else {
    console.log("Connected to the database");
    db.run(`
                CREATE TABLE IF NOT EXISTS category(
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL
                )
        
        `);
    db.run(`
                CREATE TABLE IF NOT EXISTS item(
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    name TEXT NOT NULL,
                    cost REAL NOT NULL,
                    cost_curr TEXT NOT NULL DEFAULT 'LBP',
                    price REAL NOT NULL,
                    price_curr TEXT NOT NULL DEFAULT 'LBP',
                    categ_id INT NOT NULL ,
                    FOREIGN KEY(categ_id) REFERENCES category(id)

                )
        
        
        `);
    db.run(`
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
                    )
        `);
    db.run(`
                    CREATE TABLE IF NOT EXISTS daily_sales(
                        id INTEGER PRIMARY KEY AUTOINCREMENT,
                        date DATE NOT NULL,
                        item_id INTEGER NOT NULL,
                        sold_amount REAL NOT NULL,
                        lost_amount REAL NOT NULL,
                        FOREIGN KEY(item_id) REFERENCES item(id)
                    )
        `);
    db.run(`
                    CREATE TABLE IF NOT EXISTS package(
                        id INTEGER PRIMARY KEY AUTOINCREMENT,
                        name TEXT NOT NULL,
                        unit TEXT NOT NULL,
                        quantity REAL NOT NULL,
                        price REAL NOT NULL,
                        price_curr TEXT NOT NULL DEFAULT 'LBP'
                    )
        `);
    db.run(`
                    CREATE TABLE IF NOT EXISTS package_links(
                        id INTEGER PRIMARY KEY AUTOINCREMENT,
                        item_id INTEGER NOT NULL,
                        pack_id INTEGER NOT NULL,
                        price REAL NOT NULL,
                        price_curr TEXT NOT NULL DEFAULT 'LBP',
                        FOREIGN KEY(item_id) REFERENCES item(id),
                        FOREIGN KEY(pack_id) REFERENCES package(id)
                    )
        `);
    console.log("Database schema created successfully");
  }
});
export default db;
