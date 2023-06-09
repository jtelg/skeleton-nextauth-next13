import RegisterForm from "@/components/user/login/register/registerForm";
import Link from "next/link";
import React from "react";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 relative w-full">
      <Link href="/" className="absolute top-4 left-4 font-bold text-gray-800">
        BACK
      </Link>
      <div
        className="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8
               lg:px-10 py-8 rounded-3xl w-50 max-w-md"
      >
        <div className="mt-10">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}
