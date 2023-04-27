import React, { useEffect,useState, lazy } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import { supabase } from "../supabaseClient";

const BaseLayout = lazy(() => import("../Pages/BaseLayout"));
const Page404 = lazy(() => import("../Pages/404"));
const Login = lazy(() => import("../Pages/LoginPage"));
const Home = lazy(() => import("../Pages/QuickAccess"));

const RouteStacks = () => {
  const [localSession, setLocalSession] = useState({});
  useEffect(() => {
    supabase.auth.onAuthStateChange(async (_event, session) => {
      let { data, error } = await supabase
        .from("user_data")
        .select("first_login")
        .eq("email", session.user.email);
      const rest = { ...session, ...data[0] };
      setLocalSession(rest);
    });
  }, []);
  const loggedIn = async () => {
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
        redirectTo="/login"
      >
        <BaseLayout>
          <Home />
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
