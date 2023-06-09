import React from "react";
const listItems: Array<ItemsMenuNavigate> = [
  { id: 0, title: "Mis datos", icon: "bx-user-circle", link: "" },
  { id: 1, title: "Tengo un problema", icon: "bxl-whatsapp", link: "" }
];
export default function ItemList() {
  return (
    <>
      {listItems.map((item, index) => (
        <li key={index} className="border-b-[1px] py-[12px] px-4 cursor-pointer hover:bg-gray-100 transition-all">
          <div className="flex justify-between gap-4 items-center">
            <div className="flex gap-2 items-center">
              <i className={`bx ${item.icon} text-2xl`}></i>
              <p className="m-0 font-medium">{item.title}</p>
            </div>
            <i className={`bx bx-chevron-right text-2xl`}></i>
          </div>
        </li>
      ))}
    </>
  );
}
