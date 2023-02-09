import { toast } from "react-toastify";
import { requestAuthLogin, requestAuthRegister } from "./auth-request";
import { call } from "redux-saga/effects";
import { saveToken } from "utils/auth";

export default function* handleAuthRegister(action) {
  const { payload } = action;
  try {
    const response = yield call(requestAuthRegister, payload);
    if (response.status === 201) {
      toast.success("Create new account successfully!");
    }
  } catch (error) {
    console.log(error);
  }
}

function* handleAuthLogin(action) {
  const { payload } = action;
  try {
    const response = yield call(requestAuthLogin, payload);
    const { accessToken, refreshToken } = response.data;
    if (accessToken && refreshToken) {
      saveToken(accessToken, refreshToken);
    }
  } catch (error) {
    console.log(error);
  }
}

export { handleAuthLogin };
