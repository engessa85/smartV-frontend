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
          {(isActive === "search-companies") && (
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
            <div className="flex items-center space-x-6">
              <div className="w-9 h-[38px] flex items-center justify-center rounded-xl relative bg-blue-200 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[18px] h-[18px] fill-blue-600"
                  viewBox="0 0 371.263 371.263"
                >
                  <path
                    d="M305.402 234.794v-70.54c0-52.396-33.533-98.085-79.702-115.151.539-2.695.838-5.449.838-8.204C226.539 18.324 208.215 0 185.64 0s-40.899 18.324-40.899 40.899c0 2.695.299 5.389.778 7.964-15.868 5.629-30.539 14.551-43.054 26.647-23.593 22.755-36.587 53.354-36.587 86.169v73.115c0 2.575-2.096 4.731-4.731 4.731-22.096 0-40.959 16.647-42.995 37.845-1.138 11.797 2.755 23.533 10.719 32.276 7.904 8.683 19.222 13.713 31.018 13.713h72.217c2.994 26.887 25.869 47.905 53.534 47.905s50.54-21.018 53.534-47.905h72.217c11.797 0 23.114-5.03 31.018-13.713 7.904-8.743 11.797-20.479 10.719-32.276-2.036-21.198-20.958-37.845-42.995-37.845a4.704 4.704 0 0 1-4.731-4.731zM185.64 23.952c9.341 0 16.946 7.605 16.946 16.946 0 .778-.12 1.497-.24 2.275-4.072-.599-8.204-1.018-12.336-1.138-7.126-.24-14.132.24-21.078 1.198-.12-.778-.24-1.497-.24-2.275.002-9.401 7.607-17.006 16.948-17.006zm0 323.358c-14.431 0-26.527-10.3-29.342-23.952h58.683c-2.813 13.653-14.909 23.952-29.341 23.952zm143.655-67.665c.479 5.15-1.138 10.12-4.551 13.892-3.533 3.773-8.204 5.868-13.353 5.868H59.89c-5.15 0-9.82-2.096-13.294-5.868-3.473-3.772-5.09-8.743-4.611-13.892.838-9.042 9.282-16.168 19.162-16.168 15.809 0 28.683-12.874 28.683-28.683v-73.115c0-26.228 10.419-50.719 29.282-68.923 18.024-17.425 41.498-26.887 66.528-26.887 1.198 0 2.335 0 3.533.06 50.839 1.796 92.277 45.929 92.277 98.325v70.54c0 15.809 12.874 28.683 28.683 28.683 9.88 0 18.264 7.126 19.162 16.168z"
                    data-original="#000000"
                  />
                </svg>
                <span className="absolute w-5 h-5 flex items-center justify-center -right-2.5 -top-2.5 text-[10px] rounded-full bg-blue-600 text-white">
                  21
                </span>
              </div>

              <div className="w-9 h-[38px] flex items-center justify-center rounded-xl relative bg-blue-200 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[18px] h-[18px] fill-blue-600"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M17.933.899C16.973.82 15.78.82 14.258.82H9.742c-1.522 0-2.716 0-3.675.078-.977.08-1.784.245-2.514.618a6.382 6.382 0 0 0-2.79 2.79C.391 5.036.226 5.843.146 6.82c-.079.96-.079 2.154-.079 3.676v4.73a5.02 5.02 0 0 0 5.02 5.02h.667a.39.39 0 0 1 .363.535c-.763 1.905 1.432 3.627 3.101 2.435l2.899-2.07.055-.039a4.717 4.717 0 0 1 2.686-.861h.84c1.719 0 2.767 0 3.648-.258a6.382 6.382 0 0 0 4.329-4.329c.257-.881.257-1.929.257-3.648v-1.515c0-1.522 0-2.717-.077-3.676-.081-.976-.246-1.783-.618-2.514a6.382 6.382 0 0 0-2.79-2.79C19.717 1.145 18.91.98 17.933.9zM4.309 3c.456-.233 1.02-.37 1.893-.44.884-.073 2.01-.074 3.578-.074h4.44c1.568 0 2.694 0 3.578.073.873.071 1.437.209 1.894.44a4.717 4.717 0 0 1 2.062 2.063c.233.456.37 1.02.44 1.894.072.883.073 2.009.073 3.577v1.315c0 1.933-.008 2.721-.19 3.343a4.717 4.717 0 0 1-3.2 3.199c-.621.182-1.41.19-3.343.19h-.687a6.382 6.382 0 0 0-3.635 1.166l-2.96 2.115c-.318.226-.734-.1-.589-.462a2.055 2.055 0 0 0-1.909-2.818h-.667a3.354 3.354 0 0 1-3.355-3.354v-4.695c0-1.568 0-2.694.074-3.577.07-.874.208-1.438.44-1.894A4.717 4.717 0 0 1 4.31 3z"
                    clipRule="evenodd"
                    data-original="#000000"
                  />
                  <path
                    d="M8.67 10.533a1.11 1.11 0 1 1-2.22 0 1.11 1.11 0 0 1 2.22 0zm4.44 0a1.11 1.11 0 1 1-2.22 0 1.11 1.11 0 0 1 2.22 0zm4.44 0a1.11 1.11 0 1 1-2.22 0 1.11 1.11 0 0 1 2.22 0z"
                    data-original="#000000"
                  />
                </svg>
                <span className="absolute w-5 h-5 flex items-center justify-center -right-2.5 -top-2.5 text-[10px] rounded-full bg-blue-600 text-white">
                  4
                </span>
              </div>
            </div>

            <div className="w-1 h-10 border-l border-gray-400"></div>
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
