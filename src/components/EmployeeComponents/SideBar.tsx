'use client'
import React from "react";
import SideBarItem from "./SideBarItem";
import { FaHome } from "react-icons/fa";
import { FaNetworkWired } from "react-icons/fa6";
import { IoGitNetwork } from "react-icons/io5";
import Image from "next/image";




interface PropeType {
    isActive:string
    setIsActive:(page:string)=>void
}

function SideBar(props:PropeType) {
   
  return (
    <nav id="sidebar" className="lg:min-w-[250px] w-max max-lg:min-w-8">
      <div
        id="sidebar-collapse-menu"
        className=" bg-white shadow-lg h-screen fixed top-0 left-0 overflow-auto z-[99] lg:min-w-[250px] lg:w-max max-lg:w-0 max-lg:invisible transition-all duration-500"
      >
        <div className="pt-8 pb-2 px-6 sticky top-0 bg-white min-h-[80px] z-[100]">
          <a href="javascript:void(0)" className="outline-none">
            <Image src="/logo.png" alt="logo" width={150} height={150} />
          </a>
        </div>

        <div className="py-6 px-6">
          <ul className="space-y-2">
            <SideBarItem onClick={()=>props.setIsActive("home")} title="Home" isActive = {props.isActive === 'home'} icon={<FaHome size={20} />} />
            <SideBarItem onClick={()=>props.setIsActive("companies")} title="Companies" isActive = {props.isActive === 'companies'} icon={<FaNetworkWired size={20} />} />
            <SideBarItem onClick={()=>props.setIsActive("add-company")} title="Add Company" isActive = {props.isActive === 'add-company'} icon={<IoGitNetwork size={20} />} />
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default SideBar;
