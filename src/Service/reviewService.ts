import { Review } from "../types/review";
import { API_BASE_URL } from "./apiConfig";

export const fetchReviews = async (): Promise<Review[]> => {
  try {
    const res = await fetch(
      `${API_BASE_URL}/googlemaps/reviews?placeId=ChIJ4xNFOrG32YgROYhpWhMUv9E`
    );
    const data = await res.json();
    
    if (data?.result?.reviews && Array.isArray(data.result.reviews)) {
      return data.result.reviews;
    } else {
      console.error("Formato de respuesta inesperado:", data);
      return [];
    }
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return [];
  }
};
