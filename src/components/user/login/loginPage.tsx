import React from "react";
import SignForm from "./signForm";
import ButtonGoRegister from "./register/buttonGoRegister";
import { ButtonFacebook, ButtonGoogle } from "./loginButtons";
export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12 w-full">
      <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
        <h1 className="font-bold text-center text-2xl mb-5">Tu Logo</h1>
        <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
          <SignForm />
          <div className="p-5">
            <div className="grid grid-cols-2 gap-1">
              <ButtonGoogle />
              <ButtonFacebook />
            </div>
          </div>
          <ButtonGoRegister />
        </div>
      </div>
    </div>
  );
}
