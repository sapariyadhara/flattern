import { Box, IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import PriceForm from './PriceForm';
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import { addPriceData, detetePriceData, getDataPrice, updatePriceData } from '../../../redux/action/price.action';
import DeleteIcon from "@mui/icons-material/Delete";
import EditNoteIcon from "@mui/icons-material/EditNote";

function PricingAdmin(props) {
    const [getData , setGetdata] = useState([])
    const [update , setUpdate ] = useState(null)
    const dispatch = useDispatch()
    let priceD = useSelector(state => state.price)
    console.log(priceD , 'vsfvf');

    useEffect(() => {
    //     let localData = JSON.parse(localStorage.getItem("price"));
    // console.log(localData);

    // if (localData !== null) {
    //     setGetdata(localData);
    // }

    dispatch(getDataPrice())

      }, []);

    const handleSubmit = (data) => {
      if(update){
        dispatch(updatePriceData(data))
      } else{
        dispatch(addPriceData(data))
      }
      setUpdate(null)
      
    }

    const handleDelete = (id) => {
        dispatch(detetePriceData(id))
    }

    const handleUpdate = (data) => {
        // dispatch(updatePriceData(data))
        setUpdate(data)
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'designation', headerName: 'Designation', width: 130 },
        { field: 'desc', headerName: 'Description', width: 130 },
        {
            field: "action",
            headerName: "Actoin",
            renderCell: (params) => (
              <>
                <IconButton
                  aria-label="delete"
                  onClick={() => handleDelete(params.row.id)}
                >
                  <DeleteIcon />
                </IconButton>
                <IconButton
                  aria-label="edit"
                  onClick={() => handleUpdate(params.row)}
                >
                  <EditNoteIcon />
                </IconButton>
              </>
            ),
            width: 130,
        }
      ];

    return (
        <>
         <Box height={100}/>
            <h1 style={{fontSize : '40px', marginLeft:'250px'}}>Pricing1</h1>
        <PriceForm onhandleSubmit={handleSubmit} onupdate={update}/>

        <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={priceD.price}
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

export default PricingAdmin;