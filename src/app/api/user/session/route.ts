import userController from "@/controller/user.controller";
import { authOptions } from "@/lib/auth";
import ProcessENV from "@/lib/process";
import { hash } from "bcryptjs";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

const controlUser = new userController();
export async function GET(request: Request) {
  const session = await getServerSession(authOptions);

  return NextResponse.json({
    authenticated: !!session,
    session,
  });
}

export async function POST(req: Request) {
  const path = new URL(req.url).searchParams.get("path");
  // if (path === "loginEmail") return loginEmail(req);
  if (path === "register") return registerUser(req);
  return NextResponse.json({ message: "error" });
}

// const loginEmail = async (req: Request) => {
//   const body = await req.formData();
//   const user = { email: body.get("email") } as UserData;
//   const result = await controlUser.loginEmail(user.email);
//   return NextResponse.json(result);
// };

const registerUser = async (req: Request) => {
  const userInsert = await req.json();
  let password = '';
  if (userInsert.password) {
    password = await hash(userInsert.password || '', 12);
  }
  const user = {
    email: userInsert.email,
    password,
    name: userInsert.name,
    registeredWith: userInsert.registeredWith
  } as UserData;
  const result: any = await controlUser.registerUser(user);
  return NextResponse.json(result);
};
