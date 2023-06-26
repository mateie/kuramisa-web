import Typography from "@mui/material/Typography";
import AiOutlineLink from "@mui/icons-material/Link";
import styled from "@emotion/styled";
import Button from "@mui/material/Button";

const inviteURL = "https://discord.com/oauth2/authorize?client_id=969414951292788766&permissions=1634569944311&scope=bot";

const InviteFab = styled(Button)({
    position: "fixed",
    bottom: "20px",
    right: "20px",
    zIndex: 1000,
    backgroundColor: "#ff4c00",
    color: "#fff",
    textTransform: "capitalize",
    borderRadius: "50px",
    opacity: 0.8
});

const InviteButton = () => {
    return (
        <InviteFab
            variant="contained"
            color="success"
            href={inviteURL}
            startIcon={<AiOutlineLink />}
            size="large"
        >
            <Typography variant="subtitle1">
                Bot Invite
            </Typography>
        </InviteFab>
    );
};

export default InviteButton;