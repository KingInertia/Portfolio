import React, { useState } from 'react'
import { Box, IconButton, Link, Typography } from '@mui/material'
import { GitHub, LinkedIn, Mail } from '@mui/icons-material'

const Contacts = () => {
  const [postVisible, setPostVisible] = useState(false)

  return (
    <Box
      sx={{
        display: 'flex',
        backgroundColor: 'primary.main',
        paddingX: { xs: 4, md: 16 },
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
      <Link
        href="https://github.com/your-username"
        target="_blank"
        sx={{ margin: 1 }}
      >
        <IconButton sx={{ color: 'white', opacity: 1 }}>
          <GitHub sx={{ fontSize: { xs: '2rem', md: '2.5rem' } }} />
        </IconButton>
      </Link>

      <Link
        href="https://www.linkedin.com/in/andriy-katroshenko-0aa86132b/"
        target="_blank"
        sx={{ margin: 1 }}
      >
        <IconButton sx={{ color: 'white', opacity: 1 }}>
          <LinkedIn sx={{ fontSize: { xs: '2rem', md: '2.5rem' } }} />
        </IconButton>
      </Link>

      {postVisible ? (
        <Typography
          sx={{
            fontFamily: "'Roboto Slab', serif",
            color: 'white',
          }}
        >
          skalyar27@gmail.com
        </Typography>
      ) : (
        <IconButton
          onClick={() => setPostVisible(true)}
          sx={{ color: 'white', opacity: 1 }}
        >
          <Mail sx={{ fontSize: { xs: '2rem', md: '2.5rem' } }} />
        </IconButton>
      )}
    </Box>
  )
}

export default Contacts
