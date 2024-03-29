import gql from "graphql-tag";

export const FetchClient = gql`
    {
        client
    }
`;

export const FetchClientUser = gql`
    {
        clientUser
    }
`;

export const FetchCommands = gql`
    {
        commands
    }
`;

export const FetchCategories = gql`
    {
        categories
    }
`;