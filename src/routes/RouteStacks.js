import React, { useEffect, useState, lazy } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import { supabase } from "../supabaseClient";



const BaseLayout = lazy(() => import("../Pages/BaseLayout"));
const Page404 = lazy(() => import("../Pages/404"));
const Login = lazy(() => import("../Pages/LoginPage"));
const Home = lazy(() => import("../Pages/QuickAccess"));
const AttendanceList = lazy(() => import("../Pages/AttendanceList"));
const DailyReport = lazy(() => import("../Pages/DailyReportMagang"));
const Score = lazy(() => import("../Pages/Score"));
const Notif = lazy(() => import("../Pages/Notifications"));
const Agenda = lazy(() => import("../Pages/Agenda"));
const ReportForm = lazy(() => import("../Pages/LaporanMagangBootcamp"));
const PresensiSakit = lazy(() => import("../Pages/PresensiSakit"));
const PresensiIzin = lazy(() => import("../Pages/PresensiIzin"));


const RouteStacks = () => {
  const [localSession, setLocalSession] = useState({});
  useEffect(() => {
    supabase.auth.onAuthStateChange(async (_event, session) => {
      console.log(_event);
      console.log(session);
      if (session != null) {
        let { data, error } = await supabase
          .from("user_data")
          .select("first_login")
          .eq("email", session.user.email);
        const rest = { ...session, ...data[0] };
        setLocalSession(rest);
      } else {
        setLocalSession({});
      }
    });
  }, []);
  const loggedIn = () => {
    console.log(localSession);
    return !!localSession.access_token;
  };
  const loggedOut = () => {
    return !localSession.access_token;
  };

  const firstLogin = () => {
    return localSession.first_login;
  };
  const noFirstLogin = () => {
    return !localSession.first_login;
  };

  return (
    <Switch>
      <Route exact path="/">
        <Redirect
          to={{
            pathname: "/auth/login",
          }}
        />
      </Route>

      <PrivateRoute
        exact
        path="/dashboard"
        allow={[loggedIn, noFirstLogin]}
        redirectTo="/auth/login"
      >
        <BaseLayout>
          <Home />
        </BaseLayout>
      </PrivateRoute>

      <PrivateRoute
        exact
        path="/attendance-list"
        allow={[loggedIn, noFirstLogin]}
        redirectTo="/auth/login"
      >
        <BaseLayout>
          <AttendanceList />
        </BaseLayout>
      </PrivateRoute>

      <PrivateRoute
        exact
        path="/daily-report-magang"
        allow={[loggedIn, noFirstLogin]}
        redirectTo="/auth/login"
      >
        <BaseLayout>
          <DailyReport />
        </BaseLayout>
      </PrivateRoute>

      <PrivateRoute
        exact
        path="/score"
        allow={[loggedIn, noFirstLogin]}
        redirectTo="/auth/login"
      >
        <BaseLayout>
          <Score />
        </BaseLayout>
      </PrivateRoute>

      <PrivateRoute
        exact
        path="/notifications"
        allow={[loggedIn, noFirstLogin]}
        redirectTo="/auth/login"
      >
        <BaseLayout>
          <Notif />
        </BaseLayout>
      </PrivateRoute>

      <PrivateRoute
        exact
        path="/agenda"
        allow={[loggedIn, noFirstLogin]}
        redirectTo="/auth/login"
      >
        <BaseLayout>
          <Agenda />
        </BaseLayout>
      </PrivateRoute>
      
      <PrivateRoute
        exact
        path="/daily-report-magang/laporan-magang-bootcamp"
        allow={[loggedIn, noFirstLogin]}
        redirectTo="/auth/login"
      >
        <BaseLayout>
          <ReportForm />
        </BaseLayout>
      </PrivateRoute>

      <PrivateRoute
        exact
        path="/attendance-list/presensi-sakit"
        allow={[loggedIn, noFirstLogin]}
        redirectTo="/auth/login"
      >
        <BaseLayout>
          <PresensiSakit />
        </BaseLayout>
      </PrivateRoute>

      <PrivateRoute
        exact
        path="/attendance-list/presensi-izin"
        allow={[loggedIn, noFirstLogin]}
        redirectTo="/auth/login"
      >
        <BaseLayout>
          <PresensiIzin />
        </BaseLayout>
      </PrivateRoute>

      

      <PrivateRoute
        exact
        path="/auth/:page"
        allow={[loggedOut]}
        redirectTo="/dashboard"
      >
        <Login />
      </PrivateRoute>

      {/* keep  <Route path="*"> being the last of siblings */}
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
};
export default RouteStacks;
