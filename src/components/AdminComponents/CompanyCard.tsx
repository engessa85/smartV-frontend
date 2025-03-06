import React from "react";
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { PiPhoneCallFill } from "react-icons/pi";
import { TbWorld } from "react-icons/tb";
import { FaCheckCircle } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { CompanyFormData } from "@/services/CompanyServices";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoPersonCircle } from "react-icons/io5";

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
      <hr className="my-3 w-[100%]"></hr>
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
        <span className="flex items-center justify-start gap-2 mt-2">
          <FaLinkedin size={20} />
          <p className="text-sm text-gray-800 hover:underline">
            {companyData.company_linkedin}
          </p>
        </span>

        <span className="flex items-center justify-start gap-2 mt-2">
          <FaSquareFacebook size={20} />
          <p className="text-sm text-gray-800 hover:underline">
            {companyData.company_facebook}
          </p>
        </span>

        <span className="flex items-center justify-start gap-2 mt-2">
          <FaSquareXTwitter size={20} />
          <p className="text-sm text-gray-800 hover:underline">
            {companyData.company_twitter}
          </p>
        </span>
      </div>

      <hr className="my-4 w-[100%]"></hr>

      <div className="">
        <span className="flex items-center justify-start gap-2 mt-2">
          <IoPersonCircle size={20} />
          <p className="text-sm text-gray-800 hover:underline">
            {companyData.person_name}
          </p>
        </span>
        <span className="flex items-center justify-start gap-2 mt-2">
          <MdEmail size={20} />
          <p className="text-sm text-gray-800 hover:underline">
            {companyData.person_email}
          </p>
        </span>
        <span className="flex items-center justify-start gap-2 mt-2">
          <FaLinkedin size={20} />
          <p className="text-sm text-gray-800 hover:underline">
            {companyData.person_linked}
          </p>
        </span>
        <span className="flex items-center justify-start gap-2 mt-2">
          <PiPhoneCallFill size={20} />
          <p className="text-sm text-gray-800 hover:underline">
            {companyData.person_contact}
          </p>
        </span>
      </div>

      <hr className="my-4 w-[100%]"></hr>

      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-col items-center gap-1">
          <p className="text-sm text-gray-800">Negotiation</p>
          {companyData.negotiate ? (
            <FaCheckCircle size={14} className="text-green-500" />
          ) : (
            <ImCross size={14} className="text-red-500" />
          )}
        </div>

        <div className="flex flex-col items-center gap-1">
          <p className="text-sm text-gray-800">Contract</p>
          {companyData.contract ? (
            <FaCheckCircle size={14} className="text-green-500" />
          ) : (
            <ImCross size={14} className="text-red-500" />
          )}
        </div>

        <div className="flex flex-col items-center gap-1">
          <p className="text-sm text-gray-800">First payment</p>
          {companyData.first_payment ? (
            <FaCheckCircle size={14} className="text-green-500" />
          ) : (
            <ImCross size={14} className="text-red-500" />
          )}
        </div>
        <div className="flex flex-col items-center gap-1">
          <p className="text-sm text-gray-800">Final payment</p>
          {companyData.final_payment ? (
            <FaCheckCircle size={14} className="text-green-500" />
          ) : (
            <ImCross size={14} className="text-red-500" />
          )}
        </div>
      </div>

      <hr className="my-4 w-[100%]"></hr>

      <div className="flex flex-row items-center gap-2 flex-wrap">
        {companyData.egypt && (
          <div className="px-3 py-2 rounded-lg bg-slate-100 text-xs">Egypt</div>
        )}
        {companyData.kuwait && (
          <div className="px-3 py-2 rounded-lg bg-slate-100 text-xs">
            Kuwait
          </div>
        )}
        {companyData.uae && (
          <div className="px-3 py-2 rounded-lg bg-slate-100 text-xs">UAE</div>
        )}
        {companyData.qatar && (
          <div className="px-3 py-2 rounded-lg bg-slate-100 text-xs">Qatar</div>
        )}
        {companyData.saudi_arabia && (
          <div className="px-3 py-2 rounded-lg bg-slate-100 text-xs">
            Saudi Arabia
          </div>
        )}
        {companyData.oman && (
          <div className="px-3 py-2 rounded-lg bg-slate-100 text-xs">Oman</div>
        )}
        {companyData.bahrain && (
          <div className="px-3 py-2 rounded-lg bg-slate-100 text-xs">
            Bahrain
          </div>
        )}
        {companyData.south_africa && (
          <div className="px-3 py-2 rounded-lg bg-slate-100 text-xs">
            South Africa
          </div>
        )}
      </div>

      <hr className="my-4 w-[100%]"></hr>

      <div className="flex flex-col gap-3">
        <p className="text-sm text-gray-800">
          Created date:{" "}
          <span className="font-semibold">
            {new Date(companyData.created_at!).toISOString().split("T")[0]}
          </span>
        </p>
        <p className="text-sm text-gray-800">
          Modified date:{" "}
          <span className="font-semibold">
            {new Date(companyData.updated_at!).toISOString().split("T")[0]}
          </span>
        </p>
      </div>

      <hr className="my-4 w-[100%]"></hr>

      <div className="flex items-center">
        <p className="text-sm text-gray-800">
          Managed by:{" "}
          <span className="font-bold underline">{companyData.user}</span>
        </p>
      </div>
    </div>
  );
}

export default CompanyCard;
