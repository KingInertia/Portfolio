import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Box, Typography, Button } from '@mui/material'
import DownloadIcon from '@mui/icons-material/Download'
import { useTranslation } from 'react-i18next'

const ProfileBar = () => {
  const { t } = useTranslation()
  const phrases = [
    t('ProfileBar.phrases.craftingReact'),
    t('ProfileBar.phrases.buildingDjango'),
    t('ProfileBar.phrases.passionateLearning'),
    t('ProfileBar.phrases.optimizedSolutions'),
  ]

  const [text, setText] = useState('')
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)

  useEffect(() => {
    const typeText = async () => {
      const currentPhrase = phrases[currentPhraseIndex]
      let typedText = ''

      for (let i = 0; i < currentPhrase.length; i++) {
        typedText += currentPhrase[i]
        setText(typedText) // Обновляем текст
        await new Promise((resolve) => setTimeout(resolve, 70))
      }

      await new Promise((resolve) => setTimeout(resolve, 1000))

      setText('')
      setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length)
    }

    typeText()
  }, [currentPhraseIndex])

  return (
    <Box
      sx={{
        backgroundColor: 'primary.main',
        display: 'flex',
        paddingTop: 7,
        paddingBottom: { xs: 2, sm: 4, md: 7 },
        paddingX: { xs: 4, sm: 2, md: 22 },
        borderBottomLeftRadius: '1%',
        borderBottomRightRadius: '1%',
        width: '100%',
        boxSizing: 'border-box',
        flexDirection: { xs: 'column', md: 'row' },
      }}
    >
      <Box
        sx={{
          paddingX: { xs: 0, sm: 0, md: 4 },
          paddingTop: { xs: 6, sm: 6, md: 20 },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: { xs: '', md: 'center' },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: '32px', md: '48px' },
              color: 'white',
              fontFamily: "'Ouvality', cursive",
            }}
          >
            {t('ProfileBar.titles.Hi')}
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: '40px', md: '80px' },
              paddingBottom: { xs: 1, sm: 1, md: 2 },
              color: 'white',
              fontFamily: "'Ouvality', cursive",
              paddingLeft: { xs: 1, sm: 1, md: 2 },
            }}
          >
            {t('ProfileBar.titles.myName')}
          </Typography>
        </Box>

        <Typography
          sx={{
            fontSize: { xs: '22px', md: '36px' },
            color: 'white',
            fontFamily: "'Roboto Slab', serif",
          }}
        >
          {t('ProfileBar.titles.fullStackEngineer')}
        </Typography>
        <Box
          sx={{
            marginBottom: { xs: '40px', md: '100px' },
            paddingRight: { xs: '20px', md: '60px' },
            height: '40px',
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '16px', md: '28px' },
                color: 'white',
                fontFamily: "'Roboto Slab', serif",
              }}
            >
              {text}
            </Typography>
          </motion.div>
        </Box>
        <Button
          variant="contained"
          color="primary"
          sx={{
            boxShadow: 'none',
            textTransform: 'none',
            marginY: { xs: 1, md: '' },
          }}
          startIcon={
            <DownloadIcon
              sx={{
                width: { xs: 20, md: 36 },
                height: { xs: 20, md: 36 },
              }}
            />
          }
          href="/CV.pdf"
          download="CV.pdf"
        >
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '20px', md: '36px' },
              color: 'white',
              fontFamily: "'Roboto Slab', serif",
            }}
          >
            {t('ProfileBar.titles.myCV')}
          </Typography>
        </Button>
      </Box>
      <Box
        sx={{
          display: { xs: 'flex', md: 'none' },
          justifyContent: { xs: 'center' },
          width: { xs: '100%' },
        }}
      >
        <Box
          component="img"
          src="/images/my-photo-1.jpg"
          alt="my-photo"
          sx={{
            display: 'inline-block',
            marginLeft: { xs: '', md: 'auto' },
            marginTop: { xs: 2, md: 7 },
            width: { xs: '260px', md: '400px' },
            height: 'auto',
            borderRadius: '30px',
          }}
        />
      </Box>
      <Box
        component="img"
        src="/images/my-photo-1.jpg"
        alt="my-photo"
        sx={{
          display: { xs: 'none', md: 'block' },
          marginLeft: { xs: '', md: 'auto' },
          marginTop: { xs: 2, md: 7 },
          width: { xs: '260px', md: '400px' },
          height: 'auto',
          borderRadius: '30px',
        }}
      />
    </Box>
  )
}

export default ProfileBar
