import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { HomePage, LearnMorePage, LoginPage, SignupPage, UserProfile } from "../pages";
import {About} from "../components";
import DashboardLayout from "./DashboardLayout";
import Layout from "./MainLayout";
import Overview from "../components/OverviewSection";
import AttendanceSummary from "../components/AttendanceSummary";
import MonthlyAttendance from "../components/MonthlyAttendance";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
        <Route path="/" element={<Layout/>}>
            <Route index element={<HomePage/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='login' element={<LoginPage/>}/>
            <Route path="signup" element = {<SignupPage/>}/>
            <Route path="learn-more" element={<LearnMorePage/>}/>
        </Route>
        <Route path="/dashboard/" element={<DashboardLayout/>}>
            <Route path="profile" element={<UserProfile/>}/>
            <Route path="overview" element={<Overview/>}/>
            <Route path="summary" element={<AttendanceSummary/>}/>
            <Route path="monthly" element={<MonthlyAttendance/>}/>
        </Route>
        
        </>
    )
)

function MainRoutes(){
    return(
        <RouterProvider router={router}/>
    )
}

export default MainRoutes;
