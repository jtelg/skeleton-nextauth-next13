import userController from "@/controller/user.controller";
import executeQuery from "@/lib/db";
import { NextResponse } from "next/server";
const controlUser = new userController();
export async function GET(req: Request) {
  const path = new URL(req.url).searchParams.get("path");
  if (path === "getByID") return getUserByID(req);
  return NextResponse.json({ message: "error" });
}

const getUserByID = async (req: Request) => {
  const url = new URL(req.url);
  const idParam = url.pathname.split('/')[3];
  const result = await controlUser.getUserByID(idParam);
  return NextResponse.json(result);
};
