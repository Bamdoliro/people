import {BrowserRouter, Routes, Route} from "react-router-dom";
import Recruit from "./pages/Recruit/Recruit";
import RecruitResult from "./pages/RecruitResult/RecruitResult";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/recruit" element={<Recruit/>}/>
                <Route path="/recruit/result" element={<RecruitResult/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
