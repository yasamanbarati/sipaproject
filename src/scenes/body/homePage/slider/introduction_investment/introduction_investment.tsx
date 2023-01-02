import { useRef, useState } from "react"
import { Box, Container, styled } from "@mui/material"
import Slider from "react-slick"
import { settings } from "./setting"
import { CarouselArrows } from "helpers/carousel-dots"
import { IntroductionInvestmentCard } from "./introduction_investment_card/introduction_investment_card"
import { useAppSelector } from "setup/redux/react-hooks"

const IntroductionInvestmentSliderBox = styled(Box)(({ theme }) => ({
    width: '100%',
    margin: '50px 0',
    minHeight: "500px",
    "& .slick-next": {
        display: "none!important",
    },
    "& .slick-prev": {
        left: "-15px!important",
        height: "48px!important",
        width: "48px!important",
        background: "#FFFFFF!important",
        boxShadow: "0px 17px 41px rgba(0, 0, 0, 0.13)!important",
        zIndex: "2",
        borderRadius: "50%",
    },
    "& .css-1l033if": {
        width: "100%",
        justifyContent: "center",
        bottom: "auto"
    }
}))
const ArrowLeftStyle = {
    position: "absolute",
    top: "48%",
    left: "-4px",
    zIndex: "2",
    width: "48px",
    height: "48px",
    background: "#FFFFFF",
    boxShadow: "0px 17px 41px rgba(0, 0, 0, 0.13)",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

}

export const IntroductionInvestmentSlider = () => {
    const carouselRef = useRef<Slider>(null)

    const handlePrevious = () => {
        carouselRef.current?.slickPrev()
    }

    const handleNext = () => {
        carouselRef.current?.slickNext()
    }
    const SliderItems = useAppSelector(state => state.home.slider_introduction_investment);
    return (
        <IntroductionInvestmentSliderBox>
            <Container fixed>
                <CarouselArrows
                    onNext={handleNext}
                    onPrevious={handlePrevious}
                    RightIconMode={false}
                    leftIconMode={false}
                    RightStyle={{ display: "none" }}
                    LeftStyle={ArrowLeftStyle}>
                    <Slider ref={carouselRef} {...settings}>
                        {SliderItems.map((item, key) => {
                            return <IntroductionInvestmentCard
                                title={item.title}
                                text={item.text}
                                ImageSrc={item.src} />
                        })}
                    </Slider>
                </CarouselArrows>
            </Container>

        </IntroductionInvestmentSliderBox>
    )
}
