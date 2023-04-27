import { lazy } from "react"


{/* <Switch>
          <Route exact path="/" component={QuickAccess} />
          <Route path="/attendance-list" component={AttendanceList} />
          <Route path="/daily-report-magang" component={DailyReportMagang} />
          <Route path="/score" component={Score} />
          <Route path="/notifications" component={Notifications} />
          <Route path="/agenda" component={Agenda} />
        </Switch> */}


export const router = [
    {
        title: "Notifications",
        path: "/notifications",
        component: lazy(() => import("./Pages/Notifications")),
        exact: true
    },
    {
        title: "Agenda",
        path: "/agenda",
        component: lazy(() => import("./Pages/Agenda")),
        exact: true
    },
    {
        title: "Quick Access",
        path: "/",
        component: lazy(() => import("./Pages/QuickAccess")),
        exact: true
    },
    {
        title: "Attendance List",
        path: "/attendance-list",
        component: lazy(() => import("./Pages/AttendanceList")),
        exact: true
    },
    {
        title: "Daily Report Magang",
        path: "/daily-report-magang",
        component: lazy(() => import("./Pages/DailyReportMagang")),
        exact: true
    },
    {
        title: "Score",
        path: "/score",
        component: lazy(() => import("./Pages/Score")),
        exact: true
    },
    {
        title: "Laporan Magang Bootcamp",
        path: "/laporan-magang-bootcamp",
        component: lazy(() => import("./Pages/LaporanMagangBootcamp")),
        exact: true
    },
]