import React from 'react'
import Layout from '../components/Layout/Layout'
import{ Box,TableContainer,Table,TableHead,TableRow,Tablecell,TableBody,Paper,TableCell,Typography} from '@mui/material';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MailIcon from '@mui/icons-material/Mail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';


const Contact = () => {
  return (
    <Layout>
      <Box sx={{width:"80%",margin:"10px auto",textAlign:"center"}}>
        <Typography variant = "h4" padding= "20px">Connect with us.</Typography>
        <p sx={{padding:"20px",margin:"20px auto"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nunc nisl aliquam.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget ultricies nisl nisl eget nisl.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget ultricies nisl nisl eget nisl.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget ultricies nisl nisl eget nisl.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget ultricies nisl nisl eget nisl.
          Nullam auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget ultricies nisl nisl eget nisl.
        </p>
        <Box sx={{width:"80%",margin:"20px auto" , "@media (max-width:600px)":{width:"300px"}} }>
          <TableContainer component={Paper}>
            <Table arial-label="contact table">
              <TableHead>
                <TableRow>
                  <TableCell sx={{bgcolor:"black" ,color:"white" ,fontFamily:"Arial", fontWeight:"bold", fontSize:"20px",textAlign:"center"}} >
                    Contact Details
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <SupportAgentIcon sx={{color:"red",pt:1}}/> 1800-123-1222(toll ree)
                  </TableCell>
                </TableRow>
              </TableBody>
              <TableRow>
                  <TableCell>
                    <MailIcon sx={{color:"red",pt:1}}/> help@myrest.com(toll ree)
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <LocalPhoneIcon sx={{color:"red",pt:1}}/> +91-9876543210(toll ree)
                  </TableCell>
                </TableRow>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Layout>
  )
}

export default Contact
