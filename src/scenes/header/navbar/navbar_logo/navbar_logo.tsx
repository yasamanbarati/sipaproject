import { Grid, styled } from '@mui/material'
import { Link } from 'react-router-dom'
import Logo from 'setup/assets/image/Group 1000000803.png'

const LogoGrid = styled(Grid)(({ theme }) => ({
    "& .logo": {
        height: "100%",
        [theme.breakpoints.up('xs')]: {
            width: "90px",
        },
        [theme.breakpoints.up('sm')]: {
            width: "100px",
        }
    }
}))

export const NavbarLogo = () => {
    return (
        <LogoGrid lg={1} md={2} sm={6}>
            <Link to="/" style={{ display: "flex" }}>
                <img className='logo' src={Logo} alt="starBucks logo" width='100%' height='100%' />
            </Link>
        </LogoGrid>
    )
}

