import axios from "axios";
import { API_BASE_URL } from "./apiConfig";
import { Servicio } from "../types/Servicio";

export const obtenerServicios = async (): Promise<Servicio[]> => {
  try {
    const response = await axios.get<{ content: Servicio[] }>(
      `${API_BASE_URL}/Servicio/Obtener`
    );
    return response.data.content;
  } catch (error) {
    console.error("Error fetching services:", error);
    return []; // Devuelve array vacío si falla
  }
};
