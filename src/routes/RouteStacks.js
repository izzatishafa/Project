import React, { useEffect, useState, lazy, useRef } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import { supabase } from "../supabaseClient";
import Preloader from "../Components/Preloader";



const BaseLayout = lazy(() => import("../Pages/BaseLayout"));
const Page404 = lazy(() => import("../Pages/404"));
const Login = lazy(() => import("../Pages/LoginPage"));
const Home = lazy(() => import("../Pages/QuickAccess"));
const AttendanceList = lazy(() => import("../Pages/AttendanceList"));
const DailyReportBootcamp = lazy(() => import("../Pages/DailyReportMagang"));
const DailyReportPkl = lazy(() => import("../Pages/DailyReportPkl"));
const Score = lazy(() => import("../Pages/Score"));
const Notif = lazy(() => import("../Pages/Notifications"));
const Agenda = lazy(() => import("../Pages/Agenda"));
const ReportFormBootcamp = lazy(() => import("../Pages/LaporanMagangBootcamp"));
const ReportFormPkl = lazy(() => import("../Pages/LaporanMagangPkl"));
const PresensiSakit = lazy(() => import("../Pages/PresensiSakit"));
const PresensiIzin = lazy(() => import("../Pages/PresensiIzin"));
const CreateUser = lazy(() => import("../Pages/UserBaru"));
const HomeAdmin = lazy(() => import("../Pages/HomeAdmin"));
const AgendaAdmin = lazy(() => import("../Pages/Agenda2"));
const CreateNewAgenda = lazy(() => import("../Pages/AgendaBaru"));
const DailyReportAdmin = lazy(() => import("../Pages/DailyReportAdmin"));
const ManagementUser = lazy(() => import("../Pages/ManagementUser"));
const ManagementAgenda = lazy(() => import("../Pages/ManagementAgenda"))




const RouteStacks = () => {
  const [localSession, setLocalSession] = useState({});
  const [firstLoad, setFirstLoad] = useState(true);
  useEffect(() => {
    supabase.auth.onAuthStateChange(async (_event, session) => {
      console.log('authChange')
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
      setFirstLoad(false)
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
    console.log('noFirstLogin',localSession.first_login)
    return !localSession.first_login;
  };

  return ( firstLoad?<Preloader/>:
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
          <DailyReportBootcamp />
        </BaseLayout>
      </PrivateRoute>

      <PrivateRoute
        exact
        path="/daily-report-pkl"
        allow={[loggedIn, noFirstLogin]}
        redirectTo="/auth/login"
      >
        <BaseLayout>
          <DailyReportPkl />
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
          <ReportFormBootcamp />
        </BaseLayout>
      </PrivateRoute>

      <PrivateRoute
        exact
        path="/daily-report-pkl/laporan-magang-pkl"
        allow={[loggedIn, noFirstLogin]}
        redirectTo="/auth/login"
      >
        <BaseLayout>
          <ReportFormPkl />
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
        path="/management-user/user-baru"
        allow={[loggedIn, noFirstLogin]}
        redirectTo="/auth/login"
      >
        <BaseLayout>
          <CreateUser />
        </BaseLayout>
      </PrivateRoute>

      <PrivateRoute
        exact
        path="/home-admin"
        allow={[loggedIn, noFirstLogin]}
        redirectTo="/auth/login"
      >
        <BaseLayout>
          <HomeAdmin />
        </BaseLayout>
      </PrivateRoute>

      <PrivateRoute
        exact
        path="/agenda-admin"
        allow={[loggedIn, noFirstLogin]}
        redirectTo="/auth/login"
      >
        <BaseLayout>
          <AgendaAdmin />
        </BaseLayout>
      </PrivateRoute>

      <PrivateRoute
        exact
        path="/agenda-baru"
        allow={[loggedIn, noFirstLogin]}
        redirectTo="/auth/login"
      >
        <BaseLayout>
          <CreateNewAgenda />
        </BaseLayout>
      </PrivateRoute>

      <PrivateRoute
        exact
        path="/daily-report-admin"
        allow={[loggedIn, noFirstLogin]}
        redirectTo="/auth/login"
      >
        <BaseLayout>
          <DailyReportAdmin />
        </BaseLayout>
      </PrivateRoute>

      <PrivateRoute
        exact
        path="/management-user"
        allow={[loggedIn, noFirstLogin]}
        redirectTo="/auth/login"
      >
        <BaseLayout>
          <ManagementUser />
        </BaseLayout>
      </PrivateRoute>

      <PrivateRoute
        exact
        path="/management-agenda"
        allow={[loggedIn, noFirstLogin]}
        redirectTo="/auth/login"
      >
        <BaseLayout>
          <ManagementAgenda />
        </BaseLayout>
      </PrivateRoute>

      

      <PrivateRoute
        exact
        path="/auth/:page"
        allow={[firstLogin]}
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
