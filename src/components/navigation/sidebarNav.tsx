import Link from "next/link";
import React from "react";

interface PropsSide {
  items: Array<ItemsMenuNavigate>;
}

export default function SidebarNav(props: PropsSide) {
  return (
    <div className="flex-col w-64 bg-white overflow-hidden flex">
      <div className="flex items-center justify-center h-20 shadow-md">
        <h1 className="text-3xl uppercase text-indigo-500">Logo</h1>
      </div>
      <ul className="flex flex-col py-4">
        {props.items.map((item, index) => (
          <li key={index}>
            <Link href={item.link} className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                <i className={`bx ${item.icon}`}></i>
              </span>
              <span className="text-sm font-medium">{item.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
