import React, { useEffect, useState } from "react";
import { logoutService } from "@/services/AuthUser";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { getuserInfo } from "@/services/AuthUser";

interface PropeType {
  isActive: string;
  setSearch:(text:string)=>void
}

function Header({ isActive, setSearch }: PropeType) {
  const route = useRouter();
  const [username, setUserName] = useState<string>("")

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      route.push("/");
    }

    const fetchUserInfo = async () => {
      try {
        const response = await getuserInfo(token);
        setUserName(response.username)
      } catch (error) {
        console.log("error in getting the user", error);
      }
    };

    fetchUserInfo();
  }, [route]);

  const handleSingout = () => {
    logoutService();
    toast.success("Logging out ....", { autoClose: 2000 });
    setTimeout(() => route.push("/"), 2000);
  };
  return (
    <header className="z-50 bg-[#f7f6f9] sticky top-0 pt-8">
      <ToastContainer />
      <div className="flex flex-wrap items-center w-full relative tracking-wide">
        <div className="flex items-center gap-y-6 max-sm:flex-col z-50 w-full pb-2">
          {isActive === "companies" && (
            <div className="flex items-center gap-4 w-[80%] px-6 bg-white shadow-sm min-h-[48px] sm:mr-20 rounded-md outline-none border-none">
              <input
                type="text"
                placeholder="Search for company......."
                className="w-full text-sm bg-transparent rounded outline-none"
                onChange={(e)=>setSearch(e.target.value)}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 192.904 192.904"
                className="w-4 cursor-pointer fill-gray-400 ml-auto"
              >
                <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
              </svg>
            </div>
          )}

          <div className="flex items-center justify-end gap-6 ml-auto">
          

            <div className="dropdown-menu relative flex shrink-0 group">
              <div className="flex items-center gap-4">
                <p className="text-gray-500 text-sm">Welcome {username}</p>
                <button
                  onClick={handleSingout}
                  className="text-white text-xs bg-red-600 hover:bg-opacity-55 px-3 py-2 rounded-lg transition-all duration-200"
                >
                  Log out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
