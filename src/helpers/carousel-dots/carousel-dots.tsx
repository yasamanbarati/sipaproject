// @ts-nocheck
import { styled } from '@mui/material/styles'
import { Box } from '@mui/material'

const RootStyle = styled(Box, {
  shouldForwardProp: prop => prop !== 'rounded',
})(({ rounded, theme }) => ({
  display: 'flex',
  listStyle: 'none',
  alignItems: 'center',
  justifyContent: 'flex-end',
  position: "absolute",
  right: "0",
  bottom: "-70px",
  '& li': {
    width: '20px',
    opacity: 0.1,
    
    cursor: 'pointer',
  },
  '& li.slick-active': {
    opacity: 1,
    '& .css-1g0nzgms': {
      backgroundColor: theme.palette.orange.main
    },
    ...(rounded && {
      '& .dotActive': {
        width: 16,
        borderRadius: 6,
      },
    }),
  },
}))

const DotWrapStyle = styled('div')(() => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

const DotStyle = styled('span')(({ theme }) => ({
  width: 15,
  height: 15,
  borderRadius: '50%',
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.short,
  }),
}))

export const CarouselDots = props => {
  const rounded = props?.rounded || false

  return {
    appendDots: dots => (
      <>
        <RootStyle rounded={rounded} component="ul" {...props}>
          {dots}
        </RootStyle>
      </>
    ),
    customPaging: () => (
      <DotWrapStyle>
        <DotStyle
          className="dotActive"
          sx={{
            bgcolor: '#ffc426',
          }}
        />
      </DotWrapStyle>
    ),
  }
}
