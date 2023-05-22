import { useEffect, useRef, useState } from "react";
import { Box, Divider, Grid } from "@mui/material";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import UserGuildScroll from "./scroll/UserGuildScroll";
import BotGuildScroll from "./scroll/BotGuildScroll";
import Container from "@mui/material/Container";

const Sidebar = ({ auth }: { auth: any }) => {
    const [userServers, setUserServers] = useState(false);
    const scrollParent = useRef<any>(null);

    return (
        <Box className="border-r-4 flex flex-col justify-between items-center"
            sx={{
                backgroundColor: "rgba(255, 255, 255, 0.09)",
                width: 240,
                borderColor: "#3c1f41"
            }}>
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
                sx={{ height: 831 }}
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
    auth: PropTypes.object.isRequired
};

export default Sidebar;