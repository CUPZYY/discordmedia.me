import Database from "better-sqlite3/lib/database";
import { drizzle } from "drizzle-orm/better-sqlite3";
import { InsertUrl, Url, urlTable } from "./schema";

const sqlite = new Database("database.db");
const db = drizzle(sqlite);

const result: Url[] = db.select().from(urlTable).all()

const insertUrl = (url: InsertUrl) => {
    return db.insert(urlTable).values(url).run()
}