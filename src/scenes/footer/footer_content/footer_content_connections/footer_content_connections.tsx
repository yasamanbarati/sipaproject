import { Box, Grid, IconButton, InputBase, Paper, styled } from "@mui/material"
import { TextBox } from "components/box/text_box/text_box"
import { FooterContentConnectionsSocialIcons } from "./footer_content_connections_social_icons/footer_content_connections_social_icons"
import { West } from "@mui/icons-material"

const titleStyle = {
    fontSize: {
        xs: "1.2rem",
    },
    fontWeight: "700",
    textAlign: "right",
    marginBottom: "30px",
}

const PaperForm = styled(Paper)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    width: '300px',
    [theme.breakpoints.down("md")]: {
        width: '80%',
    },
    [theme.breakpoints.down("sm")]: {
        width: '100%',
    },
    height: "50px",
    borderRadius: "7px",
    marginBottom: "40px",
    "& .MuiInputBase-root": {
        flex: 1,
        padding: '10px 21px 10px 5px'
    },
    "& .MuiButtonBase-root": {
        borderRadius: "7px 0 0 7px",
        color: "#fff",
        backgroundColor: "#F9C13D",
        height: "100%",
        padding: '10px'
    }
}))
export const FooterContentConnections = () => {
    return (
        <Grid
            container
            md={4}
            xs={10}
            mt={5}
            display="flex"
            flexDirection="column">
            <Box display={{ md: "block", xs: "none" }}>
                <TextBox text="همراه ما باشید!" variant='h2' textColor="#F9C13D" textStyle={titleStyle} />
                <FooterContentConnectionsSocialIcons />
            </Box>
            <TextBox text="عضو خبرنامه ما شوید" variant='h2' textColor="#F9C13D" textStyle={titleStyle} />
            <PaperForm>
                <InputBase
                    placeholder="info@gmial.com"
                    inputProps={{ 'aria-label': 'info@gmial.com' }}
                />
                <IconButton type="button" aria-label="send">
                    <West />
                </IconButton>
            </PaperForm>
        </Grid>
    )
}
