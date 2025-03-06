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


const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export const AddCompany = async (companyData: CompanyFormData, token: string|any) => {
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


export const getCompanies = async (token: string|any) => {
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
    throw new Error("Error during adding the company");
  }
};
