import { Typography, Grid, Button } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import cake from "../images/cake.png"
const Herosection = () => {
  return (
    <Grid container alignItems="center" spacing={-10}>
        <Grid  item sm={6}  xs={12}  order={{xs:2,sm:1}} >
            <Typography variant='h4' >
                    A BLISS IN EVERY BYTES
            </Typography>
            <Typography variant='h5' >
                We offer tasty cackes and sweets
            </Typography>
            <Button type="submit" href="tel:8777716454" size="large" variant='contained' sx={{borderRadius:5}}  >CALL US</Button>
        </Grid>
        <Grid justifyContent="center" item container order={{xs:1,sm:2}}   sm={6} xs={12}>
            <Box component="img"  src={cake} />
        </Grid>
  
</Grid>
  )
}

export default Herosection