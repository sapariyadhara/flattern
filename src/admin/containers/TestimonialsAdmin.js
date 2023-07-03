import { Box, IconButton, ImageList, ImageListItem } from "@mui/material";
import React, { useEffect, useState } from "react";
// import * as React from 'react';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import * as Yup from "yup";
import { useFormik } from "formik";
import { DataGrid } from "@mui/x-data-grid";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";
import EditNoteIcon from "@mui/icons-material/EditNote";

function TestimonialsAdmin(props) {
  const [open, setOpen] = React.useState(false);
  const [gettmData, setGettmData] = useState([]);

  useEffect(() => {
    let localData = JSON.parse(localStorage.getItem("testimonial"));
    console.log(localData);

    if (localData !== null) {
      setGettmData(localData);
    }
  }, []);

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
    img: Yup.string().required(),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      designation: "",
      desc: "",
      img: "",
    },
    validationSchema: testimSchema,
    enableReinitialize: true,
    onSubmit: (values, action) => {
      console.log(values);
      action.resetForm();
      handaleAddData(values);
    },
  });

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    formik;

  const handaleAddData = (data) => {
    let localData = JSON.parse(localStorage.getItem("testimonial"));
    console.log(localData);

    let rnd = Math.floor(Math.random() * 10000);
    let newData = { id: rnd, ...data };

    if (localData === null) {
      localStorage.setItem("testimonial", JSON.stringify([newData]));
      setGettmData([newData]);
    } else {
      localData.push(newData);
      localStorage.setItem("testimonial", JSON.stringify(localData));
      setGettmData(localData);
    }

    handleClose();
  };

  const handleDelete = (val) => {
    let localData = JSON.parse(localStorage.getItem("testimonial"));
    console.log(localData);
   let fData = localData.filter((v) => v.id !== val.id)
   console.log(fData);
   setGettmData(fData)
   localStorage.setItem("testimonial" , JSON.stringify(fData))
  }

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Name", width: 130 },
    { field: "designation", headerName: "Designation", width: 130 },
    { field: "desc", headerName: "Description", width: 200 },
    { field: "img", headerName: "Image", width: 160 },
    {
      field: "action",
      headerName: "Action",
      renderCell: (params) => (
        <>
          <IconButton 
          aria-label="delete" 
        onClick={() => handleDelete(params.row)}
          >
            <DeleteIcon />
          </IconButton>
          <IconButton>
            <EditNoteIcon />
          </IconButton>
        </>
      ),
      width: 160,
    },
  ];

  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];
  return (
    <>
      <Box height={100} />
      <div>
        <Button variant="outlined" onClick={handleClickOpen}>
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
                value={values.img}
              ></input>
              <span style={{ color: "red" }}>
                {errors.img && touched.img ? errors.img : null}
              </span>

              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button type="submit">Submit</Button>
              </DialogActions>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      {/* Table */}
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={gettmData}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div>
    </>
  );
}

export default TestimonialsAdmin;
