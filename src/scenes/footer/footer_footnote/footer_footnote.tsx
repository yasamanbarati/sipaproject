import { Box, Container, Grid, styled } from "@mui/material"
import { TextBox } from "components/box/text_box/text_box"
import { FooterFootnoteSocialIcons } from "./footer_footnote_social_icons/footer_footnote_social_icons"

const FooterFootnoteBox = styled(Box)(({ theme }) => ({
    width: "100%",
    backgroundColor: theme.palette.footerfootnoteBG,
    minHeight: "78px",
    padding: "25px 0"
}))
const textStyle = {
    fontSize: { md: "0.96rem", sm: "1rem" },
    fontWeight: "500",
    lineHeight: "27px",
    textAlign: "right",
}
export const FooterFootnote = () => {
    return (
        <FooterFootnoteBox>
            <Container fixed>
                <Grid container
                    flexDirection={{ sm: "row", xs: "column-reverse" }}
                    justifyContent={{ sm: "space-between" }}
                    alignItems={{ sm: "flex-start", xs: "center" }} >
                    <Grid item md={10} sm={7} xs={10}>
                        <TextBox
                            text="کلیه حقوق این سایت نزدسیپا محفوظ بوده و بازنشر محتوا با ذکر منبع بلا مانع است"
                            textStyle={textStyle}
                            textColor='#fff' />
                    </Grid>
                    <Grid item sm={4} xs={8} display={{ md: "none", xs: "block" }}><FooterFootnoteSocialIcons /></Grid>
                </Grid>
            </Container>
        </FooterFootnoteBox >
    )
}
