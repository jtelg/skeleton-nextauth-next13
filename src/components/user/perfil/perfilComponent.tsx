import React from "react";
import ItemsUser from "./itemUser";
import ItemList from "./itemList";
import { ButtonSignOut } from "../login/loginButtons";
export interface propsPerfil {
  user: UserData;
}
export default function PerfilComponent(props: propsPerfil) {
  return (
    <>
      <div className="mx-auto w-full flex items-center flex-col pt-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold leading-none ">Informacion</h3>
          {/* <a
              href="#"
              className="text-sm font-medium text-blue-600 hover:underline "
            >
              View all
            </a> */}
        </div>
        <div className="max-w-md w-full bg-white rounded-lg border shadow-md">
          <div className="flow-root">
            <ul role="list" className="border-gray-200 flex flex-col">
              <ItemsUser user={props.user} />
              <ItemList />
              <ButtonSignOut />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
