import axiosInstance from "../utils/api-service";

export const getSuggestedCharsApi = (mbti) => {
  return axiosInstance.get(`/suggested/${mbti}`);
};

export const getCharacterByMbtiApi = (mbti) => {
  return axiosInstance.get(`/characters-by-mbti/${mbti}`);
};

export const getCharacterByAnimeIdApi = (id) => {
  return axiosInstance.get(`/related-characters/${id}`);
};

export const getCharacterByIdApi = (id) => {
  return axiosInstance.get(`/characters/${id}`);
};

export const searchBarApi = (search) => {
  return axiosInstance.get(`/search-bar?search=${search}`);
};
