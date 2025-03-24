import axios from "axios";
import { API_BASE_URL } from "./apiConfig";
import { GalleryImage } from "../types/galleryImage";

export const obtenerImagenesGaleria = async (): Promise<GalleryImage[]> => {
  try {
    const response = await axios.get<{ content: GalleryImage[] }>(
      `${API_BASE_URL}/Media/ObtenerImagenes`
    );
    return response.data.content;
  } catch (error) {
    console.error("Error fetching gallery images:", error);
    return [];
  }
};
