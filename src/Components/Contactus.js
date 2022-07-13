import { Typography, TextField, Grid, Button } from '@mui/material'
import React from 'react'
import { useFormik } from "formik"
import * as Yup from "yup"

const Contactus = () => {
  const formik = useFormik({
    initialValues:{
        firstName:"",
        lastName:"",
        phoneNumber:"",
        message:""
    },
    validationSchema:Yup.object({
        firstName:Yup.string().required(),
        lastName:Yup.string().required(),
        message:Yup.string().required(),
        phoneNumber:Yup.number().required(),
    }),
    onSubmit:(values)=>{
        console.log(values);
    }
  })
  return (
    <>
    <Typography variant='h4' mt={6} mb={0}>
        Contact Us - 
    </Typography>
    
    <Grid container onSubmit={formik.handleSubmit} component="form" spacing={2} mt={0} mb={10}>
        <Grid item md={4} xs={12}>
            <TextField helperText={formik.errors.firstName} error={Boolean(formik.errors.firstName)} name="firstName" onChange={formik.handleChange} sx={{width:"100%"}} type="text" label="First Name" variant="outlined" />
        </Grid>
        <Grid item  md={4}  xs={12}>
            <TextField helperText={formik.errors.lastName} error={Boolean(formik.errors.lastName)}   name="lastName" onChange={formik.handleChange}  sx={{width:"100%"}} type="text" label="Last Name" variant="outlined" />
        </Grid>
        <Grid item  md={4}  xs={12}>
            <TextField   helperText={formik.errors.phoneNumber} error={Boolean(formik.errors.phoneNumber)}  name="phoneNumber" onChange={formik.handleChange}  sx={{width:"100%"}} type="number" label="Phone Number" variant="outlined" />
        </Grid>
        <Grid item   xs={12}>
            <TextField   helperText={formik.errors.message} error={Boolean(formik.errors.message)}   name="message" onChange={formik.handleChange}  rows={4} multiline fullWidth type="text" label="Message" variant="outlined" />
        </Grid>
        <Grid item   xs={12}>
            <Button size="large" sx={{float:"right"}} type="submit"   variant="contained">
                Submit
            </Button>
        </Grid>
    </Grid>



    </>
  )
}

export default Contactus