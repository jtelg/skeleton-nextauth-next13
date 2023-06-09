import React from "react";
import SidebarNav from "./sidebarNav";

const navigateItems: Array<ItemsMenuNavigate> = [
  { title: "Inicio", icon: "bx-home", id: 1, link: "/" },
  { title: "Creditos", icon: "bx-credit-card-front", id: 2, link: "/" },
  { title: "Perfil", icon: "bx-user", id: 3, link: "/profile" },
];

export default function Navigation(props: { children: any }) {
  const sectionSession = !!(props.children?.props?.childProp.segment === 'session');
  return (
    <div>
      <div className="min-h-screen flex">
        {!sectionSession && (
          <div className="hidden lg:flex shadow-md shadow-slate-700 border-r-[1px] border-slate-200">
            <SidebarNav items={navigateItems} />
          </div>
        )}
        <div className="bg-gray-50 w-full">{props.children}</div>
      </div>
    </div>
  );
}
