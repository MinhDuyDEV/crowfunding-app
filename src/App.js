import React, { lazy, Suspense } from "react";
import LayoutDashboard from "layouts/LayoutDashboard";
import { Routes, Route } from "react-router-dom";
const VerifyPage = lazy(() => import("./Pages/VerifyPage"));
const StartCampaignPage = lazy(() => import("Pages/StartCampaignPage"));
const SignUpPage = lazy(() => import("./Pages/SignUpPage"));
const SignInPage = lazy(() => import("./Pages/SignInPage"));
const DashboardPage = lazy(() => import("./Pages/DashboardPage"));
const CongratulationPage = lazy(() => import("./Pages/CongratulationPage"));
const CampaignPage = lazy(() => import("Pages/CampaignPage"));

function App() {
  return (
    <Suspense>
      <Routes>
        <Route element={<LayoutDashboard></LayoutDashboard>}>
          <Route path="/" element={<DashboardPage></DashboardPage>}></Route>
          <Route
            path="/campaign"
            element={<CampaignPage></CampaignPage>}
          ></Route>
          <Route
            path="/start-campaign"
            element={<StartCampaignPage></StartCampaignPage>}
          ></Route>
        </Route>
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
