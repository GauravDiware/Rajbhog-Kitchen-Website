import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Typography } from '@mui/material';
import '../styles/About.css';
import {Button} from '@mui/material';

const About = () => {
  return (
    <Layout>
      <Typography variant="h4" sx={{ marginTop:2,marginLeft:2 }}> How We Work</Typography>
      <Box className="aboutus-container">
        <Box className = "aboutus_imgbox">
          <img src = "https://media.istockphoto.com/id/119926339/photo/resort-swimming-pool.jpg?s=2048x2048&w=is&k=20&c=hKhLRUpl6c1p_6CdUHRLTAR-UEBdR6vml7M5AtCSCL4=" alt ="aboutus Images" className="aboutus-image"/>
        </Box>
        <Box className = "aboutus_contentbox">
          <Typography variant="h5" style={{fontWeight: 'bold'}}>Our Mission</Typography>
          <p>
            <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Lorem1000<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <Box className="aboutus-buttonbox">
            <Button className='btn'>Explore More</Button>
            <Button className='btn'>Contact Us</Button>
          </Box>
        </Box>
      </Box>
    </Layout>
  )
}

export default About
