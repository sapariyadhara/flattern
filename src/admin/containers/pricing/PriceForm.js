import { Button, TextField } from "@mui/material";
// import React from "react";
import * as React from 'react';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import * as Yup from 'yup'
import { useFormik } from "formik";

function PriceForm({onhandleSubmit ,onupdate }) {
    const [open, setOpen] = React.useState(false);

    React.useEffect(() => {
      if(onupdate){
          formik.setValues(onupdate)
          handleClickOpen()
      }

    } , [onupdate])

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const priceSchema = Yup.object({
        name : Yup.string().required(),
        designation : Yup.string().required(),
        desc : Yup.string().required(),
    })

    const formik = useFormik({
        initialValues : {
            name : '',
            designation : '',
            desc : ''
        },
        validationSchema : priceSchema ,
        enableReinitialize : true ,
        onSubmit : (value , action ) => {
            console.log('ghbghdg');
                console.log(value);
                action.resetForm()
                onhandleSubmit(value)
                handleClose();
        }
    })

    const{values , errors , touched , handleBlur , handleSubmit , handleChange , setValues} = formik


  return (
    <>
     <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
   
    <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Pricing</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <form onSubmit={handleSubmit}>
          <TextField
          
            margin="dense"
            name="name"
            id="name"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
            value={values.name}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <span style={{color :'red'}}> {errors.name && touched.name ? errors.name : ''} </span>
          <TextField
          
            margin="dense"
            name="designation"
            id="designation"
            label="Designation"
            type="text"
            fullWidth
            variant="standard"
            value={values.designation}
            onBlur={handleBlur}
            onChange={handleChange}
          />
           <span style={{color :'red'}}> {errors.designation && touched.designation ? errors.designation : ''} </span>
          <TextField
          
            margin="dense"
            name="desc"
            id="desc"
            label="Description"
            type="text"
            fullWidth
            variant="standard"
            value={values.desc}
            onBlur={handleBlur}
            onChange={handleChange}
          />
           <span style={{color :'red'}}> {errors.desc && touched.desc ? errors.desc : ''} </span>
       
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Submit</Button>
        </DialogActions>
        </form>
        </DialogContent>
       
      </Dialog>
  
     
    </>
  );
}

export default PriceForm;
