import './App.css'
import NavBar from './components/NavBar'
import { ThemeProvider } from '@mui/material/styles'
import ProfileBar from './components/ProfileBar'
import PersonalInfo from './components/PersonalInfo'
import SkillsInfo from './components/SkillsInfo'
import ProjectsInfo from './components/ProjectsInfo'
import Contacts from './components/Contacts'
import theme from './theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <NavBar />
        <ProfileBar />
        <PersonalInfo />
        <SkillsInfo />
        <ProjectsInfo />
        <Contacts />
      </div>
    </ThemeProvider>
  )
}

export default App
