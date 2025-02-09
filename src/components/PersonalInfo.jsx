import React from 'react'
import { Box, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

const PersonalInfo = () => {
  const { t } = useTranslation()

  return (
    <Box
      sx={{
        display: 'flex',
        paddingX: { xs: 2, md: 12 },
        paddingBottom: { xs: 4, md: 0 },
        width: '100%',
        boxSizing: 'border-box',
        flexDirection: { xs: 'column', md: 'row' },
      }}
    >
      <Box
        sx={{
          paddingTop: { xs: 2, md: 6 },
          paddingLeft: { xs: 0, md: 8 },
        }}
      >
        <Box
          sx={{
            display: { xs: 'flex', md: 'none' },
            justifyContent: { xs: 'center' },
            width: { xs: '100%' },
          }}
        >
          <Box
            component="img"
            src="/images/mozart-programmer-2.jpg"
            alt="my-photo"
            sx={{
              width: { xs: '340px', md: '600px' },
              height: 'auto',
              borderRadius: '10%',
            }}
          />
        </Box>
        <Box
          component="img"
          src="/images/mozart-programmer-2.jpg"
          alt="my-photo"
          sx={{
            display: { xs: 'none', md: 'block' },

            width: { xs: '340px', md: '600px' },
            height: 'auto',
            borderRadius: '10%',
          }}
        />
      </Box>
      <Box
        sx={{
          marginLeft: 'auto',
          paddingX: { xs: 0, md: 4 },
          paddingY: { xs: 0, md: 4 },
          marginY: { xs: 0, md: 8 },
          marginRight: { xs: 0, md: 2 },
          marginLeft: { xs: 0, md: 14 },

          textAlign: 'center',
          border: '4px solid',
          borderRadius: '24px',
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: '36px', md: '48px' },
            fontFamily: "'Ouvality', cursive",
          }}
        >
          {t('PersonalInfo.aboutMe')}
        </Typography>

        <Typography
          sx={{
            fontFamily: "'Roboto Slab', serif",
            fontSize: { xs: '16px', md: '18px' },
            marginX: { xs: 1, md: 0 },
            textAlign: { xs: 'left', md: 'center' },
          }}
        >
          {t('PersonalInfo.description')}
        </Typography>
      </Box>
    </Box>
  )
}

export default PersonalInfo
