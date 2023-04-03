import Header from "../Components/Header";
import Header2 from "../Components/Header2";
import SideBar from "../Components/SideBar";
import QuickAccess from "./QuickAccess";
import AttendanceList from "../Pages/AttendanceList";
import Notifications from "./Notifications";
import PresensiSakit from "./PresensiSakit";
import PresensiIzin from "./PresensiIzin";
import DailyReportMagang from "./DailyReportMagang";
import DailyReportPkl from "./DailyReportPkl";
import LaporanMagangPkl from "./LaporanMagangPkl";
import LaporanMagangBootcamp from "./LaporanMagangBootcamp";
import Score from "./Score";
import Agenda from "./Agenda";




const HomeUser = () => {
  return (
    <>
      <div className="flex flex-row">
        <Header2 />
        <Header />
      </div>
      <div className="flex flex-row">
        <SideBar />
        <QuickAccess />
      </div>
    </>
  );
};

export default HomeUser
