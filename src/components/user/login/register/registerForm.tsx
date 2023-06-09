"use client";
import React from "react";
import MethodService from "@/services/method";
import { signIn } from "next-auth/react";

export default function RegisterForm() {
  const servmethod = new MethodService();
  const registerUser = () => {
    (document.getElementById("buttonRegister") as HTMLButtonElement).disabled =
      true;
    const email = document.getElementById("email") as HTMLInputElement;
    const name = document.getElementById("name") as HTMLInputElement;
    const password = document.getElementById("password") as HTMLInputElement;
    const formData = {
      email: email.value,
      name: name.value,
      password: password.value,
      registeredWith: "email",
    };
    const url = `/user/session?path=register`;
    servmethod.postData(url, formData).then((data) => {
      if (data.insertId) {
        const credentials = {
          redirect: true,
          callbackUrl: `/`,
          email: email.value,
          password: password.value,
        };
        signIn("credentials", credentials);
      }
    });
  };
  return (
    <form method="post" onSubmit={() => registerUser()}>
      <div className="flex flex-col mb-5">
        <label
          htmlFor="email"
          className="mb-1 text-xs tracking-wide text-gray-600"
        >
          Nombre:
        </label>
        <div className="relative">
          <div
            className="
          inline-flex
          items-center
          justify-center
          absolute
          left-0
          top-0
          h-full
          w-10
          text-gray-400
      "
          >
            <i className="fas fa-user text-blue-500"></i>
          </div>

          <input
            required
            id="name"
            type="text"
            name="name"
            className="
            text-gray-800
          text-sm
          placeholder-gray-500
          pl-10
          pr-4
          rounded-2xl
          border border-gray-400
          w-full
          py-2
          focus:outline-none focus:border-blue-400
      "
            placeholder="Ingresa tu nombre"
          />
        </div>
      </div>
      <div className="flex flex-col mb-5">
        <label
          htmlFor="email"
          className="mb-1 text-xs tracking-wide text-gray-600"
        >
          E-Mail:
        </label>
        <div className="relative">
          <div
            className="
          inline-flex
          items-center
          justify-center
          absolute
          left-0
          top-0
          h-full
          w-10
          text-gray-400
      "
          >
            <i className="fas fa-at text-blue-500"></i>
          </div>

          <input
            required
            id="email"
            type="email"
            name="email"
            className="
            text-gray-800
          text-sm
          placeholder-gray-500
          pl-10
          pr-4
          rounded-2xl
          border border-gray-400
          w-full
          py-2
          focus:outline-none focus:border-blue-400
      "
            placeholder="Ingresa tu email"
          />
        </div>
      </div>
      <div className="flex flex-col mb-6">
        <label
          htmlFor="password"
          className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
        >
          Password:
        </label>
        <div className="relative">
          <div
            className="
          inline-flex
          items-center
          justify-center
          absolute
          left-0
          top-0
          h-full
          w-10
          text-gray-400
      "
          >
            <span>
              <i className="fas fa-lock text-blue-500"></i>
            </span>
          </div>

          <input
            required
            id="password"
            type="password"
            name="password"
            className="
            text-gray-800
          text-sm
          placeholder-gray-500
          pl-10
          pr-4
          rounded-2xl
          border border-gray-400
          w-full
          py-2
          focus:outline-none focus:border-blue-400
      "
            placeholder="Enter your password"
          />
        </div>
      </div>

      <div className="flex w-full">
        <button
          type="submit"
          id="buttonRegister"
          className="
        cursor-pointer
                flex
                mt-2
                items-center
                justify-center
                focus:outline-none
                text-white text-sm
                sm:text-base
                bg-blue-500
                hover:bg-blue-600
                rounded-2xl
                py-2
                w-full
                transition
                duration-150
                ease-in
                uppercase
                "
        >
          Registrarse
        </button>
      </div>
    </form>
  );
}
