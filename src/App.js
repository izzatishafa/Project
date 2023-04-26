import { Switch, Route, Redirect} from 'react-router-dom'
import Baselayout from './Pages/BaseLayout'
import ManagementAgenda from './Pages/ManagementAgenda'
import ManagementUser from './Pages/ManagementUser'
import LoginPage from './Pages/LoginPage'
import HomeAdmin from './Pages/HomeAdmin'
import Preloader from './Components/Preloader'
import AgendaBaru from './Pages/AgendaBaru'
import DailyReportAdmin from './Pages/DailyReportAdmin'
import { Suspense } from 'react'
import { router } from './routes'
import { lazy } from 'react'
import { useState, useEffect } from 'react'
import { supabase } from './supabaseClient'
import DailyReportMagang from './Pages/DailyReportMagang'
import DailyReportPkl from './Pages/DailyReportPkl'
import LaporanMagangBootcamp from './Pages/LaporanMagangBootcamp'
import LaporanMagangPkl from './Pages/LaporanMagangPkl'




const authRoutes = [
  {
    title: "Login",
    path: "/auth/:page",
    component: lazy(() => import("./Pages/LoginPage")),
    exact: true,
  },
];

function App() {
  const { pathname } = window.location;
  const [login, setLogin] = useState()
  const BaseLayout = lazy(() => import('./Pages/BaseLayout'))
  
  useEffect(() => {
   
    supabase.auth.onAuthStateChange(async(_event, session) => {
      
      console.log("authchange",session)
      let { data, error } = await supabase
      .from("user_data")
      .select("first_login").eq('email',session.user.email);
      setLogin({...session, ...data[0]})
      console.log(data)
    })
  }, [])

  console.log(login) 


  return (
    <div className="App">
      {/* <DailyReportAdmin />
      <LaporanMagangBootcamp />
      <LaporanMagangPkl /> */} 

      <Switch>
      <Redirect from="/:url*(/+)" to={pathname.slice(0, -1)} />
            {authRoutes.map((route) => (
              <Route
                key={Array.isArray(route.path) ? route.path[0] : route.path}
                exact={route.exact}
                path={route.path}
                render={() => {
                  if (login?.access_token && !login?.first_login) {
                    return <Redirect to="/" />;
                  }
                  document.title = `Login | Kesatria Kode`;
                  return (
                    <Suspense fallback={<Preloader />}>
                      <LoginPage></LoginPage>
                    </Suspense>
                  );
                }}
              />
            ))}
        {router.map((route, i) => (
          <Route exact={route.exact} path={route.path} key={i} 
          render={() => {
            if (!login) {
              return (
                <Redirect
                  to={{
                    pathname: "/auth/login",
                    state: { returnUrl: window.location.pathname },
                  }}
                />
              );
            }
            document.title = `${route.title} | Kesatria Kode`;
            const AppLayout = BaseLayout;
            return (
              <Suspense fallback={<Preloader />}>
                <AppLayout>
                  <route.component />
                </AppLayout>
              </Suspense>
            );
          }}/>

        ))}
      </Switch>

      
      

    </div>
  );
}

export default App;
