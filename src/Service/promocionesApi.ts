import { Promocion } from "../types/promociones";
import { API_BASE_URL } from "./apiConfig";

export const fetchPromocion = async (): Promise<Promocion[]> => {
  try {
    const res = await fetch(
      `${API_BASE_URL}/api/Promociones/ObtenerPromocionesHome`
    );

    console.log(res);

    if (!res.ok) {
      const errorText = await res.text();
      console.error("Respuesta del servidor inválida:", errorText);
      return [];
    }

    const data = await res.json();

    if (data?.content && Array.isArray(data.content)) {
      return data.content;
    } else {
      console.error("Formato de respuesta inesperado:", data);
      return [];
    }
  } catch (error) {
    console.error("Error fetching promociones:", error);
    return [];
  }
};
