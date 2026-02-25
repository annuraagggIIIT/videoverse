import Database from "better-sqlite3";

export const db = new Database("database.db");

db.exec(`
CREATE TABLE IF NOT EXISTS items (
  id TEXT PRIMARY KEY,
  name TEXT,
  createdAt TEXT
)
`);