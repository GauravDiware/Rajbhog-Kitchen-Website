import React from 'react'
import {Box , Typography} from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <>
    <Box sx={{textAlign:'center', bgcolor:'black', color:'white', p:2, }}>


      <Box sx={{my:3,"& svg":{
            fontSize:"40px",
            cursor:'pointer',
            mr:2,
            },
            "& svg :hover":{
                  color:'goldenrod',
                  transform:'translateX(5px)',
                  transition:'all 400ms'
            }}}>
            <InstagramIcon/>
            <FacebookIcon/>
            <TwitterIcon/>
            <YouTubeIcon/>

            
      </Box>
      <Typography variant='h5' sx={{'@media (max-width:600px)':{fontSize:'1 rem',}}}>
            All Rights are reserved &copy; 2026 MahaBhog Hotel.
      </Typography>
      
      
    </Box>
    
    </>
  )
}

export default Footer
