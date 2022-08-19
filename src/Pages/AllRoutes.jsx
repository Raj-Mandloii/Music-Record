import { Route, Routes } from "react-router-dom"
import SingleMusicRecord from "./SingleMusicRecords"
import EditMusicRecord from "./EditMusicRecord"
import Login from "./Login"
import Home from "./Home"
import ReqAuth from "../Components/ReqAuth"

export default function AllRoutes() {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/music/:id" element={
                <ReqAuth>
                    <SingleMusicRecord />
                </ReqAuth>
            } />
            <Route path="/music/:id/edit" element={<EditMusicRecord />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<h3>Page Not Found</h3>} />
        </Routes>

    )
}