import { useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";

import Avatar from "@mui/material/Avatar";
import InfiniteScroll from "react-infinite-scroller";

import { FetchGuilds } from "../../gql/queries/guilds";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { MutableRefObject } from "react";

import truncate from "lodash/truncate";
import { Guild } from "../../vite-env";

const BotGuildScroll = ({ parent }: { parent: MutableRefObject<any> }) => {
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
            {guilds.data.map((guild: Guild, id: any) => (
                <Grid
                    item
                    onClick={() => navigate(`/server/${guild.id}`)}
                    className="flex justify-center items-center p-2 guild"
                    key={id}
                >
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
                        <h6 className="guild-name">{truncate(guild.name, { length: 22 })}</h6>
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

