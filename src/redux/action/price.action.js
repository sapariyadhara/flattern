import * as ActionType from '../ActionType'

export const getDataPrice = () => (dispatch) => {
    fetch(" http://localhost:3004/price")
        .then((response) => response.json())
        .then((data) => dispatch({type : ActionType.GETDATA_PRICE , payload : data}))
        .catch((error) => console.log(error))
}

export const addPriceData = (data) => (dispatch) => {
    console.log(data);
    try{
        fetch(" http://localhost:3004/price" , {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
        .then((response) => response.json())
        .then((data) => dispatch({type : ActionType.ADD_PRICE , payload : data}))
        .catch((error) => console.log(error))
    } catch (error){
        console.log(error)
    }
   
}

export const detetePriceData = (id) => (dispatch) => {
    try{
        fetch(" http://localhost:3004/price/" + id , {
            method: "DELET"
        })
        .then((response) => response.json())
        .then(dispatch({type : ActionType.DELETE_PRICE , payload : id}))
        .catch((error) => console.log(error))
    } catch (error){
        console.log(error)
    }
}

export const updatePriceData = (data) => (dispatch) => {
    try{
        fetch(" http://localhost:3004/price/" + data.id , {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
        })
        .then((response) => response.json())
        .then((data) => dispatch({type : ActionType.UPDATE_PRICE , payload : data}))

    } catch (error){
        console.log(error)
    }

}