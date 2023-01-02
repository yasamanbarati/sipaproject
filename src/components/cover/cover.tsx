import { Box, styled } from "@mui/material"
import BackgroundCover from "setup/assets/image/cover.png"
import { Introduction } from "../introduction/introduction"
import { CoverProps } from "services/type/type"
import Bily from "setup/assets/image/Billy 57.png"
import { coverTextStyle, titleStyle } from "services/style/style"

const CoverBox = styled(Box)(({ theme }) => ({
  background:
    "linear-gradient(0deg, rgba(255, 196, 38, 0.13) 0%, rgba(255, 196, 38, 0) 59.49%)",
  position: "relative",
  [theme.breakpoints.up('xs')]: {
    height: "auto",
    minHeight: "750px",
  },
  [theme.breakpoints.up('tabletM')]: {
    height: "auto",
    minHeight: "800px",
  },
  [theme.breakpoints.up('md')]: {
    height: "575px",
    minHeight: "auto",
  },
  width: "100%",
  zIndex: "2",
  marginBottom: "30px",
  "& .BackgroundCover": {
    position: "absolute",
    width: "100%",
    [theme.breakpoints.up('xs')]: {
      height: "50%",
      top: "0",
    },
    [theme.breakpoints.up('md')]: {
      height: "100%",
    },
    zIndex: "0",
    objectFit: "cover",
    bottom: "0",
  },
  "& .css-usava": {
    [theme.breakpoints.up('xs')]: {
      height: "350px",
      width: "547px",
    },
    [theme.breakpoints.up('md')]: {
      height: "100%",
      width: "100%",
    },
  },
  "& .css-1wwl0l8": {
    [theme.breakpoints.down('md')]: {
      width: "auto"
    }
  }
}))

const playButtonStyle = {
  position: "absolute",
  width: { md: "180px", xs: "160px" },
  height: "50px",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  bottom: { md: "46px", xs: "-80px" },
  left: { md: "0px", xs: "auto" },
  "& p": {
    color: "#4834D4"
  }
}
const Imagestyle = {
  position: "absolute",
  bottom: "0",
  objectFit: "contain",
  zIndex: "2",
  width: { laptop: "80%", md: "80%", tabletM: "400px", xs: "230px" },
  height: { laptop: "583px", md: "95%", tabletM: "500px", xs: "400px" },
}

export const Cover = ({
  coverText,
  coverTitle,
  coverContentButton,
  coverPlayButton,
}: CoverProps) => {
  return (
    <CoverBox>
      <img src={BackgroundCover} alt="BackgroundCover" className="BackgroundCover" />
      <Introduction
        title={coverTitle}
        text={coverText}
        ButtonText={coverContentButton}
        playButtonText={coverPlayButton}
        playButtonStyle={playButtonStyle}
        titleStyle={titleStyle}
        textStyle={coverTextStyle}
        contentMode={true}
        PlayMode={true}
        coverDisplay={true}
        GridDirection={{ xs: "column-reverse", md: "row" }}
        GridAlignItems={{ xs: "center", md: "flex-start" }}
        ImageSrc={Bily}
        Imagestyle={Imagestyle}
        BackgroundMode={true}
        buttonBoxMode={true}
      />
    </CoverBox>
  )
}
