import { useRef, useState } from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import UserGuildScroll from "./scroll/UserGuildScroll";
import BotGuildScroll from "./scroll/BotGuildScroll";
import Container from "@mui/material/Container";

import "../assets/less/sidebar.less";

const Sidebar = ({ auth }: { auth: any }) => {
    const [userServers, setUserServers] = useState(false);
    const scrollParent = useRef<any>(null);

    return (
        <Box className="flex flex-col justify-between items-center h-full w-64 sidebar">
            {auth && (
                userServers ? (
                    <Button
                        variant="outlined"
                        sx={{ backgroundColor: "#3c1f41" }}
                        onClick={() => setUserServers(false)}
                    >
                        Your Servers
                    </Button>
                ) : (
                    <Button
                        variant="outlined"
                        color="success"
                        onClick={() => setUserServers(true)}
                    >
                        Bot&apos;s Servers
                    </Button>
                )
            )}
            <Divider flexItem sx={{ my: 1 }} />
            <Container
                maxWidth="sm"
                ref={scrollParent}
                sx={{ height: auth ? "calc(100vh - 137px)" : "calc(100vh - 85px)" }}
                className="overflow-y-auto overflow-x-hidden"
            >
                {userServers && auth ? (
                    <UserGuildScroll parent={scrollParent} />
                ) : (
                    <BotGuildScroll parent={scrollParent} />
                )}
            </Container>
        </Box>
    );
};

Sidebar.propTypes = {
    auth: PropTypes.object
};

export default Sidebar;