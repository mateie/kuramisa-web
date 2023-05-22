import { useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";

import Avatar from "@mui/material/Avatar";
import InfiniteScroll from "react-infinite-scroller";

import { FetchGuilds } from "../../gql/queries/guilds";
import PropTypes from "prop-types";
import { Box, Divider, Grid } from "@mui/material";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const BotGuildScroll = ({ parent }: { parent: React.MutableRefObject<any> }) => {
    const navigate = useNavigate();

    const { data: { guilds } = {}, fetchMore, loading: initialLoading } = useQuery(FetchGuilds, {
        variables: {
            perPage: 9
        }
    });

    const loadMore = (page: number) => {
        fetchMore({
            variables: {
                page
            },
            updateQuery: (prev, { fetchMoreResult }) => {
                if (!fetchMoreResult) return prev;
                return Object.assign({}, prev, {
                    guilds: {
                        data: [...prev.guilds.data, ...fetchMoreResult.guilds.data],
                        count: fetchMoreResult.guilds.count,
                        page: fetchMoreResult.guilds.page,
                        perPage: fetchMoreResult.guilds.perPage
                    }
                });
            }
        });
    };

    if (initialLoading) return <></>;

    return <InfiniteScroll
        pageStart={0}
        loadMore={loadMore}
        hasMore={guilds.data.length < guilds.count}
        useWindow={false}
        getScrollParent={() => parent.current}
    >
        <Grid container spacing={2}>
            {guilds.data.map((guild: any, id: any) => (
                <Grid item className="flex justify-center items-center p-2" key={id}>
                    <Box>
                        {guild.iconURL ? (
                            <Avatar src={guild.iconURL} />
                        ) : (
                            <Avatar
                                sx={{ color: "#fff" }}
                            >
                                <Typography
                                    variant="body1">
                                    {guild.nameAcronym ? guild.nameAcronym : guild.name[0]}
                                </Typography>
                            </Avatar>
                        )}
                    </Box>
                    <div className="guild-info">
                        <h6 className="guild-name" onClick={() => navigate(`/guild/${guild.id}`)}>{guild.name}</h6>
                        <p className="guild-members">{guild.memberCount} Members</p>
                    </div>
                </Grid>
            ))}
        </Grid>
    </InfiniteScroll>;
};

BotGuildScroll.propTypes = {
    parent: PropTypes.object.isRequired
};

export default BotGuildScroll;

