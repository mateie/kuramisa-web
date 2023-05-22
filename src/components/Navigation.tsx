import { useNavigate } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import ProfileButton from "./user/ProfileButton";

import LoginIcon from "@mui/icons-material/Login";
import SpokeIcon from "@mui/icons-material/Spoke";


import { Bot } from "../vite-env";
import { Box, Grid } from "@mui/material";

const authUrl =
    process.env.NODE_ENV === "production"
        ? "https://discord.com/api/oauth2/authorize?client_id=969414951292788766&redirect_uri=https%3A%2F%2Fkuramisa.com%2Flogin&response_type=code&scope=guilds%20identify"
        : "https://discord.com/api/oauth2/authorize?client_id=969414951292788766&redirect_uri=http%3A%2F%2Flocalhost%3A5173%2Flogin&response_type=code&scope=guilds%20identify";

const inviteUrl =
    "https://discord.com/oauth2/authorize?client_id=969414951292788766&permissions=1634569944311&scope=bot";

const Navigation = ({ bot, auth }: { bot: Bot; auth: any }) => {
    const navigate = useNavigate();

    return (
        <AppBar
            position="static"
            sx={{
                padding: "10px 20px",
                flexDirection: "row",
                justifyContent: "space-between"
            }}
        >
            <Box display="flex" alignItems="center">
                <img src={bot.avatarURL} alt="" width={48} />
                <Typography
                    variant="subtitle1"
                    sx={{
                        mt: 1,
                        ml: 0.5,
                        cursor: "pointer",
                        fontWeight: 700
                    }}
                    onClick={() => navigate("/")}
                >
                    {bot.username}
                </Typography>
            </Box>
            <Box display="flex" alignItems="flex-end">
                {auth ? (
                    <ProfileButton auth={auth} />
                ) : (
                    <Grid container spacing={1}>
                        <Grid item>
                            <Button
                                color="warning"
                                variant="outlined"
                                onClick={() => window.open(inviteUrl, "_blank")}
                                startIcon={<SpokeIcon />}
                            >
                                <Typography className="capitalize" variant="body1">
                                    Invite
                                </Typography>
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button
                                color="success"
                                variant="outlined"
                                onClick={() => window.open(authUrl, "_self")}
                                endIcon={<LoginIcon />}
                            >
                                <Typography className="capitalize" variant="body1">
                                    Login
                                </Typography>
                            </Button>
                        </Grid>
                    </Grid>
                )}
            </Box>
        </AppBar>
    );
};

Navigation.propTypes = {
    bot: PropTypes.object.isRequired,
    auth: PropTypes.object
};

export default Navigation;
