import React from 'react'
import { Box, Typography, Link } from '@mui/material'
import ProjCard from './UI/ProjCard'
import { useTranslation } from 'react-i18next'

const imagesCompanyTraining = [
  '/images/company-training/proj1-profile.png',
  '/images/company-training/proj1-quiz.png',
  '/images/company-training/proj1-start.png',
  '/images/company-training/proj1-statistics.png',
]

const imagesPortfolio = ['/images/portfolio.png', '/images/portfolio-2.png']

const ProjectsInfo = () => {
  const { t } = useTranslation()

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        boxSizing: 'border-box',
        marginBottom: { xs: 4, md: 0 },
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: '38px', md: '60px' },
          fontFamily: "'Ouvality', cursive",
          marginTop: { xs: 2, md: 4 },
          marginBottom: { xs: 2, md: 0 },
        }}
      >
        {t('ProjectsInfo.myProjects')}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: { xs: 4, md: 20 },
        }}
      >
        <ProjCard
          name={t('ProjectsInfo.companyTrainingSystem')}
          images={imagesCompanyTraining}
        >
          {' '}
          <>
            {' '}
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '16px', md: '18px' },
                fontFamily: "'Roboto Slab', serif",
              }}
            >
              {'GitHub backend'}:{' '}
              <Link
                href="https://github.com/KingInertia/backend_company-training-manager/tree/develop"
                target="_blank"
                rel="noopener noreferrer"
                style={{ cursor: 'pointer' }}
              >
                {t('ProjectsInfo.view')}
              </Link>
              <br />
              {'GitHub frontend'}:{' '}
              <Link
                href="https://github.com/KingInertia/frontend_company-training-manager/tree/develop"
                target="_blank"
                rel="noopener noreferrer"
                style={{ cursor: 'pointer' }}
              >
                {t('ProjectsInfo.view')}
              </Link>
              <br />
              {t('ProjectsInfo.viewSite')}{' '}
              <Link
                href="http://king-inertia-react.s3-website.eu-north-1.amazonaws.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ cursor: 'pointer' }}
              >
                {t('ProjectsInfo.view')}
              </Link>
            </Typography>
          </>
        </ProjCard>

        <ProjCard name={t('ProjectsInfo.portfolio')} images={imagesPortfolio}>
          {' '}
          <>
            {' '}
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '16px', md: '18px' },
                fontFamily: "'Roboto Slab', serif",
              }}
            >
              {'GitHub'}:{' '}
              <Link
                href="https://github.com/KingInertia/Portfolio"
                target="_blank"
                rel="noopener noreferrer"
                style={{ cursor: 'pointer' }}
              >
                {t('ProjectsInfo.view')}
              </Link>
            </Typography>
          </>
        </ProjCard>
      </Box>
    </Box>
  )
}

export default ProjectsInfo
