import { Box, IconButton, ImageList, ImageListItem } from "@mui/material";
import React, { useEffect, useState } from "react";
// import * as React from 'react';
import { DataGrid } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import EditNoteIcon from "@mui/icons-material/EditNote";
import TestimonialForm from "./TestimonialForm";


function TestimonialsAdmin(props) {
  const [gettmData, setGettmData] = useState([]);
  const [upDate , setUpDate] = useState(null)

  useEffect(() => {
    let localData = JSON.parse(localStorage.getItem("testimonial"));
    console.log(localData);

    if (localData !== null) {
      setGettmData(localData);
    }
  }, []);




  const handaleAddData = (data) => {
    let localData = JSON.parse(localStorage.getItem("testimonial"));
    console.log(localData);

    let rnd = Math.floor(Math.random() * 10000);
    let newData = { id: rnd, ...data };

    if (localData === null) {
      localStorage.setItem("testimonial", JSON.stringify([newData]));
      setGettmData([newData]);
    } else {
      if(upDate){
      let uData = localData.map((v) => {
            if(v.id === data.id){
                return data 
            } else {
              return v
            }
        })
        localStorage.setItem("testimonial", JSON.stringify(uData));
        setGettmData(uData);
      } else {
        localData.push(newData);
        localStorage.setItem("testimonial", JSON.stringify(localData));
        setGettmData(localData);
      }
    
    }

  };

  const handleDelete = (val) => {
    let localData = JSON.parse(localStorage.getItem("testimonial"));
    console.log(localData);
   let fData = localData.filter((v) => v.id !== val.id)
   console.log(fData);
   setGettmData(fData)
   localStorage.setItem("testimonial" , JSON.stringify(fData))
  }

  const handleUpData = (row) => {
    let localData = JSON.parse(localStorage.getItem("testimonial"));
    console.log(localData);
    console.log(row);
    setUpDate(row)
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
          <IconButton 
            aria-label="delete" 
            onClick={() => handleUpData(params.row)}
          >
            <EditNoteIcon />
          </IconButton>
        </>
      ),
      width: 160,
    },
  ];

  return (
    <>
     <Box height={100}/>
    <TestimonialForm onhandleAddData={handaleAddData} onUpDate={upDate}/> 
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
