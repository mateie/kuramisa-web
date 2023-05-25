import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";

const UnderDevelopment = () => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "90vh"
            }}
        >
            <img
                alt=""
                src="/logo.png"
                style={{ width: "64px", height: "auto" }}
            />
            <Typography variant="h6">Bot is under development</Typography>
            <Typography>Please check back later</Typography>
        </Box>
    );
};

export default UnderDevelopment;
