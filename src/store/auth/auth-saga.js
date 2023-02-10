import { takeLatest } from "redux-saga/effects";
import handleAuthRegister, {
  handleAuthLogin,
  handleAuthLogOut,
  handleAuthRefreshToken,
} from "./auth-handlers";
import {
  authRegister,
  authLogin,
  authRefreshToken,
  authLogOut,
} from "./auth-slice";

export default function* authSaga() {
  yield takeLatest(authRegister.type, handleAuthRegister);
  yield takeLatest(authLogin.type, handleAuthLogin);
  yield takeLatest(authRefreshToken.type, handleAuthRefreshToken);
  yield takeLatest(authLogOut.type, handleAuthLogOut);
}
