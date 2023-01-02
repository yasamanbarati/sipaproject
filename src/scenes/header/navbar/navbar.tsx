import { AppBar, Toolbar, Container, Grid, styled } from '@mui/material'
import { NavbarLink } from './navbar_link/navbar_link'
import { NavbarLogo } from './navbar_logo/navbar_logo'
import { NavbarMenuBar } from './navbar_menuBar/navbar_menuBar'

const CustomAppBar = styled(AppBar)(({ theme }) => ({
  boxShadow: "0px 4px 83px rgba(0, 0, 0, 0.11)",
  zIndex: "2",
  [theme.breakpoints.up('xs')]: {
    height: "65px",
  },
  [theme.breakpoints.up('md')]: {
    height: "80px",
  }
}))
export const Navbar = () => {

  return (
    <CustomAppBar position="static" color='inherit'>
      <Container maxWidth='xl'>
        <Toolbar sx={{
          paddingLeft: "0!important",
          paddingRight: "0!important"
        }}>
          <Grid
            container
            spacing={1}
            justifyContent='space-between'
            alignItems='center'
            sx={{ margin: { md: '16px 0', xs: '8px 0 0' } }}>

            <NavbarLogo />

            <Grid sm={6}
              sx={{
                flexGrow: 1,
                display: { md: 'none', xs: 'flex' },
                width: "100%",
                height: "100%"
              }}
            >
              <NavbarMenuBar />
            </Grid>

            <Grid lg={11} md={10}
              sx={{
                flexGrow: 1,
                display: { xs: 'none', md: 'flex' },
              }}
            >
              <NavbarLink />
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </CustomAppBar>
  )
}
