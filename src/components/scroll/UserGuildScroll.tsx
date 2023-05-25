import React from "react";
import { useQuery } from "@apollo/client";
import { FetchUserGuilds } from "../../gql/queries/users";
import InfiniteScroll from "react-infinite-scroller";
import Avatar from "@mui/material/Avatar";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import truncate from "lodash/truncate";

const UserGuildScroll = ({ parent }: { parent: React.MutableRefObject<any> }) => {
    const navigate = useNavigate();

    const {
        loading: initialLoading,
        fetchMore,
        data: { userGuilds: guilds } = {}
    } = useQuery(FetchUserGuilds,
        {
            variables: {
                auth: localStorage.getItem("kuramisaToken"),
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
                    userGuilds: {
                        data: [...prev.userGuilds.data, ...fetchMoreResult.userGuilds.data],
                        count: fetchMoreResult.userGuilds.count,
                        page: fetchMoreResult.userGuilds.page,
                        perPage: fetchMoreResult.userGuilds.perPage
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
                <Grid
                    item
                    onClick={() => navigate(`/guild/${guild.id}`)}
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
                                <Typography variant="body1">
                                    {guild.nameAcronym ? guild.nameAcronym : guild.name[0]}
                                </Typography>
                            </Avatar>
                        )}
                    </Box>
                    <div className="guild-info">
                        <h6 className="guild-name">{truncate(guild.name, { length: 22 })}</h6>
                        <p className="guild-memebers">{guild.memberCount ? guild.memberCount : "Unknown #"} Members</p>
                    </div>
                </Grid>
            ))}
        </Grid>
    </InfiniteScroll>;
};

UserGuildScroll.propTypes = {
    parent: PropTypes.object.isRequired
};

export default UserGuildScroll;