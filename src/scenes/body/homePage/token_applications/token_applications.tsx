import { useRef, useState } from 'react'
import { Box, Container, Grid, styled, Typography } from '@mui/material'
import Slider from 'react-slick'
import { CarouselArrows } from '../../../../helpers/carousel-dots'
import { TokenApplicationsCard } from './token_applications_card/token_applications_card'
import { token_applications } from '../../../../services/server/mock'
import { settings } from './setting'

const ApplicationsBox = styled(Box)(({ theme }) => ({
  width: '100%',
  height: "150px",
  margin: '50px 0',
  "& .slick-list": {
    paddingTop: "15px!important",
    paddingBottom: "15px!important"
  }
}))

const ContainerTitle = styled(Box)({
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
})
const cardStyle = {
  width: "95%",
  height: "83px",
  background: "#FFFFFF",
  border: "1px solid #F5F5F5",
  boxShadow: "0px 4px 30px rgb(0 0 0 / 4%)",
  borderRadius: "72px",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  margin: "5px auto",
  flexDirection: "row-reverse",
  ".css-1i5slyr-MuiCardMedia-root": {
    transition: "0.8s ease-in-out",
  },
  ":hover .css-1i5slyr-MuiCardMedia-root": {
    background: "linear-gradient(211.51deg, #FF7A00 -10.82%, #FFC426 77.71%)",
    boxShadow: "0px 22px 45px rgba(255, 196, 38, 0.63)",
  },
  ".CardAreaBox.MuiBox-root.css-0 h2": {
    transition: "0.8s ease-in-out",
  },
  ":hover .CardAreaBox.MuiBox-root.css-0 h2": {
    color: "#FFA215",
  },
}
const titleStyle = {
  fontSize: {
    xs: "0.9rem",
    sm: "0.95rem",
    md: "1rem",
  },
  fontWeight: "700",
  marginLeft: "20px",
  color: "rgba(180, 171, 243, 1)",
}
const Imagestyle = {
  width: "66px",
  height: "66px",
  background: "linear-gradient(214.52deg, #EAE7FA -9.9%, #9A8EEF 104.49%)",
  borderRadius: "50%",
  padding: "15px",
  objectFit: "contain",
  margin: '0 10px 0 17px',
}
export const TokenApplications = () => {

  const [sliderItem, setsliderItem] = useState(token_applications)

  const carouselRef = useRef<Slider>(null)

  const handlePrevious = () => {
    carouselRef.current?.slickPrev()
  }

  const handleNext = () => {
    carouselRef.current?.slickNext()
  }

  return (
    <ApplicationsBox>
      <Box sx={{
        paddingRight: { lg: "10%", laptop: "7%", sm: "10%", xs: "6%" }
      }}>
        <Grid container>
          <Grid item xs={3} tabletM={2}>
            <ContainerTitle>
              <Typography
                fontSize={{ md: "1.3rem" }}
                fontWeight={{ tabletL: "800", xs: "700" }} >کاربرد های توکن</Typography>
            </ContainerTitle>
          </Grid>
          <Grid item xs={9} tabletM={10}>
            <CarouselArrows
              onNext={handleNext}
              onPrevious={handlePrevious}
              RightIconMode={true}
              leftIconMode={true}
              LeftStyle={{
                position: "absolute",
                left: "100px",
                bottom: "-60px",
              }}
              RightStyle={{
                position: "absolute",
                left: "150px",
                bottom: "-60px",
              }}>
              <Slider ref={carouselRef} {...settings}>
                {sliderItem.map((item) => {
                  return (
                    <TokenApplicationsCard
                      title={item.title}
                      titleStyle={titleStyle}
                      cardStyle={cardStyle}
                      ImageSrc={item.src}
                      Imagestyle={Imagestyle}
                    />
                  )
                })}
              </Slider>
            </CarouselArrows>
          </Grid>
        </Grid>
      </Box>
    </ApplicationsBox >
  )
}
