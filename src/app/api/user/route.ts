import executeQuery from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const path = new URL(req.url).searchParams.get("path");
  if (path === "getAll") return getAllUsers();
  return NextResponse.json({ message: "error" });
}

const getAllUsers = async () => {
  const sql = `SELECT * FROM user;`;
  const result = await executeQuery(sql);
  return NextResponse.json(result);
};
