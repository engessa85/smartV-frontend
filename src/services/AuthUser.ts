import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export const loginService = async (username: string, password: string) => {
  try {
    const response = await axios.post(`${baseUrl}/account/user-login/`, {
      username,
      password,
    });

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error("Servicing error !!!");
    }
  }
};

export const logoutService = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
};


export const getuserInfo = async (token: string | null) => {
  try {
    const res = await axios.get(`${baseUrl}/account/get-user-info`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // Include JWT token for authentication
      },
    });

    if (res.status) {
      return res.data;
    }
  } catch (error) {
    console.log("error in geting the user info", error);
  }
};
