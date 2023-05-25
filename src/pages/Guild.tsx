import { useParams } from "react-router-dom";
import { FetchGuild } from "../gql/queries/guilds";

import { useQuery } from "@apollo/client";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";

import GuildInfo from "../components/GuildInfo";

import { TbError404 } from "react-icons/tb";
import Grid from "@mui/material/Grid";

const Guild = () => {
    const { guildId } = useParams();

    const { loading, error, data: { guild } = {} } = useQuery(FetchGuild, {
        variables: {
            guildId
        }
    });

    return (
        <Container maxWidth="xl">
            {loading && (
                <Container
                    sx={{ backgroundColor: "#202020", padding: "10px", borderRadius: "15px" }}
                    maxWidth="xs"
                >
                    <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <CircularProgress color="warning" sx={{ marginBottom: "5px" }} />
                        <Typography align="center" variant="h5">
                            Loading Server...
                        </Typography>
                    </Grid>
                </Container>
            )}
            {error && (
                <Container
                    sx={{ backgroundColor: "#202020", padding: "10px", borderRadius: "15px" }}
                    maxWidth="xs"
                >
                    <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <TbError404 size="4em" title="Server not found" color="red" />
                        <Typography align="center" variant="h5">
                            {error.message}
                        </Typography>
                    </Grid>
                </Container>
            )}
            {guild && <GuildInfo guild={guild} />}
        </Container>
    );
};

export default Guild;