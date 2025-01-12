
import Toaster  from "react-hot-toast";
import HomePage from "./HomePage.jsx";

import {BrowserRouter, Routes, Route } from "react-router";

const Application = ()=>{

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <HomePage />}> </Route>
            </Routes>
        </BrowserRouter>
       
    )
}

export default Application;