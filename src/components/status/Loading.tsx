import { Box } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

const Loading = () => {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                height: "90vh",
            }}
        >
            <img
                alt=""
                src="./logo.png"
                style={{ width: "64px", height: "auto", position: "absolute" }}
            />
            <CircularProgress size={90} color="warning" />
        </Box>
    );
};

export default Loading;
