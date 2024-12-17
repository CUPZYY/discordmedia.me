import { sql } from "drizzle-orm";
import { sqliteTable, text } from "drizzle-orm/sqlite-core";

export const urlTable = sqliteTable("urls", {
    id: text("id").primaryKey(),
    video_url: text("video_url").notNull(),
    thumbnail_url: text("thumbnail_url"),
    timestamp: text("timestamp")
        .default(sql`(current_timestamp)`)
        .notNull(),
});

export type Url = typeof urlTable.$inferSelect;
export type InsertUrl = typeof urlTable.$inferInsert;
