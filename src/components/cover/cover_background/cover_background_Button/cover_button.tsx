import { Button, styled } from "@mui/material"
import { ButtonProps } from "../../../../services/type/type"

const CustomButton = styled(Button)(({ theme }) => ({
    [theme.breakpoints.up('xs')]: {
        width: "100px",
        height: "45px",
    },
    [theme.breakpoints.up('tabletM')]: {
        width: "120px",
        height: "55px",
    },
    position: "absolute",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    fontWeight: "600",
    color: "#444444",
    boxShadow: "0px 109.933px 87.9462px rgba(229, 229, 245, 0.25), 0px 71.2527px 51.5055px rgba(229, 229, 245, 0.189815), 0px 42.3445px 28.0125px rgba(229, 229, 245, 0.151852), 0px 21.9866px 14.2913px rgba(229, 229, 245, 0.125), 0px 8.95749px 7.16599px rgba(229, 229, 245, 0.0981481), 0px 2.03579px 3.46085px rgba(229, 229, 245, 0.0601852)",
    borderRadius: "14px",
    transform: "matrix(1, 0.01, 0, 1, 0, 0)",
    "& svg": {
        height: "20px",
        width: "20px",
    },
    "& .css-9tj150-MuiButton-endIcon": {
        marginLeft: "0"
    },
    zIndex: "3",
}))
export const CoverButton = ({ onClickEvent, sxStyle, icon, Text }: ButtonProps) => {
    return (
        <CustomButton
            variant="contained"
            disableElevation={true}
            onClick={onClickEvent}
            sx={{
                fontSize: {
                    xs: "0.86rem",
                    sm: "0.9rem",
                    md: "0.96rem",
                }, ...sxStyle
            }}
            endIcon={icon}
            color="neutral"
        >
            {Text}
        </CustomButton>
    )
}
