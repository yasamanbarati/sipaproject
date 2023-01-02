import { CustomCard } from "components/custom_card/custom_card"
import { textStyle } from "services/style/style"
import { CustomCardProps } from "services/type/type"

const cardStyle = {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    minHeight: { laptop: "500px", tabletL: "480px", xs: "450px" },
    width: "95%",
    borderRadius: "20px",
    background: "#FFFFFF",
    boxShadow: "0px 18px 20px rgba(0, 0, 0, 0.08)",
    margin: "30px 10px",
    "& .CardAreaBox": {
        width: { laptop: "318px", md: "380px", tabletM: "300px", xs: "85%" },
        height: { md: "300px", tabletM: "300px", xs: "300px" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
    },
    "& .css-46bh2p-MuiCardContent-root": {
        height: { laptop: "auto", md: "90%", xs: "80%" },
    },
    "& .MuiBox-root.css-uolf1j": {
        justifyContent: "space-between",
        marginTop: "0",
    }
}
const titleStyle = {
    fontSize: {
        xs: "1.2rem",
        mobileL: "1.5rem",
        tabletM: "1.3rem",
    },
    fontWeight: "800",
    lineHeight: "47px",
    letterSpacing: "0em",
    textAlign: "right",
    marginBottom: "15px"
}
const Imagestyle = {
    position: "absolute",
    top: "-45px",
    zIndex: "2",
    height: { tabletL: "279px", xs: "140px" },
    width: { tabletL: "339px", xs: "165px" },
}
export const IntroductionInvestmentCard = ({
    title,
    text,
    ImageSrc
}: CustomCardProps) => {
    return (
        <CustomCard
            cardStyle={cardStyle}
            title={title}
            text={text}
            ImageSrc={ImageSrc}
            titleStyle={titleStyle}
            Imagestyle={Imagestyle}
            textStyle={textStyle}
            actionsText="بیشتر"
            arrowBackColor="success"
            textColor="#2e7d32"
            actionMode={true}
            ContentMode={true}
            ImageMode={true} />
    )
}
