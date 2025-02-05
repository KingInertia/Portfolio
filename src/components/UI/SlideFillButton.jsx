import React from 'react'
import { Button, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

const SlideFillButton = ({ text, onClick }) => {
  return (
    <Button
      variant="outlined"
      onClick={() => onClick()}
      sx={{
        overflow: 'hidden',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'action.hover',
          transform: 'translateX(-101%)',
          transition: 'transform 0.3s ease-in-out',
          zIndex: -1,
          visibility: 'hidden',
        },
        '&:hover': {
          '&::before': {
            transform: 'translateX(0)',
            visibility: 'visible',
          },
        },
      }}
    >
      <Typography
        variant="h4"
        sx={{
          position: 'relative',
          color: 'white',
          fontFamily: "'Ouvality', cursive",
          background:
            'linear-gradient(to right, black 0%, black 50%, white 50%)',
          fontSize: '48px',
          backgroundClip: 'text',
          textFillColor: 'currentcolor',
          transition: 'background-position 0.3s ease-in-out',
          backgroundSize: '200% 100%',
          backgroundPosition: '100% 0',

          '&:hover': {
            backgroundPosition: '0 0',
            textFillColor: 'transparent',
          },
          textTransform: 'capitalize',
        }}
      >
        {text}
      </Typography>
    </Button>
  )
}

export default SlideFillButton
