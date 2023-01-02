import { Grid, styled, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import ContentButton from "components/button/content_button/content_button"
import { textStyle } from "services/style/style"
import { useAppSelector } from "setup/redux/react-hooks"

interface props {
  GridDirection?: any
  LinksDirection?: any
  GridWrap?: any
  LinksWrap?: any
}
const LinkStyle = styled(Link)(({ theme }) => ({
  transition: "0.7s ease",
  color: "#444444",
  textDecoration: "none",
  display: "flex",
  justifyContent: "center",
  "& .css-we5jzv-MuiTypography-root": {
    color: "#000",
  },
  "&:hover": {
    color: "#F9C13D",
  },
  [theme.breakpoints.down("md")]: {
    position: "relative",
    margin: "20px 0",
    "&::after": {
      content: `''`,
      position: "absolute",
      width: "183px",
      right: "0",
      bottom: "-20px",
      height: "1px",
      backgroundColor: " rgba(0, 0, 0, 0.1)",
    },
  },
}))
const ContentButtonStyle = {
  boxShadow: "0px 20px 33px rgba(255, 196, 38, 0.45)",
  borderRadius: "13px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "18px 21px",
  gap: "10px",
  width: "100%",
  height: "100%",
  fontSize: {
    xs: "0.8rem",
    sm: "0.85rem",
    md: "0.86rem",
    lg: "1rem"
  },
  fontWeight: "600",
  whiteSpace: "nowrap",
  "&:hover": {
    boxShadow: "0px 15px 10px rgba(255, 196, 38, 0.45)",
  }
}

export const NavbarLink = ({
  GridDirection,
  LinksDirection,
  GridWrap,
  LinksWrap,
}: props) => {
  const LinksItems = useAppSelector(state => state.home.NavbarLinks)

  return (
    <Grid
      container
      spacing={0}
      direction={GridDirection}
      flexWrap={GridWrap}
      justifyContent="space-between"
      height="100%"
      alignItems={{ xs: "flex-start", md: "center" }}>
      <Grid
        item
        lg={7}
        md={8}
        direction={LinksDirection}
        flexWrap={LinksWrap}
        sx={{
          display: "flex",
          justifyContent: "start",
          alignItems: { xs: "flex-start", md: "center" },
        }}>
        {LinksItems.map((itemLink, index) => (
          <Grid item md={2}>
            <LinkStyle to={itemLink.path}>
              <Typography sx={textStyle}>{itemLink.name}</Typography>
            </LinkStyle>
          </Grid>
        ))}
      </Grid>
      <Grid item lg={2} md={3} height={{ xs: "50px" }} marginBottom={{ xs: "30px", md: "auto" }}>
        <ContentButton
          Text="همین الان ثبت نام کن"
          sxStyle={ContentButtonStyle}
        />
      </Grid>
    </Grid>
  )
}
