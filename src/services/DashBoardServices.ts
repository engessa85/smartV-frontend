import axios from "axios";


const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export interface UserDashBoardData {
    "company_count": number,
    "company_followed": number,
    "company_not_followed": number
}



export const getUserUserDashBoard = async (token: string) => {
  try {
    const response = await axios.get(
      `${baseUrl}/company/user-dashboard/`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Include JWT token for authentication
        },
      }
    );

    if (!response.status) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.data;
  } catch (error) {
    console.log("Error", error);
    throw new Error("Error during getting the user dahsboard info");
  }
};