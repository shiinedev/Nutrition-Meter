import React, { createContext, useReducer, useState } from "react";
import reducer, { initialState } from "./NutritionReducer";

export const NutritionContext = createContext(initialState);
const NutritionProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [editingItem,setEditingItem] = useState({});
   const [isEdit,setIsEdit] = useState(false);


  const calculateTotals = (items) => {
    let totalCalories = 0;
    let totalProtein = 0;
    let totalCarbs = 0;
    let totalFat = 0;
    if(items.length === 0){
        dispatch({
            type: "calculateTotals",
            payload: { totalCalories, totalCarbs, totalProtein, totalFat },
          });
    }else{
        items.map((item) => {
            console.log(item);
      
            totalCalories += Number(item.calories * item.quantity);
            totalProtein += Number(item.protein * item.quantity);
            totalCarbs += Number(item.carbs * item.quantity);
            totalFat += Number(item.fat * item.quantity);
      
            dispatch({
              type: "calculateTotals",
              payload: { totalCalories, totalCarbs, totalProtein, totalFat },
            });
          });
    }
   
  };
  const addItem = (item) => {
    
    let updateItems = [...state.items];
   
    updateItems = [...updateItems, { ...item, quantity: 1, id: updateItems.length + 1 }];

        dispatch({
          type: "addItem",
          payload: updateItems,
        });

   
    calculateTotals(updateItems);
  };

  const inCreaseQuantity = (item) => {
    const itemIndex = state.items.findIndex((i) => i.id === item.id);
    let updateItems = [...state.items];
    console.log(updateItems[itemIndex]);

    if (itemIndex !== -1) {
      updateItems[itemIndex] = {
        ...updateItems[itemIndex],
        quantity: updateItems[itemIndex].quantity + 1,
      };
    }
    dispatch({
      type: "increaseQuantity",
      payload: updateItems,
    });
    calculateTotals(updateItems);
  };
  const decreaseQuantity = (item) => {
    const itemIndex = state.items.findIndex((i) => i.id === item.id);
    console.log(itemIndex);

    let updateItems = [...state.items];
    if (itemIndex !== -1) {
      updateItems[itemIndex] = {
        ...updateItems[itemIndex],
        quantity:
          updateItems[itemIndex].quantity > 1
            ? updateItems[itemIndex].quantity - 1
            : updateItems[itemIndex].quantity,
      };
    }
    dispatch({
      type: "increaseQuantity",
      payload: updateItems,
    });
    calculateTotals(updateItems);
  };

  const deleteItem = (id) => {
    let updateItems = state.items.filter(item => item.id !== id)  ;
    
    calculateTotals(updateItems) 
  
    dispatch({ 
        type: "deleteItem" ,
        payload:updateItems,
    });

    
  };

  const updateItem = (id) =>{
    let itemIndex =  state.items.find( i => i.id === id);
    console.log(itemIndex);
    
    let updateItems = [...state.items]

    if(itemIndex){
        
        updateItems = updateItems.map(item => item.id === itemIndex.id ? editingItem : item);
        console.log(updateItems);
        
        dispatch({
            type:"updateItem",
            payload:updateItems
        })
        calculateTotals(updateItems);
    }

  }

  return (
    <NutritionContext.Provider
      value={{
        addItem,
        state,
        inCreaseQuantity,
        decreaseQuantity,
        deleteItem,
        editingItem,
        setEditingItem,
        isEdit,
        setIsEdit,
        updateItem
      
      }}
    >
      {children}
    </NutritionContext.Provider>
  );
};

export default NutritionProvider;
