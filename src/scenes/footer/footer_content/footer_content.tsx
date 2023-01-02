import { Box, Container, Grid, styled, IconButton } from "@mui/material"
import { FooterContentConnections } from "./footer_content_connections/footer_content_connections"
import { FooterContentLinks } from "./footer_content_link/footer_content_links"
import { FooterContentLogo } from "./footer_content_logo/footer_content_logo"
import { ArrowUpward } from "@mui/icons-material"

const FooterContentBox = styled(Box)(({ theme }) => ({
  width: "100%",
  Height: "auto",
  "& .BackUpBTN": {
    position: "absolute",
    width: "52px",
    height: "52px",
    background: theme.palette.orange.main,
    boxShadow: "0px 10px 16px rgba(249, 192, 60, 0.35)",
    top: "-87px",
    left: "65px",
    [theme.breakpoints.down("tabletL")]: {
      top: "-50px",
    },
    color: "#fff"
  }
}))
export const FooterContent = () => {
  return (
    <FooterContentBox>
      <Container fixed sx={{
        position: "relative"
      }}>
        <IconButton aria-label="Up" size="large" className="BackUpBTN">
          <ArrowUpward />
        </IconButton>
        <FooterContentLogo />
        <Grid container justifyContent='center'>
          <FooterContentLinks />
          <FooterContentConnections />
        </Grid>
      </Container>
    </FooterContentBox>
  )
}
