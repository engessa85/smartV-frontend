'use client'
import React, {useState, useEffect} from "react";
import { useRouter } from "next/navigation";
import SideBar from "@/components/EmployeeComponents/SideBar";
import Header from "@/components/EmployeeComponents/Header";
import CompaniesLayout from "@/components/EmployeeComponents/CompaniesLayout";
import HomeLayout from "@/components/EmployeeComponents/HomeLayout";
import AddCompanyLayout from "@/components/EmployeeComponents/AddCompanyLayout";
import UserCompaniesLayout from "@/components/EmployeeComponents/UserCompaniesLayout";
import ModifyCompaniesLayout from "@/components/EmployeeComponents/ModifyCompaniesLayout";
function Page() {
  const [isActive, setIsActive] = useState<string>("home")
  const [search, setSearch] = useState<string>("")
  const route = useRouter()

  
  useEffect(() => {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        route.push("/");
      }
    }, [route]);

  return (
    <div className="relative bg-[#f7f6f9] h-full min-h-screen font-[sans-serif]">
      <div className="flex items-start">
        <SideBar isActive={isActive} setIsActive={setIsActive}  />

        <section className="main-content w-full px-8">
          <Header isActive={isActive} setSearch = {setSearch} />
          {isActive === "home" && <HomeLayout />}
          {isActive === "search-companies" && <CompaniesLayout search={search} />}
          {isActive === "follow-companies" && <UserCompaniesLayout />}
          {isActive === "modify-company" && <ModifyCompaniesLayout />}
          {isActive === "add-company" && <AddCompanyLayout setIsActive={setIsActive} />}
          
          
        </section>
      </div>
    </div>
  );
}

export default Page;
