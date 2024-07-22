import db from "./db";

// store a new user in the database
export function createUser (email, password) {
const result = db.prepare('INSERT INTO users (email, password) VALUES (?, ?)').run(email,password);

    return result.lastInsertRowid;

}