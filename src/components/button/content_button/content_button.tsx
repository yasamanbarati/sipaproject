import { Button } from "@mui/material"
import { ButtonProps } from "../../../services/type/type"

const ContentButton = ({ onClickEvent, sxStyle, icon, Text }: ButtonProps) => {
  return (
    <Button
      variant="contained"
      disableElevation={true}
      onClick={onClickEvent}
      sx={{ ...sxStyle }}
      startIcon={icon}
      color="orange">
      {Text}
    </Button>
  )
}

export default ContentButton
