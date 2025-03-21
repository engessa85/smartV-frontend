import React, { useEffect, useState } from "react";
import ModifyCompanyCard from "./ModifyCompanyCard";
import { getUserCompanies } from "@/services/CompanyServices";
import { BeatLoader } from "react-spinners";
import { CompanyFormData } from "@/services/CompanyServices";
import { ToastContainer, toast } from "react-toastify";

function CompaniesLayout() {
  const [loading, setLoading] = useState<boolean>(false);
  const [formData, setFomData] = useState<CompanyFormData[]>([]);
  const [refreshKey, setRefreshKey] = useState(0)
  const handleRefresh = () => {
    setRefreshKey((prevKey) => prevKey + 1);
  };
  useEffect(() => {
    const fetchingData = async () => {
      const accessToken = localStorage.getItem("accessToken");
      setLoading(true);

      try {
        const res = await getUserCompanies(accessToken ?? "");
        if (res) {
          setFomData(res);
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
  }, [refreshKey]);


  return (
    <div className="my-10 px-2">
      <ToastContainer />

      {loading ? (
        <BeatLoader
          className="text-center"
          loading={loading}
          size={10}
          color="#D80000 "
        />
      ) : (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
          {formData.length > 0 ? (
            formData.map((company, index) => (
              <ModifyCompanyCard key={index} companyData={company} refresh = {handleRefresh} />
            ))
          ) : (
            <p className="text-center col-span-3 text-gray-500">
              No companies found.
            </p>
          )}

          <div></div>
        </div>
      )}
    </div>
  );
}

export default CompaniesLayout;
