import axios from "axios";
import { API_BASE_URL } from "./apiConfig";
import { CaptchaVerifyResponse } from "../types/CaptchaVerifyResponse";

export const verificarCaptcha = async (token: string): Promise<CaptchaVerifyResponse | null> => {
  try {
    const response = await axios.post<CaptchaVerifyResponse>(
      `${API_BASE_URL}/api/Google/VerificarCaptcha/verificar-captcha`,
      token,
      { headers: { "Content-Type": "application/json" } }
    );

    return response.data;
  } catch (error) {
    console.error("Error verifying captcha:", error);
    return null; 
  }
};
