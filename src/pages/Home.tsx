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
             
            </Container>
        </Container>
    );
};

Home.propTypes = {
    bot: PropTypes.object.isRequired
};

export default Home;