import { useQuery } from "@apollo/client";
import { FetchCommands, FetchCategories } from "../gql/queries/client";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import capitalize from "lodash/capitalize";

const CommandList = () => {
    const { loading, error, data: { commands } = {} } = useQuery(FetchCommands);
    const { data: { categories } = {} } = useQuery(FetchCategories);

    console.log(categories);

    return !error && !loading ? (
        <Container maxWidth="xl" className="commands">
            <Container maxWidth="sm">
                <Typography align="center" variant="h5">
                    Commands
                </Typography>
                <Typography
                    variant="h5"
                    align="center"
                    sx={{ fontSize: "0.8rem" }}
                >
                    {categories.length} Categories - {commands.length} Commands
                </Typography>
                <Typography
                    variant="h5"
                    align="center"
                    sx={{ fontSize: "0.5rem" }}
                >
                    (WIP)
                </Typography>
            </Container>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                {categories && categories.map((category: string) => (
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={4}
                        lg={3}
                        key={category}
                        className="command-card"
                    >
                        <Typography
                            variant="h6"
                            align="center"
                        >
                            {capitalize(category)}
                        </Typography>
                    </Grid>
                ))}
            </Grid>
        </Container>
    ) : <></>;
};

export default CommandList;