import React, { useEffect } from 'react';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import * as Yup from "yup";
import { useFormik } from "formik";
import BorderColorIcon from "@mui/icons-material/BorderColor";

function TestimonialForm({onhandleAddData , onUpDate}) {
    const [open, setOpen] = React.useState(false);

    useEffect(() => {
        if(onUpDate){
            formik.setValues(onUpDate)
            handleClickOpen()
        }
    } , [onUpDate])
 
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const testimSchema = Yup.object({
    name: Yup.string()
      .min(2)
      .max(25)
      .matches(/^[a-zA-Z ]+$/, "Please Enter Valid Name")
      .required(),
    designation: Yup.string().required(),
    desc: Yup.string()
      .test("desc", "Please Enter Max 100 Word", function (val) {
        let arr = val.split(" ");
        if (arr.length > 5) {
          return false;
        } else {
          return true;
        }
      })
      .required(),
      file: Yup.object().shape({
        name: Yup.string().required()
    }).required('File required'),
    // img: Yup.string().required(),
  });

  
  const formik = useFormik({
    initialValues: {
      name: "",
      designation: "",
      desc: "",
    //   img: "",
    file:''
    },
    validationSchema: testimSchema,
    enableReinitialize: true,
    onSubmit: (values, action) => {
      console.log(values);
      action.resetForm();
      onhandleAddData(values);
      handleClose();
    },
  });

  const { values, errors, touched, handleBlur, handleChange, handleSubmit , setValues} =
    formik;

    return (
        <>
            <div>
                <Button  style={{ marginLeft: "200px" , marginBottom : '50px'}} variant="outlined" onClick={handleClickOpen}>
                    Testimonials
                </Button>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Testimonials</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            To subscribe to this website, please enter your email address
                            here. We will send updates occasionally.
                        </DialogContentText>
                        <form onSubmit={handleSubmit}>
                            <TextField
                                margin="dense"
                                id="name"
                                label="Name"
                                type="text"
                                fullWidth
                                variant="standard"
                                name="name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                            />
                            <span style={{ color: "red" }}>
                                {errors.name && touched.name ? errors.name : null}
                            </span>
                            <TextField
                                margin="dense"
                                id="designation"
                                label="Designation"
                                type="text"
                                fullWidth
                                variant="standard"
                                name="designation"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.designation}
                            />
                            <span style={{ color: "red" }}>
                                {errors.designation && touched.designation
                                    ? errors.designation
                                    : null}
                            </span>
                            <TextField
                                margin="dense"
                                id="standard-multiline-static"
                                label="Description"
                                multiline
                                rows={4}
                                fullWidth
                                variant="standard"
                                name="desc"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.desc}
                            />
                            <span style={{ color: "red" }}>
                                {errors.desc && touched.desc ? errors.desc : null}
                            </span>
                            <input
                                type="file"
                                margin="dense"
                                src=""
                                name="img"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                // value={values.img}
                            ></input>
                            {/* <span style={{ color: "red" }}>
                                {errors.img && touched.img ? errors.img : null}
                            </span> */}

                            <DialogActions>
                                <Button onClick={handleClose}>Cancel</Button>
                                <Button type="submit">Submit</Button>
                            </DialogActions>
                        </form>
                    </DialogContent>
                </Dialog>
            </div>
        </>
    );
}

export default TestimonialForm;