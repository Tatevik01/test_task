import { Link } from 'react-router-dom';

import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Button, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import styles from "./index.module.scss";
import { PAGES } from '../../constants';
import { ReactComponent as LogoIcon } from "../../Images/logo.svg"
import { NavBarProps } from '../../Interfaces';

const NavBar = (props: NavBarProps) => {
    const {
        anchorElNav,
        handleOpenNavMenu,
        handleCloseNavMenu
    } = props

    return (
        <AppBar position="static" className={styles.navBar}>
            <Container maxWidth="xl" className={styles.container}>
                <Toolbar disableGutters>
                    <LogoIcon className={styles.logo_icon} />
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                            className={styles.menu_link}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{ display: { xs: 'block', md: 'none' } }}
                        >
                            {PAGES.map((page, index) => (
                                <MenuItem key={index}>
                                    <Link to={page.path} className={styles.link_xs}><Typography textAlign="center">{page.name}</Typography></Link>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {PAGES.map((page, index) => (
                            <Button key={index} sx={{ my: 2, color: 'white', display: 'block' }} className={styles.paragraph}><Link to={page.path} className={styles.link}> {page.name}</Link></Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default NavBar