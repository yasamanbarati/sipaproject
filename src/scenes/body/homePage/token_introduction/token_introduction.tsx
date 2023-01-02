import React from "react"
import { Box, styled } from "@mui/material"
import { Introduction } from "components/introduction/introduction"
import { token_introduction } from "services/server/mock"
import introductionImage from "setup/assets/image/IntroductionImage01.png"
import { ArticleOutlined } from "@mui/icons-material"
import { textStyle, titleStyle } from "services/style/style"

const IntroductionBox = styled(Box)(({ theme }) => ({
  position: "relative",
  height: "auto",
  width: "100%",
  marginTop: "50px",
  zIndex: "3",
  "&::after": {
    content: `" "`,
    position: "absolute",
    zIndex: "0",
    width: "136px",
    height: "136px",
    right: "-60px",
    top: "0",
    borderRadius: "50%",
    background:
      "linear-gradient(324.53deg, #315EFB -27.5%, rgba(49, 94, 251, 0) 108.52%)",
  },
  "&::before": {
    content: `" "`,
    position: "absolute",
    zIndex: "0",
    width: "78px",
    height: "78px",
    right: "30px",
    top: "75px",
    borderRadius: "50%",
    background:
      "linear-gradient(273.54deg, #DADAFF -2.84%, rgba(238, 238, 255, 0) 122.55%)",
    backdropFilter: "blur(24.5px)",
  },
}))
const playButtonStyle = {
  width: {
    xs: "180px",
    sm: "200px",
    md: "215px",
  },
  height: "43px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  "& p": {
    color: "#4834D4"
  }
}
export const TokenIntroduction = () => {
  return (
    <IntroductionBox>
      <Introduction
        GridDirection="row-reverse"
        ImageSrc={introductionImage}
        title={token_introduction.title}
        text={token_introduction.text}
        ButtonText={token_introduction.contentButton}
        ContentIcon={<ArticleOutlined />}
        playButtonText={token_introduction.playButton}
        playButtonStyle={playButtonStyle}
        PlayMode={true}
        contentMode={true}
        titleStyle={titleStyle}
        textStyle={textStyle}
        GridAlignItems="flex-start"
        Imagestyle={{
          objectFit: "contain",
          height: { md: "467px", sm: "397px", xs: "257px" },
        }}
        GridMode={true}
        buttonBoxMode={true}
      />
    </IntroductionBox>
  )
}
