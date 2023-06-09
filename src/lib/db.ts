// db.js
import mysql from "serverless-mysql";
import ProcessENV from "./process";
const db = mysql({
  config: {
    host: ProcessENV("NEXT_PUBLIC_DATABASE_HOST"),
    port: Number(ProcessENV("NEXT_PUBLIC_DATABASE_PORT")),
    user: ProcessENV("NEXT_PUBLIC_DATABASE_USERNAME"),
    password: ProcessENV("NEXT_PUBLIC_DATABASE_PASSWORD"),
    database: ProcessENV("NEXT_PUBLIC_DATABASE_DB"),
  },
});
export default async function executeQuery(query: string) {
  try {
    const results = await db.query(query);
    await db.end();
    return results;
  } catch (error) {
    return { error };
  }
}
