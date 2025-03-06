import React, { useState } from "react";
import { AddCompany } from "@/services/CompanyServices";
import { ToastContainer, toast } from "react-toastify";
import { BeatLoader } from "react-spinners";


function AddCompanyLayout({ setIsActive }: { setIsActive: React.Dispatch<React.SetStateAction<string>> }) {
  const [company_name, setCompanyName] = useState<string>("");
  const [company_website, setCompanyWebsite] = useState<string>("");
  const [company_email, setCompanyEmail] = useState<string>("");
  const [company_linkedin, setCompanyLinkedIn] = useState<string>("");
  const [company_facebook, setCompanyFaceBook] = useState<string>("");
  const [company_twitter, setCompanyTwitter] = useState<string>("");

  // contact person
  const [person_name, setPersonName] = useState<string>("");
  const [person_linked, setPersonLinkedIn] = useState<string>("");
  const [person_email, setPersonEmail] = useState<string>("");
  const [person_contact, setPersonContact] = useState<string>("");

  // payment
  const [negotiate, setNegotiate] = useState<boolean>(false);
  const [contract, setContract] = useState<boolean>(false);
  const [first_payment, setFirstPayment] = useState<boolean>(false);
  const [final_payment, setFinalPayment] = useState<boolean>(false);

  // Individual country states
  const [kuwait, setKuwait] = useState<boolean>(false);
  const [uae, setUae] = useState<boolean>(false);
  const [qatar, setQatar] = useState<boolean>(false);
  const [saudi_arabia, setSaudiArabia] = useState<boolean>(false);
  const [oman, setOman] = useState<boolean>(false);
  const [bahrain, setBahrain] = useState<boolean>(false);
  const [south_africa, setSouthAfrica] = useState<boolean>(false);
  const [egypt, setEgypt] = useState<boolean>(false);

  const [loading, setLoading] = useState<boolean>(false);
  

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = {
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

    console.log("Form Submitted:", formData);
    const accessToken = localStorage.getItem("accessToken");

    try {
      const res = await AddCompany(formData, accessToken);
      if (res) {
        toast.success("Company is added ...", {autoClose:2000});
        setTimeout(() => setIsActive("companies"), 2000);
      } else {
        toast.error("Company is not added ...");
      }
    } catch (error) {
      toast.error("Error! Company is existed", {autoClose:2000});
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl max-sm:max-w-lg mx-auto p-6 bg-white rounded-lg mt-5 h-[80vh] overflow-y-auto">
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <h1 className="text-2xl text-gray-900">Adding Company</h1>
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
              required
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
              required
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
              required
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
              required
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
              required
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
              required
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
              required
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
                className="w-4 h-4"
                checked={negotiate}
                onChange={() => setNegotiate(!negotiate)}
              />
              Negotiation
            </label>
          <label className="flex items-center gap-2 text-gray-600 text-sm mb-2">
              <input
                type="checkbox"
                className="w-4 h-4"
                checked={contract}
                onChange={() => setContract(!contract)}
              />
              Contract
            </label>
            <label className="flex items-center gap-2 text-gray-600 text-sm mb-2">
              <input
                type="checkbox"
                className="w-4 h-4"
                checked={first_payment}
                onChange={() => setFirstPayment(!first_payment)}
              />
              First Payment
            </label>
            <label className="flex items-center gap-2 text-gray-600 text-sm mb-2">
              <input
                type="checkbox"
                className="w-4 h-4"
                checked={final_payment}
                onChange={() => setFinalPayment(!final_payment)}
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
                className="w-4 h-4"
                checked={kuwait}
                onChange={() => setKuwait(!kuwait)}
              />
              KUWAIT
            </label>
            <label className="flex items-center gap-2 text-gray-600 text-sm mb-2">
              <input
                type="checkbox"
                className="w-4 h-4"
                checked={uae}
                onChange={() => setUae(!uae)}
              />
              UAE
            </label>
            <label className="flex items-center gap-2 text-gray-600 text-sm mb-2">
              <input
                type="checkbox"
                className="w-4 h-4"
                checked={qatar}
                onChange={() => setQatar(!qatar)}
              />
              QATAR
            </label>
            <label className="flex items-center gap-2 text-gray-600 text-sm mb-2">
              <input
                type="checkbox"
                className="w-4 h-4"
                checked={saudi_arabia}
                onChange={() => setSaudiArabia(!saudi_arabia)}
              />
              SAUDI ARABIA
            </label>
            <label className="flex items-center gap-2 text-gray-600 text-sm mb-2">
              <input
                type="checkbox"
                className="w-4 h-4"
                checked={oman}
                onChange={() => setOman(!oman)}
              />
              OMAN
            </label>
            <label className="flex items-center gap-2 text-gray-600 text-sm mb-2">
              <input
                type="checkbox"
                className="w-4 h-4"
                checked={bahrain}
                onChange={() => setBahrain(!bahrain)}
              />
              BAHRAIN
            </label>
            <label className="flex items-center gap-2 text-gray-600 text-sm mb-2">
              <input
                type="checkbox"
                className="w-4 h-4"
                checked={south_africa}
                onChange={() => setSouthAfrica(!south_africa)}
              />
              SOUTH AFRICA
            </label>
            <label className="flex items-center gap-2 text-gray-600 text-sm mb-2">
              <input
                type="checkbox"
                className="w-4 h-4"
                checked={egypt}
                onChange={() => setEgypt(!egypt)}
              />
              EGYPT
            </label>
          </div>
        </div>

        <div className="mt-4 flex justify-end">
          <button
            type="submit"
            className="py-2 px-6 text-sm tracking-wider rounded text-white bg-black hover:bg-opacity-55 transition-all duration-200"
          >
            Add
          </button>
        </div>
      </form>
      {loading && (
        <BeatLoader
          className="text-center"
          loading={loading}
          size={10}
          color="#D80000 "
        />
      )}
    </div>
  );
}

export default AddCompanyLayout;
