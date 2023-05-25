import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import PropTypes from "prop-types";
import { Bot } from "../vite-env";

import "../assets/less/bot.less";

const Home = ({ bot }: { bot: Bot }) => {
    return (
        <Container maxWidth="xl">
            <Container maxWidth="sm" className="bot-card">
                <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                >
                    <Grid item xs={12}>
                        <img src={bot.avatarURL} alt={bot.username} />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                    >
                        <Typography
                            variant="h4"
                        >
                            {bot.username}
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        className="bot-description"
                    >
                        <Typography
                            variant="h6"
                        >
                            {bot.description}
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Container>
    );
};

Home.propTypes = {
    bot: PropTypes.object.isRequired
};

export default Home;