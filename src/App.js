import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
const SignUpPage = lazy(() => import("./Pages/SignUpPage"));
const SignInPage = lazy(() => import("./Pages/SignInPage"));
const VerifyPage = lazy(() => import("./Pages/VerifyPage"));
const CongratulationPage = lazy(() => import("./Pages/CongratulationPage"));

function App() {
  return (
    <Suspense>
      <Routes>
        <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route>
        <Route path="/sign-in" element={<SignInPage></SignInPage>}></Route>
        <Route path="/email-verify" element={<VerifyPage></VerifyPage>}></Route>
        <Route
          path="/congratulation"
          element={<CongratulationPage></CongratulationPage>}
        ></Route>
      </Routes>
    </Suspense>
  );
}

export default App;
