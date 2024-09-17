import { drizzle, type BetterSQLite3Database } from "drizzle-orm/better-sqlite3";
import { type InsertUrl, type Url, urlTable } from "./schema";
import Database from "better-sqlite3";
import { DB_PATH } from "$env/static/private";

const sqlite = new Database(DB_PATH);
const db: BetterSQLite3Database = drizzle(sqlite)

export const result: Url[] = db.select().from(urlTable).all()

export const insertUrl = (url: InsertUrl) => {
    return db.insert(urlTable).values(url).run()
}