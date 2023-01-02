import { Box, styled } from "@mui/material"
import { Introduction } from "components/introduction/introduction"
import { textStyle, titleStyle } from "services/style/style"
import { ApplicationRoadMap } from "./application_road_map/application_road_map"
import { useAppSelector } from "setup/redux/react-hooks"

const IntroducingApplicationBox = styled(Box)(({ theme }) => ({
  position: "relative",
  height: "auto",
  minHeight: "1200px",
  [theme.breakpoints.down("tabletL")]: {
    minHeight: "auto",
  },
  width: "100%",
  margin: "50px 0",
  zIndex: "3",
  "& .css-ssxo1i-MuiGrid-root": {
    alignItems: "flex-start",
  },
  "& .css-scgvmd-MuiGrid-root": {
    position: "relative",
    display: "flex",
    justifyContent: "flex-end",
    [theme.breakpoints.up("tabletL")]: {
      flexBasis: "64%",
      maxWidth: "64%",
    },
    [theme.breakpoints.down("tabletL")]: {
      justifyContent: "flex-start",
    },
    "&::before": {
      content: `""`,
      position: "absolute",
      zIndex: "0",
      [theme.breakpoints.up('xs')]: {
        width: "280px",
        height: "280px",
        top: "40px",
      },
      [theme.breakpoints.up('mobileM')]: {
        width: "320px",
        height: "320px",
        left: "18%",
      },
      [theme.breakpoints.down('mobileL')]: {
        left: "8%",
      },
      [theme.breakpoints.up('sm')]: {
        width: "400px",
        height: "400px",
        left: "16%",
      },
      [theme.breakpoints.up("tabletL")]: {
        width: "350px",
        height: "350px",
        left: "0",
        top: "75px",
      },
      [theme.breakpoints.up('md')]: {
        width: "480px",
        height: "480px",
      },
      [theme.breakpoints.up('lg')]: {
        width: "550px",
        height: "550px",
      },
      borderRadius: "50%",
      background: "rgba(254, 195, 38, 1)",
    },
  },
  "& .css-1xqgfo2-MuiGrid-root": {
    [theme.breakpoints.up("tabletL")]: {
      flexBasis: "36%",
      maxWidth: "36%",
      marginTop: "30px",
    }
  }
}))
const Imagestyle = {
  objectFit: "cover",
  height: { md: "610px", tabletL: "400px", sm: "450px", mobileL: "350px", xs: "300px" },
  width: { md: "700px", tabletL: "450px", sm: "520px", mobileL: "400px", xs: "100%" },
  marginTop: { mobileL: "0", xs: "30px" },
  zIndex: "1",
}
export const IntroducingApplication = () => {

  const data = useAppSelector(state => state.home.IntroducingApplication)

  return (
    <IntroducingApplicationBox>
      <Introduction
        GridDirection="row-reverse"
        ImageSrc={data.src}
        title={data.title}
        text={data.text}
        PlayMode={false}
        contentMode={false}
        titleStyle={titleStyle}
        textStyle={textStyle}
        GridAlignItems="flex-start"
        Imagestyle={Imagestyle}
        GridMode={false}
        ApplicationButtonMode={true}
      />
      <ApplicationRoadMap />
    </IntroducingApplicationBox>
  )
}
