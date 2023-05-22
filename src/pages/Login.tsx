import { useContext } from "react";
import { Buffer } from "buffer";
import { Navigate } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { LoginUser } from "../gql/auth";
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {
    const { auth, login } = useContext(AuthContext);

    const code = window.location.search.split("=")[1];

    const { data, error } = useQuery(LoginUser, {
        variables: { code: Buffer.from(code).toString("base64") },
    });

    if (auth) return <Navigate to="/" replace={true} />;
    if (error) {
        return <Navigate to="/" replace={true} />;
    }

    if (data) {
        login(data.login);
        return <Navigate to="/" replace={true} />;
    }

    return <></>;
};

export default Login;
