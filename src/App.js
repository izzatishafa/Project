import HomeAdmin from './Pages/HomeAdmin';
import HomeUser from './Pages/HomeUser';
import PresensiIzin from './Pages/PresensiIzin';
import PresensiSakit from './Pages/PresensiSakit';
import Baselayout from './Pages/BaseLayout';
import AttendanceList from './Components/AttendanceList';
import { Switch, Route } from 'react-router-dom';
import { Suspense } from 'react';

function App() {
  return (
    <div className="App">
      {/* <HomeAdmin /> */}
      {/* <HomeUser /> */}
      {/* <AttendanceList /> */}
      {/* <Baselayout> */}
      {/* <PresensiIzin /> */}
      {/* </Baselayout> */}
      {/* <Switch>
        <Route></Route>
      </Switch> */}
      {/* <PresensiIzin /> */}
      <PresensiSakit />
    </div>
  );
}

export default App;
