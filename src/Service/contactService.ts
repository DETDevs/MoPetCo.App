import axios from "axios";
import { API_BASE_URL } from "./apiConfig";
import { ContactoRequest } from "../types/contact";

export const enviarContacto = async (
  contacto: ContactoRequest
): Promise<boolean> => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/api/Contacto/EnviarEmail`,
      contacto
    );
    return response.status === 200;
  } catch (error) {
    console.error("Error al enviar contacto:", error);
    return false;
  }
};

export const sendCode = async (email: string): Promise<boolean> => {
  try {
    const res = await axios.post(
      `${API_BASE_URL}/api/Contacto/SendCode/send-code`,
      JSON.stringify(email), 
      { headers: { "Content-Type": "application/json" } }
    );
    return res.status === 200;
  } catch (err) {
    console.error("SendCode error:", err);
    return false;
  }
};

export const validateCode = async (
  email: string,
  code: string
): Promise<boolean> => {
  try {
    const res = await axios.post(
      `${API_BASE_URL}/api/Contacto/ValidateCode/validate-code`,
      { email, code }
    );
    return res.status === 200;
  } catch (err) {
    console.error("ValidateCode error:", err);
    return false;
  }
};

export const validarZipCode = async (
  zipCode: string,
  countryCode = "US"
): Promise<boolean> => {
  try {
    const res = await axios.get(
      `${API_BASE_URL}/api/Contacto/Validate/validate/${zipCode}/${countryCode}`
    );
    return res.status === 200;
  } catch (error) {
    return false;
  }
};