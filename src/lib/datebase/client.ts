import {
    drizzle,
    type BetterSQLite3Database,
} from "drizzle-orm/better-sqlite3";
import { type InsertUrl, type Url, urlTable } from "./schema";
import Database from "better-sqlite3";
import { DB_PATH } from "$env/static/private";

const sqlite = new Database(DB_PATH);
export const db: BetterSQLite3Database = drizzle(sqlite);
