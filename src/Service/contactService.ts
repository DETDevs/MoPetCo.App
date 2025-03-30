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
