import HomeAdmin from './Pages/HomeAdmin';
import HomeUser from './Pages/HomeUser';
import PresensiIzin from './Pages/PresensiIzin';
import PresensiSakit from './Pages/PresensiSakit';
import Baselayout from './Pages/BaseLayout';
import AttendanceList from './Pages/AttendanceList';
import { Switch, Route } from 'react-router-dom';
import { Suspense } from 'react';
import DailyReportPkl from './Pages/DailyReportPkl';
import DailyReportMagang from './Pages/DailyReportMagang';
import LaporanMagangPkl from './Pages/LaporanMagangPkl';
import LaporanMagangBootcamp from './Pages/LaporanMagangBootcamp';
import Score from './Pages/Score';
import ReactDatePicker from './Components/DatePicker';
import Notifications from './Pages/Notifications';
import Agenda from './Pages/Agenda';
import QuickAccess from './Pages/QuickAccess';
import Calendar from './Components/Calendar';
import SearchBar from './Components/SearchBar';


function App() {
  return (
    <div className="App">
      <Baselayout>
      <LaporanMagangBootcamp />
      <LaporanMagangPkl />
      </Baselayout>

      <Switch>
        <Route></Route>
      </Switch>

    </div>
  );
}

export default App;
