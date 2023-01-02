import { Box, styled } from "@mui/material"
import { Image } from "components/box/image_box/image"
import { ImageMadia } from "services/type/type"
import { CoverBackground } from "../cover_background/cover_background"

const CoverBox = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100px",
  zIndex: "0",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-end",
  flexWrap: "nowrap",
  bottom: "0px",
  "&::after": {
    position: "absolute",
    content: `""`,
    [theme.breakpoints.up('xs')]: {
      width: "310px",
      height: "330px",
    },
    [theme.breakpoints.up('tabletM')]: {
      width: "430px",
      height: "420px",
    },
    [theme.breakpoints.up('md')]: {
      width: "100%",
      height: "80%",
    },
    [theme.breakpoints.up('laptop')]: {
      width: "460px",
      height: "480px",
    },
    bottom: "0px",
    background: "#FFC426",
    borderRadius: "50% 50% 15%",
    transform: "rotate(-180deg)",
  },
}))

export const CoverImage = ({ src, Imagestyle, BackgroundMode }: ImageMadia) => {
  return (
    <CoverBox
      width={{ laptop: "520px", md: "420px", tabletM: "483px", sm: "460px", xs: "430px" }}
      height={{ laptop: "560px", md: "100%", tabletM: "500px", sm: "400px", xs: "360px" }} >
      {BackgroundMode === true && <CoverBackground />}
      <Image src={src} Imagestyle={Imagestyle} alt="cover Image" />
    </CoverBox >
  )
}
