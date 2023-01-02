import React from "react"
import { Box, styled } from "@mui/material"
import { IntroductionProps } from "../../../services/type/type"
import { TextBox } from "../../box/text_box/text_box"
import ContentButton from "../../button/content_button/content_button"
import { PlayButton } from "../../button/play_button/play_button"

const ContentButtonStyle = {
  boxShadow: "0px 20px 33px rgba(255, 196, 38, 0.45)",
  borderRadius: "9px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "15px 18px",
  gap: "10px",
  width: {
    xs: "160px",
    sm: "150px",
    md: "130px",
  },
  height: "42px",
  fontWeight: " 600",
  fontSize: {
    xs: "0.76rem",
    sm: "0.82rem",
    md: "0.89rem",
  },
  whiteSpace: "nowrap",
}

const IntroductionTextBox = styled(Box)(({ theme }) => ({
  position: "relative",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  [theme.breakpoints.up('xs')]: {
    marginTop: "40px",
  },
  [theme.breakpoints.up('md')]: {
    marginTop: "0",
  },
}))

export const IntroductionText = ({
  title,
  text,
  textColor,
  ButtonText,
  playButtonText,
  titleStyle,
  textStyle,
  contentMode,
  PlayMode,
  playButtonStyle,
  GridAlignItems,
  ContentIcon,
  buttonBoxMode
}: IntroductionProps) => {
  return (
    <IntroductionTextBox sx={{ alignItems: GridAlignItems }}>
      <TextBox text={title} variant="h1" textStyle={titleStyle} />
      <TextBox text={text} variant="body1" textStyle={textStyle} textColor={textColor} />
      {buttonBoxMode === true &&
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: { xs: "100%", md: "auto" },
            marginTop: "20px",
          }}>
          {contentMode === true && (
            <ContentButton
              Text={ButtonText}
              sxStyle={ContentButtonStyle}
              icon={ContentIcon}
            />
          )}
          {PlayMode === true && (
            <PlayButton Text={playButtonText} IconButtonStyle={playButtonStyle} />
          )}
        </Box>
      }
    </IntroductionTextBox>
  )
}
