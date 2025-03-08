import axios from "axios";



export interface CompanyFormData {
  user?:string

  company_name: string;
  company_website: string;
  company_email: string;
  company_linkedin:string;
  company_facebook:string;
  company_twitter:string


  person_name:string;
  person_linked:string;
  person_email:string;
  person_contact: string;

  negotiate:boolean;
  contract:boolean;
  first_payment: boolean;
  final_payment: boolean;
  
  kuwait: boolean;
  uae: boolean;
  qatar: boolean;
  saudi_arabia: boolean;
  oman: boolean;
  bahrain: boolean;
  south_africa: boolean;
  egypt: boolean;
  created_at?:string
  updated_at?:string
}


export interface company {
  id:number
  company_name: string;
  company_website: string;
  company_email: string;

}
export interface CompanyAppointment {
  id:number
  user:string
  company:company
  date:string
  follow:boolean
  note?:string
}


const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export const AddCompany = async (companyData: CompanyFormData, token: string) => {
  try {
    const response = await axios.post(
      `${baseUrl}/company/companies/`,
      companyData,
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
    throw new Error("Error during adding the company");
  }
};


export const getCompanies = async (token: string) => {
  try {
    const response = await axios.get(
      `${baseUrl}/company/companies/`,
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
    throw new Error("Error during getting the company");
  }
};



export const getUserCompanies = async (token: string) => {
  try {
    const response = await axios.get(
      `${baseUrl}/company/user-companies`,
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
    throw new Error("Error during getting the company");
  }
};



export const getUserCompaniesAppointment = async (token: string) => {
  try {
    const response = await axios.get(
      `${baseUrl}/company/user-appointment`,
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
    throw new Error("Error during getting the company");
  }
};



export const addUserCompaniesAppointment = async (
  token: string,
  id: number,
  date: string,
  note?: string,
  follow?: boolean
) => {
  try {
    const response = await axios.put(
      `${baseUrl}/company/user-appointment/${id}`,
      {
        date,
        note: note?.trim() || "", // Optional note, ensure no unnecessary spaces
        follow: follow ?? false, // Default to false if undefined
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error booking the appointment:", error);
    throw new Error("Error during booking the appointment");
  }
};

