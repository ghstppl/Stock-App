import { Routes, Route } from "react-router-dom"
import LandingPage from "./screens/LandingPage/LandingPage.jsx"
import Dashboard from "./screens/Dashboard/Dashboard.jsx"
export default function App(){
    return(
        <Routes>
            <Route index path="/" element={<LandingPage />}/>
            <Route path="/dashboard" element={<Dashboard />}/>
        </Routes>
    )
}