import { Box, styled } from "@mui/material"
import { Twitter } from "@mui/icons-material"
import { ReactComponent as Messenger } from 'setup/assets/image/MessengerSVG.svg'
import { ReactComponent as Linkedin } from 'setup/assets/image/LinkedinSVG.svg'
import { ReactComponent as Twoo } from 'setup/assets/image/TwooSVG.svg'

const SocialIconsBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: "40px",
    "svg": {
        marginLeft: "0px",
        width: "30px!important",
        height: "30px!important",
        "path": {
            fill: "#fff",
            transition: "0.8s ease",
        },
        "&:hover path": {
            fill: "rgba(249, 192, 60, 1)",
            boxShadow: "0px 4px 6px rgba(249, 192, 60, 0.26)",
        },
        [theme.breakpoints.down("sm")]: {
            margin: "0 8px"
        }
    }
}))
export const FooterFootnoteSocialIcons = () => {
    return (
        <SocialIconsBox>
            <Linkedin />
            <Messenger />
            <Twitter />
            <Twoo />
        </SocialIconsBox>
    )
}