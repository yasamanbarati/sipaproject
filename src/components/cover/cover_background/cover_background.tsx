import { Box, styled } from '@mui/material'
import { CoverBackgroundButton } from './cover_background_Button/cover_background_Button'
import coverBackgrond from 'setup/assets/image/Group 235.png'
import { Image } from 'components/box/image_box/image'

const BackgroundBox = styled(Box)(({ theme }) => ({
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: "3",
    "&::after": {
        position: "absolute",
        content: `""`,
        width: "101px",
        height: "101px",
        bottom: "0px",
        background: "#FF7F5C",
        borderRadius: "0% 0% 100%",
        transform: "matrix(1, 0, 0, -1, 0, 0)",
    },
    "&::before": {
        position: "absolute",
        content: `""`,
        width: "78px",
        height: "78px",
        top: "23%",
        background: "#7DBDF8",
        borderRadius: "0% 0% 100%",
        transform: "matrix(1, 0, 0, -1, 0, 0)",
    },
}))
const backgrondCover01 = {
    position: "absolute",
    top: { tabletM: "40px", xs: "20px" },
    right: { tabletM: "100px", xs: "90px" },
    objectFit: "fill",
    width: "20px",
    height: "150px",
}
const backgrondCover02 = {
    position: "absolute",
    bottom: { md: "200px", tabletM: "50px", xs: "70px" },
    left: { laptop: "100px", md: "35px", xs: "0" },
    objectFit: "fill",
    width: "20px",
    height: "150px",
}
export const CoverBackground = () => {
    return (
        <BackgroundBox>
            <Image src={coverBackgrond} Imagestyle={backgrondCover01} />
            <Image src={coverBackgrond} Imagestyle={backgrondCover02} />
            <CoverBackgroundButton />
        </BackgroundBox>
    )
}
