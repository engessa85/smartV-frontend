import React, { useState } from "react";

import "react-datepicker/dist/react-datepicker.css";
import { ToastContainer, toast } from "react-toastify";
import { updateUserCompanies } from "@/services/CompanyServices";
import { CompanyFormData } from "@/services/CompanyServices";

interface PropeType {
  companyData: CompanyFormData;
  onClose: () => void;
  refresh:()=>void
}

function ModifyCompanyModal(prope: PropeType) {
  const [company_name, setCompanyName] = useState<string>(
    prope.companyData.company_name
  );
  const [company_website, setCompanyWebsite] = useState<string>(
    prope.companyData.company_website
  );
  const [company_email, setCompanyEmail] = useState<string>(
    prope.companyData.company_email
  );
  const [company_linkedin, setCompanyLinkedIn] = useState<string>(
    prope.companyData.company_linkedin
  );
  const [company_facebook, setCompanyFaceBook] = useState<string>(
    prope.companyData.company_facebook
  );
  const [company_twitter, setCompanyTwitter] = useState<string>(
    prope.companyData.company_twitter
  );

  // contact person
  const [person_name, setPersonName] = useState<string>(
    prope.companyData.person_name
  );
  const [person_linked, setPersonLinkedIn] = useState<string>(
    prope.companyData.company_linkedin
  );
  const [person_email, setPersonEmail] = useState<string>(
    prope.companyData.person_email
  );
  const [person_contact, setPersonContact] = useState<string>(
    prope.companyData.person_contact
  );

  // payment
  const [negotiate, setNegotiate] = useState<boolean>(
    prope.companyData.negotiate
  );
  const [contract, setContract] = useState<boolean>(prope.companyData.contract);
  const [first_payment, setFirstPayment] = useState<boolean>(
    prope.companyData.first_payment
  );
  const [final_payment, setFinalPayment] = useState<boolean>(
    prope.companyData.final_payment
  );

  // Individual country states
  const [kuwait, setKuwait] = useState<boolean>(prope.companyData.kuwait);
  const [uae, setUae] = useState<boolean>(prope.companyData.uae);
  const [qatar, setQatar] = useState<boolean>(prope.companyData.qatar);
  const [saudi_arabia, setSaudiArabia] = useState<boolean>(
    prope.companyData.saudi_arabia
  );
  const [oman, setOman] = useState<boolean>(prope.companyData.oman);
  const [bahrain, setBahrain] = useState<boolean>(prope.companyData.bahrain);
  const [south_africa, setSouthAfrica] = useState<boolean>(
    prope.companyData.south_africa
  );
  const [egypt, setEgypt] = useState<boolean>(prope.companyData.egypt);

  const [loading, setLoading] = useState<boolean>(false);

  const HandelUpdate = async () => {
    const updatedCompanyData: CompanyFormData = {
      company_name,
      company_website,
      company_email,
      company_linkedin,
      company_facebook,
      company_twitter,
      person_name,
      person_linked,
      person_email,
      person_contact,
      negotiate,
      contract,
      first_payment,
      final_payment,
      kuwait,
      uae,
      qatar,
      saudi_arabia,
      oman,
      bahrain,
      south_africa,
      egypt,
    };

    setLoading(true);
    const token = localStorage.getItem("accessToken");

    try {
      const res = await updateUserCompanies(
        token ?? "",
        prope.companyData.id!,
        updatedCompanyData
      );

      if (res) {
        toast.success("Company updated successfully", { autoClose: 1000 });
        prope.refresh()
        setTimeout(() => prope.onClose(), 2000);
      }
    } catch {
      toast.error("Failed to add update the company", { autoClose: 1000 });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
      <ToastContainer />
      <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg p-6 relative">
        <svg
          onClick={prope.onClose}
          xmlns="http://www.w3.org/2000/svg"
          className="w-3.5 cursor-pointer shrink-0 fill-gray-400 hover:fill-red-500 float-right"
          viewBox="0 0 320.591 320.591"
        >
          <path
            d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
            data-original="#000000"
          ></path>
          <path
            d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
            data-original="#000000"
          ></path>
        </svg>

        <form>
          <div className="mb-6">
            <h1 className="text-2xl text-gray-900">
              {prope.companyData.company_name}
            </h1>
            <hr className="mt-3" />
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="text-gray-600 text-sm mb-2 block">
                Company Name
              </label>
              <input
                type="text"
                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-gray-200 transition-all"
                placeholder="Enter Company name"
                value={company_name}
                onChange={(e) => setCompanyName(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="text-gray-600 text-sm mb-2 block">
                Company Website
              </label>
              <input
                type="text"
                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-gray-200 transition-all"
                placeholder="Enter company Website"
                value={company_website}
                onChange={(e) => setCompanyWebsite(e.target.value)}
              />
            </div>
            <div>
              <label className="text-gray-600 text-sm mb-2 block">
                Company Email
              </label>
              <input
                type="email"
                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-gray-200 transition-all"
                placeholder="Enter Company Email"
                value={company_email}
                onChange={(e) => setCompanyEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="text-gray-600 text-sm mb-2 block">
                Company LinkedIn
              </label>
              <input
                type="text"
                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-gray-200 transition-all"
                placeholder="Enter Company Email"
                value={company_linkedin}
                onChange={(e) => setCompanyLinkedIn(e.target.value)}
              />
            </div>

            <div>
              <label className="text-gray-600 text-sm mb-2 block">
                Company Facebook
              </label>
              <input
                type="text"
                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-gray-200 transition-all"
                placeholder="Enter Company Email"
                value={company_facebook}
                onChange={(e) => setCompanyFaceBook(e.target.value)}
              />
            </div>

            <div>
              <label className="text-gray-600 text-sm mb-2 block">
                Company Twitter
              </label>
              <input
                type="text"
                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-gray-200 transition-all"
                placeholder="Enter Company Email"
                value={company_twitter}
                onChange={(e) => setCompanyTwitter(e.target.value)}
              />
            </div>
          </div>

          <hr className="my-6" />

          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="text-gray-600 text-sm mb-2 block">
                Contact Person Name
              </label>
              <input
                type="text"
                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-gray-200 transition-all"
                placeholder="Contact Person Name"
                value={person_name}
                onChange={(e) => setPersonName(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="text-gray-600 text-sm mb-2 block">
                Contact Person LinkedIn
              </label>
              <input
                type="text"
                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-gray-200 transition-all"
                placeholder="Contact Person LinkedIn"
                value={person_linked}
                onChange={(e) => setPersonLinkedIn(e.target.value)}
              />
            </div>
            <div>
              <label className="text-gray-600 text-sm mb-2 block">
                Contact Person Email
              </label>
              <input
                type="email"
                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-gray-200 transition-all"
                placeholder="Contact Person Email"
                value={person_email}
                onChange={(e) => setPersonEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="text-gray-600 text-sm mb-2 block">
                Contact No.
              </label>
              <input
                type="number"
                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-gray-200 transition-all"
                placeholder="Enter Contact Number"
                value={person_contact}
                onChange={(e) => setPersonContact(e.target.value)}
                required
              />
            </div>
          </div>

          <hr className="my-6" />

          {/* Payment Section */}
          <div className="mt-6">
            <h2 className="text-gray-600 text-sm mb-4 block underline">
              Payment Status
            </h2>
            <div className="flex items-center gap-4 mt-2">
              <label className="flex items-center gap-2 text-gray-600 text-sm mb-2">
                <input
                  type="checkbox"
                  checked={negotiate}
                  onChange={(e) => setNegotiate(e.target.checked)}
                  className="w-4 h-4"
                />
                Negotiation
              </label>
              <label className="flex items-center gap-2 text-gray-600 text-sm mb-2">
                <input
                  type="checkbox"
                  checked={contract}
                  onChange={(e) => setContract(e.target.checked)}
                  className="w-4 h-4"
                />
                Contract
              </label>
              <label className="flex items-center gap-2 text-gray-600 text-sm mb-2">
                <input
                  type="checkbox"
                  checked={first_payment}
                  onChange={(e) => setFirstPayment(e.target.checked)}
                  className="w-4 h-4"
                />
                First Payment
              </label>
              <label className="flex items-center gap-2 text-gray-600 text-sm mb-2">
                <input
                  type="checkbox"
                  checked={final_payment}
                  onChange={(e) => setFinalPayment(e.target.checked)}
                  className="w-4 h-4"
                />
                Final Payment
              </label>
            </div>
          </div>

          <hr className="my-6" />

          {/* Interested Countries Section */}
          <div className="mt-6">
            <h1 className="text-gray-600 text-sm mb-2 block underline">
              Interested Countries
            </h1>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
              <label className="flex items-center gap-2 text-gray-600 text-sm mb-2">
                <input
                  type="checkbox"
                  checked={kuwait}
                  onChange={(e) => setKuwait(e.target.checked)}
                  className="w-4 h-4"
                />
                KUWAIT
              </label>
              <label className="flex items-center gap-2 text-gray-600 text-sm mb-2">
                <input
                  type="checkbox"
                  checked={uae}
                  onChange={(e) => setUae(e.target.checked)}
                  className="w-4 h-4"
                />
                UAE
              </label>
              <label className="flex items-center gap-2 text-gray-600 text-sm mb-2">
                <input
                  type="checkbox"
                  checked={qatar}
                  onChange={(e) => setQatar(e.target.checked)}
                  className="w-4 h-4"
                />
                QATAR
              </label>
              <label className="flex items-center gap-2 text-gray-600 text-sm mb-2">
                <input
                  type="checkbox"
                  checked={saudi_arabia}
                  onChange={(e) => setSaudiArabia(e.target.checked)}
                  className="w-4 h-4"
                />
                SAUDI ARABIA
              </label>
              <label className="flex items-center gap-2 text-gray-600 text-sm mb-2">
                <input
                  type="checkbox"
                  checked={oman}
                  onChange={(e) => setOman(e.target.checked)}
                  className="w-4 h-4"
                />
                OMAN
              </label>
              <label className="flex items-center gap-2 text-gray-600 text-sm mb-2">
                <input
                  type="checkbox"
                  checked={bahrain}
                  onChange={(e) => setBahrain(e.target.checked)}
                  className="w-4 h-4"
                />
                BAHRAIN
              </label>
              <label className="flex items-center gap-2 text-gray-600 text-sm mb-2">
                <input
                  type="checkbox"
                  checked={south_africa}
                  onChange={(e) => setSouthAfrica(e.target.checked)}
                  className="w-4 h-4"
                />
                SOUTH AFRICA
              </label>
              <label className="flex items-center gap-2 text-gray-600 text-sm mb-2">
                <input
                  type="checkbox"
                  checked={egypt}
                  onChange={(e) => setEgypt(e.target.checked)}
                  className="w-4 h-4"
                />
                EGYPT
              </label>
            </div>
          </div>
        </form>

        <hr className="mt-4 mb-4"></hr>

        <div className="flex flex-row gap-3 items-center justify-end mt-8">
          <button
            onClick={prope.onClose}
            type="button"
            className="px-4 py-2 rounded-lg text-gray-800 text-sm bg-gray-200 hover:bg-gray-300 active:bg-gray-200"
          >
            Cancel
          </button>
          <button
            onClick={HandelUpdate}
            type="button"
            className="px-4 py-2 rounded-lg text-white text-sm bg-red-600 hover:bg-red-700 active:bg-red-600"
          >
            {loading ? "Updating..." : "Update"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModifyCompanyModal;
