import React, { useEffect, useState } from "react";
import UserCompanyCard from "./UserCompanyCard";
import { getUserCompaniesAppointment } from "@/services/CompanyServices";
import { BeatLoader } from "react-spinners";
import { CompanyAppointment } from "@/services/CompanyServices";
import { ToastContainer, toast } from "react-toastify";

function UserCompaniesLayout({ search }: { search: string }) {
  const [loading, setLoading] = useState<boolean>(false);
  const [formData, setFomData] = useState<CompanyAppointment[]>([]);

  const [refreshKey, setRefreshKey] = useState(0);

const handleRefresh = () => {
  setRefreshKey((prevKey) => prevKey + 1); // Triggers a re-render
};



  useEffect(() => {
    const fetchingData = async () => {
      const accessToken = localStorage.getItem("accessToken");
      setLoading(true);

      try {
        const res = await getUserCompaniesAppointment(accessToken ?? "");
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

 
  const filteredData = formData.filter((company) =>
    company.company.company_name.toLowerCase().includes(search.toLocaleLowerCase())
  );
  

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
          {filteredData.length > 0 ? (
            filteredData.map((company, index) => (
              <UserCompanyCard key={index} companyData={company} refresh = {handleRefresh} />
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

export default UserCompaniesLayout;
