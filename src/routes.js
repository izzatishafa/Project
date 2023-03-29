import { lazy } from "react"
import HomeUser from "./Pages/HomeUser"


const router = [
    {
        title: "User",
        path: "/user",
        component: lazy(() => import("./Pages/HomeUser")),
        exact: true
    },
    {
        title: "Admin",
        path: "/admin",
        component: lazy(() => import("./Pages/HomeAdmin")),
        exact: true
    }
]