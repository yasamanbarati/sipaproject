import { Fragment, ReactNode } from 'react'
import { Box, SxProps } from '@mui/material'
import { styled } from '@mui/material/styles'
import { East, West } from '@mui/icons-material'
import { ArrowLeftIcon01 } from 'components/icons/arrow-left-Icon'
const buttonSize = 24

const ArrowStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  cursor: 'pointer',
  width: buttonSize,
  height: buttonSize,
  borderRadius: '50%',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'rgba(255,255,255,0.7)',
}))

interface CarouselArrowsTypes {
  onNext: () => void
  children: ReactNode
  RightStyle?: SxProps
  LeftStyle?: SxProps
  onPrevious: () => void
  leftIconMode: boolean
  RightIconMode: boolean
}

export function CarouselArrows({
  onNext,
  children,
  onPrevious,
  leftIconMode,
  RightIconMode,
  LeftStyle,
  RightStyle,
  ...other
}: CarouselArrowsTypes) {

  return (
    <Fragment>
      <Box {...other} sx={{ position: "relative" }}>
        {children}

        <Box sx={{ ...LeftStyle }}>
          <ArrowStyle onClick={onNext}>
            {leftIconMode === true ?
              (<West sx={{ fontSize: '2.5rem' }} />)
              :
              (<ArrowLeftIcon01 />)
            }
          </ArrowStyle>
        </Box>

        <Box sx={{ ...RightStyle }}>
          <ArrowStyle onClick={onPrevious}>
            {RightIconMode === true && <East sx={{ fontSize: '2.5rem' }} />}
          </ArrowStyle>
        </Box>
      </Box>
    </Fragment>
  )
}
