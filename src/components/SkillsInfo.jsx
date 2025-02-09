import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import MobileSkillsBar from './UI/MobileSkillsBar'

const images = [
  '/images/logos/Python.png',
  '/images/logos/Django.png',
  '/images/logos/Rest.png',
  '/images/logos/C.png',
  '/images/logos/Postgres.png',
  '/images/logos/JS.png',
  '/images/logos/React.png',
  '/images/logos/MUI.png',
  '/images/logos/Redux.png',
]

const SkillsInfo = () => {
  const { t } = useTranslation()
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Box
      sx={{
        display: 'flex',
        backgroundColor: 'primary.main',
        flexDirection: 'column',
        paddingBottom: { xs: 2, md: 6 },
        paddingX: { xs: 4, md: 16 },
        borderBottomLeftRadius: '1%',
        borderBottomRightRadius: '1%',
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          paddingY: { xs: 1, md: 2 },
          justifyContent: 'center',
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: '36px', md: '60px' },
            fontFamily: "'Ouvality', cursive",
            color: 'white',
          }}
        >
          {t('SkillsInfo.aboutMySkills')}
        </Typography>
      </Box>
      <Box
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        sx={{
          backgroundColor: 'background.default',
          borderRadius: '130px',
          overflow: 'hidden',
          position: 'relative',
          height: { xs: '80px', md: '240px' },
        }}
      >
        <AnimatePresence>
          {!isHovered ? (
            <motion.div
              key="box1"
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                animate={{ x: ['0%', '-50%'] }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  height: '100%',
                  gap: '20px',
                  whiteSpace: 'nowrap',
                  position: 'absolute',
                }}
              >
                {images.concat(images).map((src, index) => (
                  <Box
                    key={index}
                    component="img"
                    src={src}
                    alt={`Logo ${index}`}
                    sx={{
                      width: { xs: '60px', md: '200px' },
                      height: { xs: '60px', md: '200px' },
                      objectFit: 'cover',
                      flexShrink: 0,
                    }}
                  />
                ))}
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              layout
              key="box"
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  display: { xs: 'none', md: 'flex' },
                  flexDirection: 'raw',

                  gap: '20px',
                }}
              >
                <img
                  src="/images/mozart-notebook.jpg"
                  alt="my-photo"
                  style={{
                    height: '240px',
                    width: 'auto',
                    borderRadius: '130px',
                  }}
                />
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',

                    paddingY: { xs: 0, md: 4 },
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'raw',
                      alignItems: 'center',
                      gap: '10px',
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: '60px',
                        fontFamily: "'Ouvality', cursive",
                      }}
                    >
                      backend_skills =
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: '30px',
                        fontFamily: "'Roboto Slab', serif",
                        paddingBottom: { xs: 1, md: 1 },
                      }}
                    >
                      python + django + django_rest_framework + c# + postgreSQL
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'raw',
                      alignItems: 'center',
                      gap: '10px',
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: '60px',
                        fontFamily: "'Ouvality', cursive",
                      }}
                    >
                      frontEndSkills =
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: '30px ',
                        fontFamily: "'Roboto Slab', serif",
                        paddingBottom: 1,
                      }}
                    >
                      javaScript + react + redux + materialUI
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </motion.div>
          )}
        </AnimatePresence>
      </Box>
      <MobileSkillsBar />
    </Box>
  )
}

export default SkillsInfo
