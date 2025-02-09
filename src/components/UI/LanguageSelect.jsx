import React from 'react'
import { useTranslation } from 'react-i18next'
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Box,
  Typography,
} from '@mui/material'

const LanguageSelect = () => {
  const { i18n } = useTranslation()
  const [language, setLanguage] = React.useState(i18n.language)

  const langChange = (event) => {
    const lang = event.target.value
    i18n.changeLanguage(lang)
    setLanguage(lang)
    localStorage.setItem('currentLang', lang)
  }

  return (
    <Box
      sx={{
        marginY: { xs: 0, md: 0 },
        paddingX: { xs: 0, md: 4 },
      }}
    >
      <FormControl
        fullWidth
        size="small"
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              border: 'none',
            },
          },
        }}
      >
        <InputLabel id="select-language-label">
          <Typography
            sx={{
              color: 'white',
              fontFamily: "'Roboto Slab', serif",
              fontSize: { xs: '16px', md: '16px' },
            }}
          >
            Lang
          </Typography>
        </InputLabel>
        <Select
          labelId="select-language-label"
          id="select-language"
          value={language}
          label="Lang"
          onChange={langChange}
        >
          <MenuItem value={'en'}>
            <Typography
              type="body1"
              sx={{
                color: language === 'en' ? 'white' : 'primary.main',
              }}
            >
              EN
            </Typography>
          </MenuItem>
          <MenuItem value={'uk'}>
            <Typography
              type="body1"
              sx={{
                color: language === 'uk' ? 'white' : 'primary.main',
              }}
            >
              UK
            </Typography>
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}

export default LanguageSelect
