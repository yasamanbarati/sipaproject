import { Fragment } from 'react'
import { Container, Grid } from '@mui/material'
import { IntroductionText } from './introduction_text/introduction_text'
import { Image } from 'components/box/image_box/image'
import { CoverImage } from 'components/cover/cover_image/cover_image'
import { IntroductionProps } from 'services/type/type'
import { ApplicationButton } from 'components/button/application_button/application_button'

export const Introduction = ({
  ImageSrc,
  title,
  text,
  textColor,
  ButtonText,
  playButtonText,
  titleStyle,
  textStyle,
  Imagestyle,
  contentMode,
  PlayMode,
  coverDisplay,
  GridDirection,
  playButtonStyle,
  GridAlignItems,
  ContentIcon,
  BackgroundMode,
  GridMode,
  buttonBoxMode,
  ApplicationButtonMode
}: IntroductionProps) => {
  return (
    <Fragment>
      <Container
        fixed
        sx={{
          height: '100%',
          minHeight: 'inherit'
        }}
      >
        <Grid
          container
          height="100%"
          minHeight="inherit"
          spacing={0}
          justifyContent="space-between"
          alignItems="center"
          flexDirection={GridDirection}
        >
          <Grid
            item
            xs={12}
            laptop={6}
            md={GridMode === true ? 6 : 7}
            height={{ md: '100%', xs: '50%' }}
            display="flex"
            alignItems="center"
          >
            {coverDisplay ? (
              <CoverImage
                src={ImageSrc}
                Imagestyle={Imagestyle}
                BackgroundMode={BackgroundMode}
              />
            ) : (
              <Image src={ImageSrc} Imagestyle={Imagestyle} />
            )}
          </Grid>
          <Grid
            item
            xs={12}
            md={GridMode === true ? 6 : 5}
            laptop={6}
            height={{ md: '100%', xs: '50%' }}
          >
            <IntroductionText
              title={title}
              text={text}
              ButtonText={ButtonText}
              playButtonText={playButtonText}
              titleStyle={titleStyle}
              textStyle={textStyle}
              contentMode={contentMode}
              PlayMode={PlayMode}
              playButtonStyle={playButtonStyle}
              GridAlignItems={GridAlignItems}
              ContentIcon={ContentIcon}
              textColor={textColor}
              buttonBoxMode={buttonBoxMode} />
            {ApplicationButtonMode === true && <ApplicationButton />}
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  )
}
