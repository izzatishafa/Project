import { Switch, Route, Redirect} from 'react-router-dom'
import Baselayout from './Pages/BaseLayout'
import ManagementAgenda from './Pages/ManagementAgenda'
import ManagementUser from './Pages/ManagementUser'
import LoginPage from './Pages/LoginPage'
import Preloader from './Components/Preloader'
import { Suspense } from 'react'
import { router } from './routes'
import { lazy } from 'react'
import { useState, useEffect } from 'react'
import { supabase } from './supabaseClient'

const authRoutes = [
  {
    title: "Login",
    path: "/login",
    component: lazy(() => import("./Pages/LoginPage")),
    exact: true,
  },
];

function App() {
  const { pathname } = window.location;
  const [login, setLogin] = useState()
  const BaseLayout = lazy(() => import('./Pages/BaseLayout'))
  
  useEffect(() => {
    const checkLoginSession = async () => {
      const session = await supabase.auth.getSession()
      console.log(session.data)
      return !!session.data.session
    }
    setLogin(checkLoginSession())
  }, [])


  return (
    <div className="App">
      <Switch>
      <Redirect from="/:url*(/+)" to={pathname.slice(0, -1)} />
            {authRoutes.map((route) => (
              <Route
                key={Array.isArray(route.path) ? route.path[0] : route.path}
                exact={route.exact}
                path={route.path}
                render={() => {
                  if (login) {
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
                    pathname: "/login",
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
