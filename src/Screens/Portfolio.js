import React, { useState } from 'react';
import {Works} from '../Data/Works';

import {
  Container,
  Box,
  Paper,
  Typography,
  Backdrop,
  Modal,
  Fade,
  IconButton,
  Button,
  Tooltip
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import WebIcon from '@mui/icons-material/Web';


const style= {
  header: {
    textAlign: 'center',
    paddingTop: '70px',
    fontWeight: '700'
  },
  works: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > :not(style)': {
      m: 1,
      width: '400px',
      height: '250px',
      ':hover': {
        cursor: 'pointer'
      }
    },
  },
  modal: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: 700,
    minWidth: 700,
    bgcolor: 'background.paper',
    boxShadow: 24,
    '@media(max-width:900px)': {
      minWidth: '80%',
    }
  },
  modalHeading: {
    background: '#2196f3',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    p: 1
  },
  modalInside: {
    p: 1,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'start',
    '@media(max-width:900px)': {
      flexDirection: 'column-reverse'
    }
  },
  modalTechUsed: {
    width: '100%',
    display:'flex', 
    flexDirection: 'column',
    justifyContent: 'space-between',
    '& > div': {
      display: 'flex',    
    },
  },
  modalImg: {
    width: '40%',
    height: 'auto',
    '@media(max-width:900px)': {
      width: '80%',
      margin: 'auto'
    }
  }, 
  goToBtns: {
    marginTop: '10px',
    display: 'flex',
    justifyContent: 'space-around'
  }
}

const Portfolio = () => {
  const [open, setOpen] = useState(false);
  const [workClicked, setWorkClicked] = useState(Works[0]);

  const handleOpen = (work) => {setOpen(true); setWorkClicked(work)};
  const handleClose = () => setOpen(false);


  return (
    <Container id="portfolio" fixed>
      <Typography sx={style.header} variant="h3" gutterBottom component="div">
        Portfolio
      </Typography>
      <Box
        sx={style.works}
      >
        {Works.map(work => (
          <Paper onClick={() => handleOpen(work)} component='img' src={work.imgSrc} elevation={8} key={work.title} />
        ))}
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
            }}
        >
          <Fade in={open}>
            <Box sx={style.modal}>
              <Box sx={style.modalHeading}>
                <Typography id="transition-modal-title" variant="h6" component="h2">
                  {workClicked.title}
                </Typography>
                <IconButton onClick={handleClose} >
                  <CloseIcon />
                </IconButton>
              </Box>
              <Box sx={style.modalInside}>
                <Box sx={{height:'100%', width: '100%'}}>
                  <Typography id="transition-modal-title" variant="caption" display="block" gutterBottom>
                    The technologies were used in this project are :
                  </Typography>
                  <Box sx={style.modalTechUsed}>
                    {(workClicked.tech).map( tech => (
                      <Box key={tech}>
                        <CheckBoxOutlinedIcon color="primary" />
                        <Typography>
                          {tech}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                  <Box sx={style.goToBtns}>
                    <Tooltip title="Go To Code">
                      <Button target="_blank" rel="noreferrer" href={workClicked.github} variant="contained"><GitHubIcon /></Button>
                    </Tooltip>
                    <Tooltip title="Go To Site">
                      <Button target="_blank" rel="noreferrer" href={workClicked.site} variant="contained"><WebIcon /></Button>
                    </Tooltip>
                  </Box>
                </Box>
                <Paper sx={style.modalImg} component='img' src={workClicked.imgSrc} />
              </Box>
            </Box>
          </Fade>
        </Modal>
      </Box>
    </Container>
  );
}

export default Portfolio;