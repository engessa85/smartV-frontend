import React, {useState } from "react";
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { CompanyAppointment } from "@/services/CompanyServices";
import AppointmentModal from "./AppointmentModal";

interface CompanyCardProps {
  companyData: CompanyAppointment;
  refresh:()=>void
}

function UserCompanyCard({ companyData, refresh }: CompanyCardProps) {
  const [openModal, setOpenModal] = useState<Boolean>(false);

  return (
    <div className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] p-6 w-full max-w-sm rounded-lg overflow-hidden relative">
      {companyData.follow ? (
        <div className="absolute top-2 right-2  bg-green-400 px-2 py-1 rounded-lg">
          <p className="text-xs">Followed</p>
        </div>
      ) : (
        <div className="absolute top-2 right-2  bg-red-400 px-2 py-1 rounded-lg">
          <p className="text-xs">Not Followed</p>
        </div>
      )}
      <div>
        <h3 className="text-xl font-bold text-gray-800 mt-6">
          {companyData.company.company_name}
        </h3>
      </div>
      <hr className="my-3 w-[80%]"></hr>
      <div className="">
        <Link
          href="https://www.exness.com/"
          className="mt-2 text-sm text-gray-800 hover:underline flex items-center justify-start gap-2"
        >
          <TbWorld size={20} />
          {companyData.company.company_website}
        </Link>
        <span className="flex items-center justify-start gap-2 mt-2">
          <MdEmail size={20} />
          <p className="text-sm text-gray-800 hover:underline">
            {companyData.company.company_email}
          </p>
        </span>
      </div>

      <hr className="my-4 w-[80%]"></hr>

      <div className="flex items-center">
        <p className="text-sm text-gray-800">
          Managed by:{" "}
          <span className="font-bold underline">{companyData.user}</span>
        </p>
      </div>
      {companyData.follow ? (
        <div className="mt-5 flex items-center justify-center w-full">
          <button
            onClick={() => setOpenModal((prev) => !prev)}
            className="bg-slate-200 px-2 py-1 rounded-lg text-sm hover:opacity-55"
          >
            Update
          </button>
        </div>
      ) : (
        <div className="mt-5 flex items-center justify-center w-full">
          <button
            onClick={() => setOpenModal((prev) => !prev)}
            className="bg-slate-200 px-2 py-1 rounded-lg text-sm hover:opacity-55"
          >
            Follow Up
          </button>
        </div>
      )}

      {openModal && (
        <AppointmentModal
          companyName={companyData.company.company_name}
          id={companyData.id}
          follow = {companyData.follow}
          note = {companyData.note ?? ""}
          date = {companyData.date}
          onClose={() => setOpenModal((prev) => !prev)}
          refresh = {refresh}
        />
      )}
    </div>
  );
}

export default UserCompanyCard;
