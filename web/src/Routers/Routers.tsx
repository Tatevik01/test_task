import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Congrats from "../Components/Congrats";
import Main from "../Components/Main";
import NotFoundPage from "../Components/NotFound";

const Routers = () => {
    return (
        <Router>
            <Routes>
                <Route path="/contacts" element={<Main />} />
                <Route path="/page-not-found" element={<NotFoundPage />} />
                <Route path="/congrats" element={<Congrats/>}/>

                <Route
                    path="/"
                    element={
                        <Navigate to="/contacts" replace />
                    }
                />
            </Routes>
        </Router >
    );
}

export default Routers;