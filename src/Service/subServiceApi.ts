import axios from "axios";
import { Servicio } from "../types/Servicio";
import { API_BASE_URL } from "./apiConfig";

export const obtenerSubServicios = async (): Promise<Servicio[]> => {
  const response = await axios.get<{ content: Servicio[] }>(
    `${API_BASE_URL}/api/Servicio/ObtenerSubServicios`
  );
  return response.data.content;
};
