import React from "react";
import "./index.css";
import App from "./App";
import Login from "./Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import SignUp from './SignUp';


function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {"copyright© "}
            hhhhhh , {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

class AppRouter extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Router>
                        <Routes>
                            <Route path="/login" element={<Login />}>
                            </Route>
                            <Route path="/signup" element={<SignUp />}>
                            </Route>
                            <Route path="/" element={<App />}>
                            </Route>
                        </Routes>
                    </Router>
                    <Box mt={5}>
                        <Copyright />
                    </Box>
                </div>
            </div>
        );
    }
}

export default AppRouter;