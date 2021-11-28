import React, { useState } from 'react';
import resume from '../PDF/Mark Moiseev - CV FrontEnd.pdf'

import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';


const style = {
  mainBtn: {
    fontSize: '1.5rem'
  },
  navBtn: {
    marginRight: '15px'
  },
  bigNav: {
    flexGrow: 1,
    '@media(max-width:870px)': {
      display: 'none'
    }
  },
  smallNav: {
    position: 'fixed',
    width: '100%',
    display:'none',
    justifyContent: 'end',
    zIndex: '100',
    '@media(max-width:870px)': {
      display: 'flex'
    }
  },
  smallNavMenuBtn: {
    width: '50%',
    color: 'white'
  }
}

const Navbar = () => {
  const [displayOpen, setDisplayOpen] = useState('flex');
  const [displayClosed, setDisplayClosed] = useState('none');

  const handleClick = (dest) => {
    console.log(dest)
    if(displayOpen === 'flex') {
      setDisplayOpen('none');
      setDisplayClosed('flex')
    }else {
      setDisplayOpen('flex');
      setDisplayClosed('none')
    };
    if(dest){
      scrolling(dest)
    }

  };

  const scrolling = (dest=null) => {
    document.getElementById(dest).scrollIntoView({
      behavior: 'smooth'
    });
  }

  return (
    <div>
      <Box sx={style.bigNav}>
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Button sx={style.mainBtn} color="inherit" onClick={() => scrolling('home')}>Mark Moiseev</Button>
            </Typography>
            <Button sx={style.navBtn} color="inherit" onClick={() => scrolling('about')}>About Me</Button>
            <Button sx={style.navBtn} color="inherit" onClick={() => scrolling('portfolio')}>Portfolio</Button>
            <Button sx={style.navBtn} color="inherit" onClick={() => scrolling('contact')}>Contact Me</Button>
            <Button href={resume} target="_blank" sx={{border: '2px solid black'}} color="inherit" endIcon={<SendIcon />}>Resume</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Box sx={style.smallNav}>
        <IconButton sx={{zIndex: '100'}} color="primary" onClick={() => handleClick()}>
          <MenuIcon 
            sx={{
              border:'1px solid', 
              borderRadius: '10px',
              display:`${displayOpen}`,
              background: 'white'
            }} 
            fontSize="large" 
          />
          <MenuOpenIcon 
            sx={{
              border:'1px solid',
              borderRadius: '10px',
              display: `${displayClosed}`,
              background: 'white'
            }}
            fontSize="large" />
        </IconButton>
        <Box sx={{
          display: `${displayClosed}`,
          width: '100%',
          position: 'absolute',
          paddingTop: '10px',
          flexDirection: 'column',
          alignItems: 'center',
          background: '#2196f3',
          opacity: '0.8',
          
        }}>
          <Button sx={style.smallNavMenuBtn} color="inherit" onClick={() => handleClick('home')}>Home</Button>
          <Button sx={style.smallNavMenuBtn} color="inherit" onClick={() => handleClick('about')}>About Me</Button>
          <Button sx={style.smallNavMenuBtn} color="inherit" onClick={() => handleClick('portfolio')}>Portfolio</Button>
          <Button sx={style.smallNavMenuBtn} color="inherit" onClick={() => handleClick('contact')}>Contact Me</Button>
          <Button sx={style.smallNavMenuBtn} href={resume} target="_blank" color="inherit" endIcon={<SendIcon />} onClick={() => handleClick()}>Resume</Button>
        </Box>
      </Box>
    </div>
  );
}

export default Navbar;