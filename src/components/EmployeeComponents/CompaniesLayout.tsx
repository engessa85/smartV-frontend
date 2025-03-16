import React, { useEffect, useState } from "react";
import CompanyCard from "./CompanyCard";
import { getCompanies } from "@/services/CompanyServices";
import { BeatLoader } from "react-spinners";
import { CompanyFormData } from "@/services/CompanyServices";
import { ToastContainer, toast } from "react-toastify";

function CompaniesLayout({ search }: { search: string }) {
  const [loading, setLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<CompanyFormData[]>([]);

  useEffect(() => {
    const fetchingData = async () => {
      if (!search.trim()) { // Ensure empty search clears results
        setFormData([]);
        return;
      }

      const accessToken = localStorage.getItem("accessToken");
      setLoading(true);

      try {
        const res = await getCompanies(accessToken ?? "");
        if (res) {
          setFormData(res);
        } else {
          toast.error("Error in fetching the companies !!!", {
            toastId: "fetchWrong",
          });
        }
      } catch {
        toast.error("Error in fetching the companies !!!", {
          toastId: "fetchWrong",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchingData();
  }, [search]);

  const filteredData = search.trim()
    ? formData.filter((company) =>
        company.company_name.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  return (
    <div className="my-10 px-2">
      <ToastContainer />

      {loading ? (
        <BeatLoader className="text-center" loading={loading} size={10} color="#D80000" />
      ) : (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
          {filteredData.length > 0 ? (
            filteredData.map((company, index) => (
              <CompanyCard key={index} companyData={company} />
            ))
          ) : (
            <p className="text-center col-span-3 text-gray-500">
              No companies found.
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default CompaniesLayout;
