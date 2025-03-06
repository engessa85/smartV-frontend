'use client'
import React, {useState, useEffect} from "react";
import { useRouter } from "next/navigation";
import SideBar from "@/components/EmployeeComponents/SideBar";
import Header from "@/components/EmployeeComponents/Header";
import CompaniesLayout from "@/components/EmployeeComponents/CompaniesLayout";
import HomeLayout from "@/components/EmployeeComponents/HomeLayout";
import AddCompanyLayout from "@/components/EmployeeComponents/AddCompanyLayout";

function Page() {
  const [isActive, setIsActive] = useState<string>("home")
  const [search, setSearch] = useState<string>("")
  const route = useRouter()

  
  useEffect(() => {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        route.push("/");
      }
    }, []);

  return (
    <div className="relative bg-[#f7f6f9] h-full min-h-screen font-[sans-serif]">
      <div className="flex items-start">
        <SideBar isActive={isActive} setIsActive={setIsActive}  />

        <section className="main-content w-full px-8">
          <Header isActive={isActive} setSearch = {setSearch} />
          {isActive === "home" && <HomeLayout />}
          {isActive === "companies" && <CompaniesLayout search={search} />}
          {isActive === "add-company" && <AddCompanyLayout setIsActive={setIsActive} />}
        </section>
      </div>
    </div>
  );
}

export default Page;
