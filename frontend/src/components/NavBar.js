import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import Notifications from './Notifications'
import { useDispatch, useSelector } from 'react-redux'
import { openDialog } from '../reducers/articleFormReducer'
const NavBar = ({ user, handleSignout }) => {
    const pages = [ 'Articles', 'Watchlist', 'Users' ]
    const [ anchorElNav, setAnchorElNav ] = React.useState(null)
    const errorMessage = useSelector((state) => state.errorMessage)
    const dispatch = useDispatch()
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget)
    }
    const handleCloseNavMenu = () => {
        setAnchorElNav(null)
    }

    return (
        <AppBar position='sticky'>
            <Container minWidth='sm' maxWidth='xl'>
                <Toolbar disableGutters>
                    <Typography
                        variant='h6'
                        noWrap
                        component='a'
                        href='/'
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none'
                        }}>
                        CROWDREF
                    </Typography>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'flex', md: 'none' }
                        }}>
                        {user !== null ? (<><IconButton
                            size='large'
                            aria-label='menu'
                            aria-controls='menu-appbar'
                            aria-haspopup='true'
                            onClick={handleOpenNavMenu}
                            color='inherit'>
                            <MenuIcon />
                        </IconButton>
                            <Menu
                                id='menu-appbar'
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left'
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left'
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' }
                                }}>
                                <MenuItem
                                    key='Add'
                                    onClick={handleCloseNavMenu}>
                                    <Typography
                                        textAlign='center'
                                        onClick={() => dispatch(openDialog())}
                                        sx={{
                                            color: 'inherit',
                                            textDecoration: 'none',
                                            fontFamily: 'monospace'
                                        }}>
                                        Add
                                    </Typography>
                                </MenuItem>
                                {pages.map((page) => (
                                    <MenuItem
                                        key={page}
                                        onClick={handleCloseNavMenu}>
                                        <Typography
                                            textAlign='center'
                                            component='a'
                                            href={`/${page}`}
                                            sx={{
                                                color: 'inherit',
                                                textDecoration: 'none',
                                                fontFamily: 'monospace'
                                            }}>
                                            {page}
                                        </Typography>
                                    </MenuItem>
                                ))}
                            </Menu></>) : <></>}
                    </Box>
                    <Typography
                        variant='h5'
                        noWrap
                        component='a'
                        href='/'
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none'
                        }}>
                        CROWDREF
                    </Typography>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'none', md: 'flex' }
                        }}>
                        {user !== null ? <Button
                            key='Add'
                            color='inherit'
                            id='Add'
                            onClick={() => dispatch(openDialog())}
                            sx={{
                                my: 2,
                                color: 'white',
                                display: 'block'
                            }}>
                            ADD
                        </Button> : <></>}
                        {user !== null ? (
                            pages.map((page) => (
                                <Button
                                    key={page}
                                    color='inherit'
                                    id={page}
                                    href={`/${page}`}
                                    sx={{
                                        my: 2,
                                        color: 'white',
                                        display: 'block'
                                    }}>
                                    {page}
                                </Button>
                            ))
                        ) : (
                            <></>
                        )}
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        {user === null ? (<Button color='inherit' id='login' href={'/login'}>
                            Login
                        </Button>) : (<Button color='inherit' id='logout' onClick={handleSignout}>{user.username} | Sign out</Button>)}

                    </Box>
                </Toolbar>
            </Container>
            {errorMessage && <Notifications type={errorMessage.type} message={errorMessage.message} />}
        </AppBar >
    )
}

export default NavBar
