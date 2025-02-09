import React, { useState } from 'react'
import { useMediaQuery } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import SlideFillButton from './UI/SlideFillButton'
import LanguageSelect from './UI/LanguageSelect'
import { useTranslation } from 'react-i18next'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

const NavBar = () => {
  const { t } = useTranslation()
  const [anchorEl, setAnchorEl] = useState(null)
  const isMobile = useMediaQuery('(max-width:600px)')

  const navItems = [
    { name: t('NavBar.navItems.home'), positionPC: 0, positionMob: 0 },
    { name: t('NavBar.navItems.skills'), positionPC: 1000, positionMob: 1700 },
    {
      name: t('NavBar.navItems.projects'),
      positionPC: 1600,
      positionMob: 2400,
    },
  ]

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  const handleScrollToPosition = (position) => {
    window.scrollTo({
      top: position,
      behavior: 'smooth',
    })
  }

  return (
    <AppBar
      component="nav"
      sx={{
        boxShadow: 'none',
        paddingLeft: { xs: 1, sm: 4, md: 16 },
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
      <Toolbar
        sx={{
          paddingY: { xs: 1, sm: 1, md: 2 },
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Typography
          variant="h4"
          component="div"
          sx={{
            color: 'white',
            fontFamily: "'Ouvality', cursive",
            flexGrow: 1,
            display: 'flex',
            color: 'text.primary',
            fontSize: { xs: '36px', sm: '36px', md: '48px' },
          }}
        >
          KingInertia
        </Typography>
        {isMobile ? (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <LanguageSelect />

            <IconButton color="inherit" onClick={handleMenuClick} edge="end">
              <MenuIcon sx={{ color: 'white' }} />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              sx={{
                mt: 2,
                width: '200px',
                right: 0,
              }}
            >
              {navItems.map((item) => (
                <MenuItem
                  key={item.name}
                  onClick={() => {
                    handleScrollToPosition(item.positionMob)
                    handleMenuClose()
                  }}
                >
                  <Typography sx={{ color: 'black' }}>{item.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        ) : (
          <>
            {' '}
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {navItems.map((item) => (
                <SlideFillButton
                  key={item.name}
                  text={item.name}
                  onClick={() => handleScrollToPosition(item.positionPC)}
                />
              ))}
            </Box>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <LanguageSelect />
            </Box>{' '}
          </>
        )}
      </Toolbar>
    </AppBar>
  )
}

export default NavBar
