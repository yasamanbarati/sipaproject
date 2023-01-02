import { Box, styled, Typography } from '@mui/material'
import { CustomCard } from 'components/custom_card/custom_card'
import { textStyle } from 'services/style/style'
import { CustomCardProps } from 'services/type/type'

const CardStyle = {
    backgroundColor: "transparent",
    width: { xs: "100%", tabletL: "267px" },
    height: "auto",
    boxShadow: "none",
}
const CustomTypography = styled(Typography)(({ theme }) => ({
    position: "absolute",
    right: "-40px",
    fontWeight: "900",
    color: "#000000",
    opacity: "0.05",
    [theme.breakpoints.up("xs")]: {
        fontSize: "13rem",
        lineHeight: "13rem",
        top: "0px",
        right: "60px",
    },
    [theme.breakpoints.up("tabletL")]: {
        right: "-35px",
    },
    [theme.breakpoints.up("md")]: {
        fontSize: "16rem",
        top: "-80px",
        lineHeight: "15rem",
    },
}))
const CardBox = styled(Box)(({ theme }) => ({
    position: "relative",
    [theme.breakpoints.down("tabletL")]: {
        paddingRight: "40px",
        "&::before": {
            position: "absolute",
            content: `""`,
            width: "5px",
            height: "112%",
            right: "12px",
            top: "0",
            background: theme.palette.red,
        },
    }
}))
const MarkBox = styled(Box)(({ theme }) => ({
    position: "absolute",
    backgroundColor: theme.palette.neutral.main,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.up("xs")]: {
        height: "31px",
        width: "31px",
        left: 'auto',
        top: '0',
        boxShadow: "0px 4px 59px rgba(0, 0, 0, 0.35)",
        borderRadius: "10px",
        right: "0",
    },
    [theme.breakpoints.up("tabletL")]: {
        height: "64px",
        width: "64px",
        left: '100px',
        top: '-60px',
        right: "auto",
        boxShadow: "0px 4px 59px rgba(0, 0, 0, 0.15)",
        borderRadius: "20px",
    },
    "&::before": {
        position: "absolute",
        content: `""`,
        backgroundColor: "#c4c4c4",
        borderRadius: "10px",
        [theme.breakpoints.up("xs")]: {
            height: "15px",
            width: "15px",
        },
        [theme.breakpoints.up("tabletL")]: {
            height: "23px",
            width: "23px",
        },
    },
}))
const titleStyle = {
    fontSize: {
        xs: "1rem",
        sm: "1.5rem",
        md: "1.8rem",
    },
    fontWeight: "700",
    lineHeight: "30px",
    textAlign: "right",
    marginBottom: "15px",
}
export const ApplicationRoadMapCard = ({
    CardId,
    title,
    text
}: CustomCardProps) => {
    return (
        <CardBox className='RoadMapCardBox'>
            <MarkBox></MarkBox>
            <CustomTypography>{CardId}</CustomTypography>
            <CustomCard
                cardStyle={CardStyle}
                ImageMode={true}
                ContentMode={true}
                title={title}
                text={text}
                titleStyle={titleStyle}
                textStyle={textStyle}
                actionMode={false} />
        </CardBox>
    )
}
