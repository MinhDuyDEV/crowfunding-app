import { toast } from "react-toastify";
import { call } from "redux-saga/effects";
import { requestAuthRegister } from "./auth-request";

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
