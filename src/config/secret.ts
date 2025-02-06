import "./env-config";

export const secret = {
  apiBaseUrl: process.env.API_BASE_URL!,
  imageBaseUrl: process.env.NEXT_PUBLIC_IMAGE_BASE_URL!,
};
