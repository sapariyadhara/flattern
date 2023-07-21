import * as ActionType from '../ActionType'

const init = {
    price : [],
    loading : false ,
    error : ''
}

export const priceReducer = (state = init , action) => {
    console.log(action);
    switch(action.type){
        case ActionType.GETDATA_PRICE :
            return {
            ...state ,
            price : action.payload,
            loading : false 
        }
        case ActionType.ADD_PRICE :
           return{
            ...state ,
            price : state.price.concat(action.payload),
           }
        case ActionType.DELETE_PRICE :
            return{
                ...state,
                price : state.price.filter((v) => v.id  !== action.payload)
            }
        case ActionType.UPDATE_PRICE :
            return{
                ...state,
                price : state.price.map((v) => {
                    if(v.id === action.payload.id){
                            return action.payload
                    } else {
                        return v
                    }
                })
            }
        default :
        return state
    }
}
