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
