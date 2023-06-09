"use client";

import { signIn, signOut } from "next-auth/react";

import React, { Component } from "react";

export class ButtonGoogle extends Component {
  render() {
    return (
      <button
        onClick={() =>
          signIn("google", {
            redirect: true,
            callbackUrl: `/`,
          })
        }
        type="button"
        className="transition duration-200 border border-gray-200 text-gray-500 w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-normal text-center inline-block"
      >
        Google
      </button>
    );
  }
}


export class ButtonFacebook extends Component {
  render() {
    return (
      <button
        onClick={() =>
          signIn("facebook", {
            redirect: true,
            callbackUrl: `/`,
          })
        }
        type="button"
        className="transition duration-200 border border-gray-200 text-gray-500 w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-normal text-center inline-block"
      >
        Facebook
      </button>
    );
  }
}

export class ButtonSignOut extends Component {
  signOutSession() {
    signOut();
  }
  render() {
    return (
      <li
        onClick={() => this.signOutSession()}
        className="border-b-[1px] py-[12px] px-4 cursor-pointer hover:bg-gray-100 transition-all"
      >
        <div className="flex justify-between gap-4 items-center">
          <div className="flex gap-2 items-center">
            <i className={`bx bx-log-out text-2xl`}></i>
            <p className="m-0 font-medium">Cerrar sesión</p>
          </div>
          <i className={`bx bx-chevron-right text-2xl`}></i>
        </div>
      </li>
    );
  }
}
