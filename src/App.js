import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
const DashboardPage = lazy(() => import("./Pages/DashboardPage"));
const SignUpPage = lazy(() => import("./Pages/SignUpPage"));
const SignInPage = lazy(() => import("./Pages/SignInPage"));
const VerifyPage = lazy(() => import("./Pages/VerifyPage"));
const CongratulationPage = lazy(() => import("./Pages/CongratulationPage"));
const CampaignPage = lazy(() => import("Pages/CampaignPage"));
const StartCampaignPage = lazy(() => import("Pages/StartCampaignPage"));

function App() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<DashboardPage></DashboardPage>}></Route>
        <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route>
        <Route path="/sign-in" element={<SignInPage></SignInPage>}></Route>
        <Route path="/email-verify" element={<VerifyPage></VerifyPage>}></Route>
        <Route
          path="/congratulation"
          element={<CongratulationPage></CongratulationPage>}
        ></Route>
        <Route path="/campaign" element={<CampaignPage></CampaignPage>}></Route>
        <Route
          path="/start-campaign"
          element={<StartCampaignPage></StartCampaignPage>}
        ></Route>
      </Routes>
    </Suspense>
  );
}

export default App;
