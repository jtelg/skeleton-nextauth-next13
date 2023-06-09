import React from "react";
import { propsPerfil } from "./perfilComponent";
import Image from "next/image";

export default function ItemsUser(props: propsPerfil) {
  return (
    <li className="py-3 sm:py-4 border-b-[1px] px-4">
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          <Image
            src={props.user?.image}
            alt="UserImage"
            className="w-12 h-12 rounded-full"
            width={25}
            height={25}
          />
          {/* <img
            className="w-12 h-12 rounded-full"
       
            alt="Neil image"
          /> */}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 truncate ">
            {props.user?.name}
          </p>
          <p className="text-sm text-gray-500 truncate ">
            <span className="capitalize">{props.user?.provider}</span> |{" "}
            {props.user?.email}
          </p>
        </div>
      </div>
    </li>
  );
}
