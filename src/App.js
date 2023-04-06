import { Switch, Route } from 'react-router-dom'
import Baselayout from './Pages/BaseLayout'
import PresensiSakit from './Pages/PresensiSakit'
import PresensiIzin from './Pages/PresensiIzin'
import LaporanMagangBootcamp from './Pages/LaporanMagangBootcamp'
import LaporanMagangPkl from './Pages/LaporanMagangPkl'
import ManagementAgenda from './Pages/ManagementAgenda'
import ManagementUser from './Pages/ManagementUser'
import UserBaru from './Pages/UserBaru'
import AgendaBaru from './Pages/AgendaBaru'
import LoginPage from './Pages/LoginPage'



function App() {
  return (
    <div className="App">
      {/* <Baselayout> */}
        {/* <Switch>
          <Route exact path="/" component={QuickAccess} />
          <Route path="/attendance-list" component={AttendanceList} />
          <Route path="/daily-report-magang" component={DailyReportMagang} />
          <Route path="/score" component={Score} />
          <Route path="/notifications" component={Notifications} />
          <Route path="/agenda" component={Agenda} />
        </Switch> */}
        <PresensiSakit />
        <PresensiIzin />


        {/* <ManagementAgenda />
        <ManagementUser /> */}

        {/* </Baselayout> */}
        <LoginPage />
    </div>
  );
}

export default App;
