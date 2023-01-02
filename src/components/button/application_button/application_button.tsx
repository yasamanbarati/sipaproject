import { Box, Button } from "@mui/material"
import { ButtonProps } from "services/type/type"
import googlePlay from 'setup/assets/image/googlePlay.png'
import appStore from 'setup/assets/image/appStore.png'

const BoxStyle = {
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    marginTop: "20px",
    "& Button": {
        height: "48px",
        width: "153px",
        padding: "0",
        "&:hover": {
            boxShadow: "0px 15px 10px rgb(0,0,0 / 45%)",
        },
    },
    "& img": {
        height: "100%",
        width: "100%",
        objectFit: "cover"
    }
}
export const ApplicationButton = ({ onClickEvent }: ButtonProps) => {
    return (
        <Box sx={BoxStyle}>
            <Button
                disableElevation={true}
                onClick={onClickEvent}>
                <img src={appStore} />
            </Button>
            <Button
                disableElevation={true}
                onClick={onClickEvent}>
                <img src={googlePlay} />
            </Button>
        </Box>
    )
}