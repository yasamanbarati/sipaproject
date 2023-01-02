import {
  Box,
  Card,
  CardActions,
  CardContent,
  IconButton
} from "@mui/material"
import { IntroductionText } from "../introduction/introduction_text/introduction_text"
import { CustomCardProps } from "../../services/type/type"
import { TextBox } from "../box/text_box/text_box"
import { ArrowBack } from "@mui/icons-material"
import { Image } from "../box/image_box/image"

const arrowBackStyle = {
  width: "30px",
  height: "30px",
}
const actionsTextStyle = {
  fontWeight: "600",
  fontSize: "1.3rem",
}
export const CustomCard = ({
  cardStyle,
  title,
  text,
  ImageSrc,
  titleStyle,
  Imagestyle,
  textStyle,
  actionsText,
  arrowBackColor,
  textColor,
  actionMode,
  ContentMode,
  ImageMode,
}: CustomCardProps) => {
  return (
    <Card sx={cardStyle}>
      {ImageMode === true && <Image src={ImageSrc} Imagestyle={Imagestyle} />}
      <Box className="CardAreaBox">
        {ContentMode === true ? (
          <CardContent>
            <IntroductionText
              title={title}
              text={text}
              titleStyle={titleStyle}
              textStyle={textStyle}
              buttonBoxMode={false}
            />
          </CardContent>
        ) : (
          <TextBox variant="h2" text={title} textStyle={titleStyle} />
        )}
        {actionMode === true && (
          <CardActions sx={{ width: "100%" }}>
            <IconButton>
              <ArrowBack sx={arrowBackStyle} color={arrowBackColor} />
              <TextBox
                text={actionsText}
                textStyle={actionsTextStyle}
                textColor={textColor}
              />
            </IconButton>
          </CardActions>
        )}
      </Box>
    </Card>
  )
}
