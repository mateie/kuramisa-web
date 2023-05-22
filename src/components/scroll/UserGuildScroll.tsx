import React from "react";
import { useQuery } from "@apollo/client";
import { FetchUserGuilds } from "../../gql/queries/users";
import InfiniteScroll from "react-infinite-scroller";
import Avatar from "@mui/material/Avatar";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { Box, Grid } from "@mui/material";

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
                <Grid item className="guild" key={id}>
                    <Box className="guild-icon">
                        {guild.iconURL ? (
                            <Avatar src={guild.iconURL} />
                        ) : (
                            <Avatar>{guild.name[0]}</Avatar>
                        )}

                    </Box>
                    <Box className="justify-center">
                        <h6 className="guild-name" onClick={() => navigate(`/guild/${guild.id}`)}>{guild.name}</h6>
                        <p className="guild-members">{guild.memberCount ? guild.memberCount : "?"} Members</p>
                    </Box>
                </Grid>
            ))}
        </Grid>
    </InfiniteScroll>;
};

UserGuildScroll.propTypes = {
    parent: PropTypes.object.isRequired
};

export default UserGuildScroll;