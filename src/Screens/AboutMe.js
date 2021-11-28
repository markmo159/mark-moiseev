import React from 'react';
import {Skills} from '../Data/Skills';
import meIMG from '../PNGs/me.png'

import {
  Container,
  Box,
  Typography,
  Avatar,
  Stack
} from '@mui/material';

const style= {
  container: {
    paddingTop: '70px'
  },
  header: {
    textAlign: 'center',
    fontWeight: '700'
  },
  avatar: {
    height: '300px',
    width: '300px',
    marginRight: '70px',
    background: '#2196f3',
  },
  aboutMe: {
    marginTop: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '@media(max-width:1250px)': {
      flexDirection: 'column'
    }
  },
  aboutMeText: {
    paddingLeft: '10px',
    '@media(max-width:1250px)': {
      paddingLeft: '0',
      marginTop: '50px'
    },
    '@media(max-width:650px)': {
      fontSize: '0.7rem'
    }
  },
  peragraph: {
    marginBottom: '10px'
  },
  skillsGroup: {
    marginTop: '10px',
  },
  skill: {
    height: '50px',
    width: '50px',
    borderRadius: '0'
  }
}


const AboutMe = () => {
  return (
    <Container id="about" sx={style.container} fixed>
      <Typography sx={style.header} variant="h3" gutterBottom component="div">
        About Me
      </Typography>
      <Box sx={style.aboutMe}>
        <Avatar sx={style.avatar} alt="Mark Moiseev" src={meIMG} />
        <Box>
          <Typography variant="subtitle2" sx={style.aboutMeText}>
            <p style={style.peragraph}>
              I graduated as Material Engineer from Ben-Gurion University. 
              Soon I realized I choose the wrong direction 
              and decided to go for something that turns on the passion inside me.
            </p>
            <p>
            On a personal level, I am highly-motivated, result oriented, self-driven, 
            hard-working, fast learner and constantly seeking to improve my skills.
            </p>
            <p style={style.peragraph}>
            I acquired knowledge building web applications 
            using top notch technologies through learning and building my own projects.
            Never intend to stop discovering and learning new technologies and skills.
            </p>
            <p style={style.peragraph}>
              I'm very passionate about programming, solving problems, dedicated, 
              responsible and a team player. I also have the ability to work independently 
              while staying on schedule and meeting those tight deadlines.
            </p>
            <p>
              Below is a list of my current technical skills:
            </p>
          </Typography>
          <Stack sx={style.skillsGroup} direction="row" spacing={5}>
            {Skills.filter(skill => skill.position === 'up').map (
              skill => (
                <Avatar sx={style.skill} alt={skill.title} src={skill.imgSrc} key={skill.title} />
              )
            )}
          </Stack>
          <Stack sx={style.skillsGroup} direction="row" spacing={5}>
            {Skills.filter(skill => skill.position === 'down').map (
              skill => (
                <Avatar sx={style.skill} alt={skill.title} src={skill.imgSrc} key={skill.title} />
              )
            )}
          </Stack>
        </Box>
      </Box>
    </Container>
  );
}

export default AboutMe;