import React, { useState, useEffect } from "react";
import PieChartComponent from "../Charts/PieChartComponent";
import { RiUserFollowFill } from "react-icons/ri";
import { RiUserUnfollowFill } from "react-icons/ri";
import { TbWorld } from "react-icons/tb";
import {
  UserDashBoardData,
  getUserUserDashBoard,
} from "@/services/DashBoardServices";
import { ToastContainer, toast } from "react-toastify";
import { BeatLoader } from "react-spinners";

function DashBoardLayout() {
  const [dashBoardInfo, setDashBoardInfo] = useState<UserDashBoardData>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchingUserDashBoard = async () => {
      setLoading(true);
      const accessToke = localStorage.getItem("accessToken");
      try {
        const res = await getUserUserDashBoard(accessToke ?? "");
        if (res) {
          setDashBoardInfo(res);
        } else {
          toast.error("Failed to fetch user dashboard", { autoClose: 2000 });
        }
      } catch {
        toast.error("Failed to fetch user dashboard", { autoClose: 2000 });
      } finally {
        setLoading(false);
      }
    };
    fetchingUserDashBoard();
  }, []);

  if (loading) {
    return (
      <BeatLoader
        className="text-center"
        loading={loading}
        size={10}
        color="#D80000 "
      />
    );
  }

  return (
    <div className="my-10 px-2">
      <ToastContainer />

      <div className="flex gap-5">
        <div className="bg-white p-5 rounded-xl w-[50%]">
          <div className="flex items-center gap-2">
            <TbWorld size={20} />
            <h1>Total Companies</h1>
          </div>
          <hr className="my-3"></hr>
          <p className="font-bold">{dashBoardInfo?.company_count}</p>
        </div>

        <div className="bg-white p-5 rounded-xl w-[50%]">
          <div className="flex items-center gap-2">
            <RiUserFollowFill size={20} className="text-green-500" />
            <h1>Total Companies Followed</h1>
          </div>
          <hr className="my-3"></hr>
          <p className="font-bold">{dashBoardInfo?.company_followed}</p>
        </div>

        <div className="bg-white p-5 rounded-xl w-[50%]">
          <div className="flex items-center gap-2">
            <RiUserUnfollowFill size={20} className="text-red-500" />
            <h1>Total Companies Not followed</h1>
          </div>

          <hr className="my-3"></hr>
          <p className="font-bold">{dashBoardInfo?.company_not_followed}</p>
        </div>
      </div>
      <div className="flex gap-4 items-center justify-center">
        <div className="bg-white p-5 rounded-xl mt-5 flex-1">
          <h2 className="text-lg font-semibold mb-4">Company Follow Status</h2>
          <hr className="my-4"></hr>
          <PieChartComponent totalCompanies={dashBoardInfo!.company_count} followedCompanies={dashBoardInfo!.company_followed} />
        </div>
        
      </div>
    </div>
  );
}

export default DashBoardLayout;
