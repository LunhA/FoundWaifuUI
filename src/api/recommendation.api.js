import axiosInstance from "../utils/api-service";

export const getSuggestedCharsApi = (mbti) => {
  return axiosInstance.get(`/suggested/${mbti}`);
};
