const { default: axios } = require("axios");

export const requestAuthRegister = (data) => {
  console.log("🚀 ~ requestAuthRegister ~ data", data);
  return axios.post("/auth/register", {
    ...data,
  });
};

export const requestAuthLogin = (data) => {
  console.log("🚀 ~ requestAuthLogin ~ data", data);
  return axios.post("/auth/login", {
    ...data,
  });
};

export const requestAuthFetchMe = (token) => {
  if (!token) return;
  return axios.get("/me", {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

export const requestAuthRefreshToken = (token) => {
  if (!token) return;
  return axios.post("/token", {
    refreshToken: token,
  });
};
