"use client"
import React from "react";
import { signIn } from "next-auth/react";

export default function SignForm() {
  const signInCredentials = () => {
    const email = document.getElementById("email") as HTMLInputElement;
    const password = document.getElementById("password") as HTMLInputElement;
    signIn("credentials", {
      redirect: true,
      callbackUrl: `/`,
      email: email.value,
      password: password.value,
    });
  };
  return (
    <form
      className="px-5 py-7"
      method="post"
      onSubmit={() => signInCredentials()}
    >
      <label className="font-semibold text-sm text-gray-600 pb-1 block">
        E-mail <abbr title="email">*</abbr>
      </label>
      <input
        required
        type="text"
        name="email"
        id="email"
        className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full text-gray-600"
      />
      <label className="font-semibold text-sm text-gray-600 pb-1 block">
        Password <abbr title="password">*</abbr>
      </label>
      <input
        required
        type="password"
        name="password"
        id="password"
        className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full text-gray-600"
      />

      <button
        type="submit"
        className="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
      >
        <span className="inline-block mr-2">Login</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-4 h-4 inline-block"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </button>
    </form>
  );
}
