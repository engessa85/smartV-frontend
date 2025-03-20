import React from "react";
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { AllCompanyAppointmentInterFace } from "@/services/CompanyServices";

interface AdminFollowUpCardProps {
  allAppointmetnData: AllCompanyAppointmentInterFace;
}

function AdminFollowUpCard({ allAppointmetnData }: AdminFollowUpCardProps) {
  return (
    <div className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] p-6 w-full  rounded-lg overflow-hidden relative">
      {allAppointmetnData.follow ? (
        <div className="absolute top-3 right-3 text-xs px-3 py-2 bg-green-300 rounded-lg">
          Followed
        </div>
      ) : (
        <div className="absolute top-3 right-3 text-xs px-3 py-2 bg-red-300 rounded-lg">
          Not Followed
        </div>
      )}
      <div>
        <h3 className="text-xl font-bold text-gray-800">
          {allAppointmetnData.company.company_name}
        </h3>
      </div>
      <hr className="my-3 w-[100%]"></hr>
      <div className="">
        <Link
          href="https://www.exness.com/"
          className="mt-2 text-sm text-gray-800 hover:underline flex items-center justify-start gap-2"
        >
          <TbWorld size={20} />
          {allAppointmetnData.company.company_website}
        </Link>
        <span className="flex items-center justify-start gap-2 mt-2">
          <MdEmail size={20} />
          <p className="text-sm text-gray-800 hover:underline">
            {allAppointmetnData.company.company_email}
          </p>
        </span>
      </div>

      <hr className="my-4 w-[100%]"></hr>

      <div className="flex flex-col gap-3">
        <p className="text-sm text-gray-800">
          Ticket Created at:{" "}
          <span className="font-semibold">
            {
              new Date(allAppointmetnData.created_at)
                .toISOString()
                .split("T")[0]
            }
          </span>
        </p>
        <p className="text-sm text-gray-800">
          Ticket Modified at:{" "}
          <span className="font-semibold">
            {
              new Date(allAppointmetnData.updated_at)
                .toISOString()
                .split("T")[0]
            }
          </span>
        </p>
      </div>

      {allAppointmetnData.follow && (
        <>
          <hr className="my-4 w-[100%]"></hr>

          <div className="flex flex-col gap-3">
            <p className="text-sm text-gray-800 bg-slate-100 px-4 py-2 rounded-xl w-fit">
              Follow Company at:{" "}
              <span className="font-semibold">{allAppointmetnData.date}</span>
            </p>
          </div>
        </>
      )}

      <hr className="my-4 w-[100%]"></hr>

      <div className="flex items-center">
        <p className="text-sm text-gray-800">
          Managed by:{" "}
          <span className="font-bold underline">
            {allAppointmetnData.user}{" "}
            {allAppointmetnData.user_first_name &&
              `(${allAppointmetnData.user_first_name})`}
          </span>
        </p>
      </div>
    </div>
  );
}

export default AdminFollowUpCard;
