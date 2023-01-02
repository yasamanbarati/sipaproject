import { IconButton, SxProps } from '@mui/material'
import { PlayArrow } from '@mui/icons-material'
import { TextBox } from 'components/box/text_box/text_box'
import { textStyle } from 'services/style/style'

interface Play_button {
    Text: string | undefined
    onClickEvent?: () => unknown
    IconButtonStyle?: SxProps
}

const PlayArrowStyle = {
    width: { md: "44px", xs: "40px" },
    height: { md: "44px", xs: "40px" },
    color: "#fff",
    background: "#4834D4",
    boxShadow: "0px 4px 44px rgba(0, 0, 0, 0.25)",
    borderRadius: "50%",
    transform: "matrix(-1, 0, 0, 1, 0, 0)",
}
export const PlayButton = ({ onClickEvent, Text, IconButtonStyle }: Play_button) => {
    return (
        <IconButton aria-label="play/pause" sx={{ ...IconButtonStyle }} >
            <PlayArrow sx={PlayArrowStyle} />
            <TextBox text={Text} textStyle={textStyle} />
        </IconButton>
    )
}
