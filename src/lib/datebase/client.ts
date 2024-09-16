import { drizzle, type BetterSQLite3Database } from "drizzle-orm/better-sqlite3";
import { type InsertUrl, type Url, urlTable } from "./schema";
import Database from "better-sqlite3";

const sqlite = new Database("database.db");
const db: BetterSQLite3Database = drizzle(sqlite)

const result: Url[] = db.select().from(urlTable).all()

export const insertUrl = (url: InsertUrl) => {
    return db.insert(urlTable).values(url).run()
}