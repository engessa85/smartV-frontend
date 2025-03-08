import React, { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ToastContainer, toast } from "react-toastify";
import { addUserCompaniesAppointment } from "@/services/CompanyServices";

interface PropeType {
  companyName: string;
  id: number;
  follow:boolean
  note:string
  date:string
  onClose: () => void;
  refresh:()=>void
}

function AppointmentModal(prope: PropeType) {
  
  const [selectedDate, setSelectedDate] = useState<Date | null>(
    prope.date ? new Date(prope.date) : null
  );
  const [note, setNote] = useState<string>(prope.note);
  const [follow, setFollow] = useState<boolean>(prope.follow);
  const [loading, setLoading] = useState<boolean>(false);
  

  const HandleAppointment = async () => {
    if (!selectedDate) {
      toast.error("Please select a date", { autoClose: 1000 });
      return;
    } else {
      const formattedDate =
        selectedDate.getFullYear() +
        "-" +
        String(selectedDate.getMonth() + 1).padStart(2, "0") +
        "-" +
        String(selectedDate.getDate()).padStart(2, "0");

      setLoading(true);
      const token = localStorage.getItem("accessToken");

      try {
        const res = await addUserCompaniesAppointment(
          token ?? "",
          prope.id,
          formattedDate,
          note,
          follow
        );
        if (res) {
          toast.success("Appointment added successfully", { autoClose: 1000 });
          prope.refresh()
          setTimeout(()=>prope.onClose(), 2000)
        }
      } catch {
        toast.error("Failed to add appointment", { autoClose: 1000 });
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
      <ToastContainer />
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6 relative">
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
        <div className="my-2">
          <p className="text-xl">{prope.companyName}</p>
        </div>
        <hr className="mt-2 mb-4"></hr>

        <div className="relative">
          <label className="block text-sm font-medium text-gray-700">
            Select Date
          </label>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            minDate={new Date()}
            dateFormat="d-MM-YYYY"
            className="w-full px-2 py-1 border rounded cursor-pointer text-sm mr-10"
            placeholderText="Choose a date"
          />
        </div>

        <div className="my-5">
          <label className="block text-sm font-medium text-gray-700">
            Add a Note (Optional)
          </label>
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            rows={3}
            className="w-full mt-1 p-2 border rounded resize-none text-sm"
            placeholder="Enter any additional notes here..."
          />
        </div>

        <div className="mb-3 flex items-center">
          <input
            type="checkbox"
            id="follow"
            checked={follow}
            onChange={(e) => setFollow(e.target.checked)}
            className="mr-2"
    
          />
          <label htmlFor="follow" className="text-sm text-gray-700">
            Follow this company
          </label>
        </div>

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
            onClick={HandleAppointment}
            type="button"
            className="px-4 py-2 rounded-lg text-white text-sm bg-red-600 hover:bg-red-700 active:bg-red-600"
          >
            {loading ? "Adding..." : "Confirm"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default AppointmentModal;
