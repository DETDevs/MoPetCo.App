import axios from "axios";
import { API_BASE_URL } from "./apiConfig";
import { VideoType } from "../types/VideoType";

export const obtenerVideosTypes = async (): Promise<VideoType[]> => {
  try {
    const response = await axios.get<{ content: VideoType[] }>(
      `${API_BASE_URL}/api/Media/ObtenerVideos`
    );
    return response.data.content;
  } catch (error) {
    console.log("Error fetching video type:", error);
    return [];
  }
};
