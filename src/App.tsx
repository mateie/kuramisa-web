import { useContext } from "react";
import { useQuery } from "@apollo/client";
import { Route, Routes } from "react-router-dom";

import Stack from "@mui/material/Stack";

import { FetchClientUser } from "./gql/queries/client";

import BotLoading from "./components/status/Loading";
import BotOffline from "./components/status/Offline";
import UnderDevelopment from "./components/status/UnderDevelopment";

import Container from "@mui/material/Container";

import Navigation from "./components/Navigation";
import Login from "./pages/Login";
import Logout from "./pages/Logout";

import { AuthContext } from "./providers/AuthProvider";
import Home from "./pages/Home";
import Guild from "./pages/Guild";
import Sidebar from "./components/Sidebar";

const { VITE_UNDER_DEV } = import.meta.env;

const App = () => {
    const { auth } = useContext(AuthContext);

    const {
        loading,
        error: botError,
        data: { clientUser: bot } = {}
    } = useQuery(FetchClientUser, { pollInterval: 100000 });

    if (VITE_UNDER_DEV === "true") return <UnderDevelopment />;

    if (loading) return <BotLoading />;
    if (botError) return <BotOffline />;

    return (
        <>
            <Sidebar auth={auth} />
            <Container disableGutters={true} maxWidth={false}>
                <Navigation bot={bot} auth={auth} />
                <Stack
                    direction="row"
                    spacing={4}
                >
                    <Container maxWidth="xl" sx={{ padding: "40px" }}>
                        <Routes>
                            <Route path="/" element={<Home bot={bot} />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/logout" element={<Logout />} />
                            <Route path="/server">
                                <Route path=":guildId" element={<Guild />} />
                            </Route>
                        </Routes>
                    </Container>
                </Stack>
            </Container>
        </>
    );
};

export default App;
