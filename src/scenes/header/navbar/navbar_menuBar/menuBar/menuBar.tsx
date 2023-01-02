import { Drawer, styled, IconButton, useTheme } from '@mui/material'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import { NavbarLink } from '../../navbar_link/navbar_link'

interface Props {
    handleDrawerClose: () => void
    open: boolean
}

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
}));

export const MenuBar = ({ handleDrawerClose, open }: Props) => {
    const theme = useTheme()
    return (
        <Drawer
            sx={{
                width: "269px",
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: "269px",
                    height: "714px",
                    right: "-24px",
                    top: "65px",
                    paddingRight: "40px",
                    background: "rgba(255, 255, 255, 0.2)",
                    backdropFilter: "blur(16px)",
                    position: "absolute"
                },
            }}
            variant="persistent"
            anchor="right"
            open={open}
        >
            <DrawerHeader sx={{ justifyContent: "flex-end" }}>
                <IconButton onClick={handleDrawerClose}>
                    <ChevronLeftIcon sx={{ fontSize: "2.5rem" }} />
                </IconButton>
            </DrawerHeader>
            <NavbarLink LinksDirection="column" GridDirection="column" GridWrap="nowrap" LinksWrap="nowrap" />
        </Drawer>
    )
}