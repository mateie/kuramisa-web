import { useContext, useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { Route, Routes } from "react-router-dom";

import { FetchClientUser } from "./gql/queries/client";

import BotLoading from "./components/status/Loading";
import BotOffline from "./components/status/Offline";
import UnderDevelopment from "./components/status/UnderDevelopment";

import Container from "@mui/material/Container";

import Navigation from "./components/Navigation";
import Login from "./pages/Login";
import Logout from "./pages/Logout";

import { AuthContext } from "./providers/AuthProvider";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import { Box, Grid } from "@mui/material";

const { VITE_UNDER_DEV } = import.meta.env;

const App = () => {
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);
    const { auth } = useContext(AuthContext);

    useEffect(() => {
        const handleResize = () => setWindowHeight(window.innerHeight);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const {
        loading,
        error: botError,
        data: { clientUser: bot } = {}
    } = useQuery(FetchClientUser, { pollInterval: 100000 });

    if (VITE_UNDER_DEV === "true") return <UnderDevelopment />;

    if (loading) return <BotLoading />;
    if (botError) return <BotOffline />;

    return (
        <Grid container flexDirection="column">
            <Grid item>
                <Navigation bot={bot} auth={auth} />
            </Grid>
            <Grid container justifyItems="center">
                <Grid item>
                    <Sidebar auth={auth} />
                </Grid>
                <Grid item className="p-20">
                    <Container>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/logout" element={<Logout />} />
                        </Routes>
                    </Container>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default App;
