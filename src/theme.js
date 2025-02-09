import { createTheme } from '@mui/material/styles'
import '@fontsource/roboto-slab'

const theme = createTheme({
  palette: {
    primary: {
      main: '#8B5D5D', // Более коричневый оттенок (заменили на более насыщенный коричневый)
    },
    buttonFilled: {
      filled: '#D0A0A0', // Мягкий коричневый для кнопок
    },
    secondary: {
      main: '#2C2C2C', // Темно-серый, почти черный (можно использовать для текста или фона в разделах)
    },
    text: {
      primary: '#FFFFFF', // Белый текст для контраста
    },
    background: {
      default: '#F1E9E9', // Теплый светлый фон с коричневатым оттенком
    },
    action: {
      active: '#D0A0A0', // Мягкий коричневый для акцентов
      hover: '#D28A8A', // Легкий розово-коричневый при наведении
      selected: '#8B5D5D', // Основной коричневый для выбора
    },
  },
})

export default theme
