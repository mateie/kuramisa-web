import PropTypes from "prop-types";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import "../assets/less/guild.less";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { Guild } from "../vite-env";

const GuildInfo = ({ guild }: { guild: Guild }) => {

    return (
        <Container maxWidth="sm">
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                className="guild-card"
                spacing={2}
            >
                <Grid item>
                    {guild.iconURL ? (
                        <img src={guild.iconURL} alt={guild.name} className="guild-icon" />
                    ) : (
                        <Avatar
                            sx={{ color: "#fff" }}
                            className="guild-acronym"
                        >
                            <Typography
                                variant="h2">
                                {guild.nameAcronym ? guild.nameAcronym : guild.name[0]}
                            </Typography>
                        </Avatar>
                    )}
                </Grid>
                <Grid item className="guild-name">
                    <Typography variant="h6" gutterBottom>
                        {guild.name}
                    </Typography>
                </Grid>
                {guild.description && (
                    <Grid item className="guild-description">
                        <Typography align="center" variant="subtitle1" gutterBottom>
                            {guild.description}
                        </Typography>
                    </Grid>
                )}
            </Grid>
        </Container>
    );
};

GuildInfo.propTypes = {
    guild: PropTypes.object.isRequired
};

export default GuildInfo;