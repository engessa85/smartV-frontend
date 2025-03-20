import React, { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import { ToastContainer, toast } from "react-toastify";
import {
  AllCompanyAppointmentInterFace,
  allAppointment,
} from "@/services/CompanyServices";
import AdminFollowUpCard from "./AdminFollowUpCard";

function FollowStatus() {
  const [loading, setLoading] = useState<boolean>(false);
  const [todayAppointments, setTodayAppointments] = useState<
    AllCompanyAppointmentInterFace[]
  >([]);
  const [otherAppointments, setOtherAppointments] = useState<
    AllCompanyAppointmentInterFace[]
  >([]);
  useEffect(() => {
    const fetchingData = async () => {
      const accessToken = localStorage.getItem("accessToken");
      setLoading(true);

      try {
        const res = await allAppointment(accessToken ?? "");
        if (res) {
          const today = new Date().toISOString().split("T")[0];

          // Separate today's data from the rest
          const todayData = res.filter(
            (appointment: AllCompanyAppointmentInterFace) =>
              appointment.date && appointment.date.split("T")[0] === today
          );

          const otherData = res.filter(
            (appointment: AllCompanyAppointmentInterFace) =>
              !appointment.date || appointment.date.split("T")[0] !== today
          );

          setTodayAppointments(todayData);
          setOtherAppointments(otherData);
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
  }, []);

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
        <>
          {todayAppointments.length > 0 && (
            <h2 className="text-xl font-bold text-gray-800 mb-4 bg-yellow-200 px-3 py-1 rounded-lg w-fit">
              Today's Follow-ups
            </h2>
          )}

          <div className="flex flex-col gap-4">
            {todayAppointments.length > 0 ? (
              todayAppointments.map((company, index) => (
                <AdminFollowUpCard key={index} allAppointmetnData={company} />
              ))
            ) : (
              <p className="text-center col-span-3 text-gray-500">
                No follow-ups for today
              </p>
            )}
          </div>
          <>
            <h2 className="text-xl font-bold text-gray-800 mt-4 bg-yellow-200 px-3 py-1 rounded-lg w-fit">
              Other Follow-ups
            </h2>
            <div className="flex flex-col gap-4 mt-5">
              {otherAppointments.length > 0 ? (
                otherAppointments.map((company, index) => (
                  <AdminFollowUpCard key={index} allAppointmetnData={company} />
                ))
              ) : (
                <p className="text-center col-span-3 text-gray-500">
                  No Other Follow-ups
                </p>
              )}
            </div>
          </>
        </>
      )}
    </div>
  );
}

export default FollowStatus;
