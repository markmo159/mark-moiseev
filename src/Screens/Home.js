import React from 'react';
import bgIMG from '../PNGs/bg1.jpg';

import {
  Box,
  Typography
} from '@mui/material';

const style = {
  main: {
    position: 'relative',
    height:'100vh',
    width: '100%',
    backgroundImage: `url(${bgIMG})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  layout: {
    position: 'absolute',
    top: '0',
    right: '0',
    bottom: '0',
    left: '0',
    background: '#333333',
    opacity: '0.5'
  },
  text: {
    height:'100%',
    width: '100%',
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  h3: {
    color: '#2196f3',
    fontWeight: '900',
    marginLeft: '20px',
    marginTop: '200px',
    maxWidth: '50%',
    animation: 'text-focus-in 1.2s cubic-bezier(0.550, 0.085, 0.680, 0.530) both',
    '@keyframes text-focus-in': {
      '0%': {
        filter: 'blur(12px)',
        opacity: '0',
      },
      '100%': {
        filter: 'blur(0px)',
        opacity: '1',
      }
    }

  },
  h6: {
    color: 'white',
    fontWeight: '700',
    marginLeft: '20px',
    animation: 'focus-in-contract-bck 3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
    '@keyframes focus-in-contract-bck': {
      '0%': {
        letterSpacing: '1em',
        transform: 'translateZ(300px)',
        filter: 'blur(12px)',
        opacity: '0',
      },
      '100%': {
        transform: 'translateZ(12px)',
        filter: 'blur(0)',
        opacity: '1',
      }
    }
  }
}


const Home = () => {
  return (
    <Box id="home" sx={style.main}>
      <Box sx={style.layout}></Box>
      <Box sx={style.text}>
        <Typography sx={style.h3} variant="h3" gutterBottom component="div">
          Front-End Web Developer
        </Typography>
        <Typography sx={style.h6} variant="h6" gutterBottom component="div">
          with a passion for learning
        </Typography>
      </Box>
    </Box>
  );
}

export default Home;