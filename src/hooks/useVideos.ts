import { useQuery } from "@tanstack/react-query";
import { obtenerVideosTypes } from "../Service/videoService";

export const useVideos = () =>
  useQuery({
    queryKey: ["videos"],
    queryFn: obtenerVideosTypes,
    staleTime: 1000 * 60 * 5,
  });
