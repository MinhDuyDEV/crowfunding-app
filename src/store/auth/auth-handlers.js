import { toast } from "react-toastify";
import {
  requestAuthFetchMe,
  requestAuthLogin,
  requestAuthRefreshToken,
  requestAuthRegister,
} from "./auth-request";
import { call, put } from "redux-saga/effects";
import { logOut, saveToken } from "utils/auth";
import { authUpdateUser } from "./auth-slice";

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
      yield call(handleAuthFetchMe, { payload: accessToken });
    }
  } catch (error) {
    console.log(error);
  }
}

function* handleAuthFetchMe(action) {
  const { payload } = action;
  try {
    const response = yield call(requestAuthFetchMe, payload);
    if (response.status === 200) {
      yield put(
        authUpdateUser({
          user: response.data,
          accessToken: payload,
        })
      );
    }
  } catch (error) {
    console.log(error);
  }
}

function* handleAuthRefreshToken(action) {
  const { payload } = action;
  try {
    const response = yield call(requestAuthRefreshToken, payload);
    const { accessToken, refreshToken } = response.data;
    if (response.data) {
      saveToken(accessToken, refreshToken);
      yield call(handleAuthFetchMe, {
        payload: accessToken,
      });
    } else {
      yield handleAuthLogOut();
    }
  } catch (error) {
    console.log(error);
  }
}

function* handleAuthLogOut() {
  yield put(
    authUpdateUser({
      user: undefined,
      accessToken: null,
    })
  );
  logOut();
}

export {
  handleAuthLogin,
  handleAuthFetchMe,
  handleAuthRefreshToken,
  handleAuthLogOut,
};
