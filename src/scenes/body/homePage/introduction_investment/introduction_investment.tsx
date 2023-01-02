import { Box, styled } from '@mui/material'
import { introduction_investment } from 'services/server/mock'
import { Introduction } from 'components/introduction/introduction'
import introductionImage from 'setup/assets/image/IntroductionImage02.png'
import { textStyle, titleStyle } from 'services/style/style'

const IntroductionBox = styled(Box)(({ theme }) => ({
  position: 'relative',
  height: 'auto',
  width: '100%',
  marginTop: '50px',
  zIndex: '3',
  '&::after': {
    content: `" "`,
    position: 'absolute',
    zIndex: '1',
    width: '136px',
    height: '136px',
    left: '0',
    bottom: '0',
    borderRadius: '50%',
    background:
      'linear-gradient(324.53deg, #315EFB -27.5%, rgba(49, 94, 251, 0) 108.52%)',
  },
  '&::before': {
    content: `" "`,
    position: 'absolute',
    zIndex: '2',
    width: '78px',
    height: '78px',
    left: '90px',
    bottom: '-30px',
    borderRadius: '50%',
    background:
      'linear-gradient(273.54deg, #DADAFF -2.84%, rgba(238, 238, 255, 0) 122.55%)',
    backdropFilter: 'blur(24.5px)',
  },
}))
export const IntroductionInvestment = () => {
  return (
    <IntroductionBox>
      <Introduction
        GridDirection="row"
        ImageSrc={introductionImage}
        title={introduction_investment.title}
        text={introduction_investment.text}
        ButtonText={introduction_investment.contentButton}
        PlayMode={false}
        contentMode={true}
        titleStyle={titleStyle}
        textStyle={textStyle}
        GridAlignItems="flex-start"
        Imagestyle={{
          objectFit: 'contain',
          maxWidth: "100%",
          width: { md: "auto", xs: "100%" },
          height: { md: '561px', xs: '509px' },
        }}
        buttonBoxMode={true}
      />
    </IntroductionBox>
  )
}
