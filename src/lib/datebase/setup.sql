DROP TABLE urls;

CREATE TABLE urls (
    id TEXT PRIMARY KEY,
    video_url TEXT NOT NULL,
    thumbnail_url TEXT
);