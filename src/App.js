import React, { lazy, Suspense, useEffect } from "react";
import LayoutDashboard from "layouts/LayoutDashboard";
import { Routes, Route } from "react-router-dom";
import Modal from "react-modal";
import LayoutPayment from "layouts/LayoutPayment";
import CheckoutPage from "Pages/CheckoutPage";
import ShippingPage from "Pages/ShippingPage";
import { useDispatch, useSelector } from "react-redux";
import { authRefreshToken, authUpdateUser } from "store/auth/auth-slice";
import { getToken, logOut } from "utils/auth";
const VerifyPage = lazy(() => import("./Pages/VerifyPage"));
const StartCampaignPage = lazy(() => import("Pages/StartCampaignPage"));
const SignUpPage = lazy(() => import("./Pages/SignUpPage"));
const SignInPage = lazy(() => import("./Pages/SignInPage"));
const DashboardPage = lazy(() => import("./Pages/DashboardPage"));
const CongratulationPage = lazy(() => import("./Pages/CongratulationPage"));
const CampaignPage = lazy(() => import("Pages/CampaignPage"));
const CampaignView = lazy(() => import("modules/campaign/CampaignView"));

Modal.setAppElement("#root");
Modal.defaultStyles = {};

function App() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    const { access_token } = getToken();
    if (user && user.id) {
      dispatch(authUpdateUser({ user, access_token }));
    } else {
      const { refresh_token } = getToken();
      if (refresh_token) {
        dispatch(authRefreshToken(refresh_token));
      } else {
        dispatch(authUpdateUser({}));
        logOut();
      }
    }
  }, [dispatch, user]);
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
          <Route
            path="/campaign/:slug"
            element={<CampaignView></CampaignView>}
          ></Route>
        </Route>
        <Route element={<LayoutPayment></LayoutPayment>}>
          <Route
            path="/checkout"
            element={<CheckoutPage></CheckoutPage>}
          ></Route>
          <Route
            path="/shipping-address"
            element={<ShippingPage></ShippingPage>}
          ></Route>
        </Route>
        <Route path="/register" element={<SignUpPage></SignUpPage>}></Route>
        <Route path="/login" element={<SignInPage></SignInPage>}></Route>
        <Route path="/verify" element={<VerifyPage></VerifyPage>}></Route>
        <Route
          path="/congratulation"
          element={<CongratulationPage></CongratulationPage>}
        ></Route>
      </Routes>
    </Suspense>
  );
}

export default App;
