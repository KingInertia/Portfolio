import React from 'react'
import { Box, Typography } from '@mui/material'

const MobileSkillsBar = () => {
  return (
    <Box
      sx={{
        display: { xs: 'flex', md: 'none' },
        flexDirection: 'column',
        justifyContent: { xs: 'center' },
        width: '100%',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Box
        component="img"
        src="/images/mozart-notebook.jpg"
        alt="my-photo"
        sx={{
          display: { xs: 'block', md: 'none' },
          width: '200px',
          height: 'auto',
          borderRadius: '130px',
          marginTop: 4,
          marginBottom: 2,
        }}
      />

      <Box
        sx={{
          backgroundColor: 'background.default',
          borderRadius: '70px',
          marginY: 2,
          paddingX: 3,
        }}
      >
        <Box
          sx={{
            display: { xs: 'flex', md: 'none' },
            flexDirection: 'column',

            gap: '20px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',

              paddingY: { xs: 0, sm: 0, md: 4 },
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                marginY: 2,
              }}
            >
              <Box
                sx={{
                  textAlign: 'left',
                }}
              >
                <Typography
                  sx={{
                    fontSize: '38px',
                    fontFamily: "'Ouvality', cursive",
                  }}
                >
                  backend_skills =
                </Typography>
                <Typography
                  sx={{
                    fontSize: '18px',
                    fontFamily: "'Roboto Slab', serif",
                    paddingBottom: { xs: 1, sm: 1, md: 1 },
                  }}
                >
                  python + django + / <br /> django_rest_framework + / <br /> c#
                  + postgreSQL
                </Typography>
                <Typography
                  sx={{
                    fontSize: '38px',
                    fontFamily: "'Ouvality', cursive",
                  }}
                >
                  frontEndSkills =
                </Typography>
                <Typography
                  sx={{
                    fontSize: '18px ',
                    fontFamily: "'Roboto Slab', serif",
                    paddingBottom: { xs: 1, sm: 1, md: 1 },
                  }}
                >
                  ( javaScript + react + redux + materialUI )
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'raw',
                alignItems: 'center',
                gap: '10px',
              }}
            ></Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default MobileSkillsBar
