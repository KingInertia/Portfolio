import React, { useState } from 'react'
import { Box, Typography, Modal, IconButton } from '@mui/material'
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material'

const ProjCard = ({ images, name, children }) => {
  const [open, setOpen] = useState(false)

  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }

  return (
    <Box
      sx={{
        marginTop: { xs: 0, md: 4 },
        marginBottom: { xs: 0, md: 8 },
        paddingBottom: { xs: 2, md: 2 },
        backgroundColor: 'background.default',
        textAlign: 'center',
        border: '4px solid',
        borderRadius: '24px',
        margin: 2,
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: '18px', md: '24px' },
          fontFamily: "'Roboto Slab', serif",
          marginY: 2,
        }}
      >
        {name}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            marginBottom: 2,
          }}
        >
          <IconButton
            onClick={handlePrev}
            sx={{
              color: 'black',
            }}
          >
            <ArrowBackIos fontSize="large" />
          </IconButton>

          <Box
            component="img"
            src={images[currentIndex]}
            alt="my-photo"
            sx={{
              width: { xs: '240px', md: '400px' },
              height: 'auto',
              objectFit: 'cover',
              flexShrink: 0,
              borderRadius: '4px',
              cursor: 'pointer',
            }}
            onClick={() => setOpen(true)}
          />

          <IconButton
            onClick={handleNext}
            sx={{
              color: 'black',
            }}
          >
            <ArrowForwardIos fontSize="large" />
          </IconButton>
        </Box>
        {children}

        <Modal open={open} onClose={() => setOpen(false)}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              outline: 'none',
            }}
          >
            <Box
              component="img"
              src={images[currentIndex]}
              alt="Zoomed"
              sx={{
                width: '80vw',
                height: 'auto',
                maxHeight: { xs: '90vh', md: '80vh' },
                borderRadius: '8px',
                boxShadow: '0px 4px 10px rgba(0,0,0,0.3)',
              }}
            />
          </Box>
        </Modal>
      </Box>
    </Box>
  )
}

export default ProjCard
