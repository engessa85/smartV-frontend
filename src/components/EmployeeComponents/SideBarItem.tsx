

import React, { ReactNode } from "react";


interface PropeType {
    title:string
    icon:ReactNode
    isActive:boolean
    onClick: ()=> void

}


function SideBarItem(propes:PropeType) {
  return (
    <li onClick={propes.onClick}>
      <button
        className={` text-gray-900 text-sm flex gap-2 items-center cursor-pointer ${propes.isActive && `bg-gray-100`} hover:bg-gray-100 rounded-md px-3 py-3 transition-all duration-300 w-full`}
      >
        <span>{propes.icon}</span>
        <span>{propes.title}</span>
      </button>
    </li>
  );
}

export default SideBarItem;
