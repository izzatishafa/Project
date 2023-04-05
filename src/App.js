import { Switch, Route } from 'react-router-dom'
import Baselayout from './Pages/BaseLayout'
import AttendanceList from './Pages/AttendanceList'
import DailyReportPkl from './Pages/DailyReportPkl'
import Score from './Pages/Score'
import Notifications from './Pages/Notifications'
import Agenda from './Pages/Agenda'
import QuickAccess from './Pages/QuickAccess'
import PresensiSakit from './Pages/PresensiSakit'
import PresensiIzin from './Pages/PresensiIzin'
import LaporanMagangBootcamp from './Pages/LaporanMagangBootcamp'
import LaporanMagangPkl from './Pages/LaporanMagangPkl'
import HomeAdmin from './Pages/HomeAdmin'
import Agenda2 from './Pages/Agenda2'
import ManagementAgenda from './Pages/ManagementAgenda'
import AgendaBaru from './Pages/AgendaBaru'
import ManagementUser from './Pages/ManagementUser'
import UserBaru from './Pages/UserBaru'



function App() {
  return (
    <div className="App">
      <Baselayout>
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



      </Baselayout>
    </div>
  );
}

export default App;
