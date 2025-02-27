
export const initialState = {
    items:[],
    totals:{
        totalCalories:0,
        totalProtein:0,
        totalCarbs:0,
        totalFat:0,
    }
}

const reducer = (state,action) =>{
    const {type,payload} = action;

    switch(type){
        case "addItem":
            return{...state,items:payload };
        case "updateItem":
            return{...state,items:payload}
        case "increaseQuantity":
            return{...state,items:payload}
        case "decreaseQuantity":
                return{...state,items:payload}
        case "calculateTotals":
            return{...state, totals:payload}
        case "deleteItem":
            return {...state,items:payload}
        default:
            return state;
        
    }
}



export default reducer