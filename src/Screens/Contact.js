import React from 'react';

import {
  Box,
  Container,
  Typography,
  IconButton
} from '@mui/material';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import contactIMG from '../PNGs/contact.png'

const style= {
  header: {
    textAlign: 'center',
    paddingTop: '70px',
    fontWeight: '700'
  },
  contact: {
    display:'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  phoneMail: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '10px'
  },
  contactLinks: {
    marginTop: '50px',
    '& > :not(style)': {
      marginRight: ' 20px'
    },
  },
  svg: {
    width: '50%',
    height: 'auto',
    '@media(max-width:900px)': {
      display: 'none'
    }
  }
}

const Contact = () => {
  return (
    <Container id="contact" fixed>
      <Typography sx={style.header} variant="h3" gutterBottom component="div">
        Contact Me
      </Typography>
      <Box sx={style.contact}>
        <Box sx={style.svg} component='img' src={contactIMG} />
        <Box>
          <Box sx={style.phoneMail}>
            <IconButton>
            <LocalPhoneIcon color='primary' />
            </IconButton>
            <Typography sx={{marginLeft: '5px', marginBottom:'0'}} variant="body2" gutterBottom>
              +972 - 527243554
            </Typography>
          </Box>
          <Box sx={style.phoneMail}>
            <IconButton href='mailto:markmo159@gmail.com' >
              <EmailIcon href='mailto:markmo159@gmail.com' color='primary' />
            </IconButton>
            <Typography sx={{marginLeft: '5px', marginBottom:'0'}} variant="body2" gutterBottom>
              markmo159@gmail.com
            </Typography>
          </Box>
          <Box sx={style.contactLinks}>
            <IconButton target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/mark-moiseev-05389618b/'>
              <LinkedInIcon fontSize='large' />
            </IconButton>
            <IconButton target="_blank" rel="noreferrer" href='https://github.com/markmo159'>
              <GitHubIcon fontSize='large' />
            </IconButton>
            <IconButton target="_blank" rel="noreferrer" href='https://www.facebook.com/markmo159/'>
              <FacebookIcon fontSize='large' />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default Contact;