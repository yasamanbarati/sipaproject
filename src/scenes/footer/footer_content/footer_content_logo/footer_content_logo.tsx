import { Link } from 'react-router-dom'
import { Box, styled } from '@mui/material'
import Logo from 'setup/assets/image/Group 1000002380.png'

const LogoBox = styled(Box)(({ theme }) => ({
  "& .logo": {
    height: "100%",
    width: "235px",
  }
}))

export const FooterContentLogo = () => {
  return (
    <LogoBox
      sx={{
        marginTop: { laptop: "60px", tabletL: "50px", xs: "30px" }
      }}>
      <Link to="/" style={{ display: "flex" }}>
        <img
          className='logo'
          src={Logo}
          alt="starBucks logo"
          width='100%'
          height='100%' />
      </Link>
    </LogoBox>
  )
}
