import React from "react";
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { CompanyFormData } from "@/services/CompanyServices";

interface CompanyCardProps {
  companyData: CompanyFormData;
}

function CompanyCard({ companyData }: CompanyCardProps) {
  return (
    <div className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] p-6 w-full max-w-sm rounded-lg overflow-hidden">
      <div>
        <h3 className="text-xl font-bold text-gray-800">
          {companyData.company_name}
        </h3>
      </div>
      <hr className="my-3 w-[80%]"></hr>
      <div className="">
        <Link
          href="https://www.exness.com/"
          className="mt-2 text-sm text-gray-800 hover:underline flex items-center justify-start gap-2"
        >
          <TbWorld size={20} />
          {companyData.company_website}
        </Link>
        <span className="flex items-center justify-start gap-2 mt-2">
          <MdEmail size={20} />
          <p className="text-sm text-gray-800 hover:underline">
            {companyData.company_email}
          </p>
        </span>
      </div>

      <hr className="my-4 w-[80%]"></hr>

      <div className="flex items-center">
        <p className="text-sm text-gray-800">
          Managed by: <span className="font-bold underline">{companyData.user} {companyData.user_first_name && `(${companyData.user_first_name})`}</span>
        </p>
      </div>
    </div>
  );
}

export default CompanyCard;
