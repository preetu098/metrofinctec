import React from "react";
import ReactDOM from "react-dom";
import Button from "@mui/material/Button";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import NoPage from "./pages/Nopage";

function User() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Home />}></Route>
                    <Route exact path="/about" element={<About />}></Route>
                    <Route
                        exact
                        path="/contact"
                        element={<ContactUs />}
                    ></Route>
                    <Route path="*" element={<NoPage />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default User;

// DOM element
if (document.getElementById("user")) {
    ReactDOM.render(<User />, document.getElementById("user"));
}
