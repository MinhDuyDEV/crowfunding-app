import { takeLatest } from "redux-saga/effects";
import handleAuthRegister, { handleAuthLogin } from "./auth-handlers";
import { authRegister, authLogin } from "./auth-slice";

export default function* authSaga() {
  yield takeLatest(authRegister.type, handleAuthRegister);
  yield takeLatest(authLogin.type, handleAuthLogin);
}
