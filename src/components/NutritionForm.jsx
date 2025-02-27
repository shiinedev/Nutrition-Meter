import React, { useContext, useState } from "react";
import { NutritionContext } from "../Nutritioncontext";
import toast from "react-hot-toast";

const NutritionForm = () => {

  const { addItem, state, editingItem, isEdit, setEditingItem, setIsEdit, updateItem } = useContext(NutritionContext);



  const [data, setDate] = useState({
    itemName: "",
    calories: 0,
    protein: 0,
    carbs: 0,
    fat: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if(isEdit){
      setEditingItem(prev => ({ ...prev, [name]: value }))
    }else{
      setDate(prev => ({ ...prev, [name]: value }));
    }
  
    
  };
  const handleAdd = () => {
    if (data.itemName.trim() && data.calories && data.carbs && data.fat && data.protein) {
      addItem(data);
     
      clearInputs();
      toast.success("Added Nutrition successFully!");
    } else {

      toast.error("please fill all inputs")
    }
  };

  const handleUpdate = () => {

    updateItem(editingItem.id);
    setIsEdit(false);
    toast.success("item update successfully");
   

  }

  const handleCancel = () => {
    setEditingItem({});
    setIsEdit(false)
  }

  const clearInputs = () => {
    setDate(
      {
        itemName: "",
        calories: 0,
        protein: 0,
        carbs: 0,
        fat: 0,
      }
    )
  }
  return (
    <div className="w-4xl mx-auto bg-zinc-800 rounded shadow-lg p-4 mt-4">
      {
        isEdit ? (
          <>
            <h1 className="text-2xl font-semibold text-center">Edit Nutrition </h1>
            <div className="w-full flex space-x-4 mt-4">
              <input
                type="text"
                name="itemName"
                value={editingItem.itemName}
                onChange={handleChange}
                placeholder="Item Name"
                className="w-1/2 border border-zinc-700 p-2"
              />
              <input
                type="Number"
                name="calories"
                value={editingItem.calories}
                onChange={handleChange}
                placeholder="calories"
                className="w-1/2 border border-zinc-700 p-2"
              />
            </div>
            <div className="w-full flex space-x-4 mt-4">
              <input
                type="Number"
                name="protein"
                value={editingItem.protein}
                onChange={handleChange}
                placeholder="protein"
                className="w-1/2 border border-zinc-700 p-2"
              />
              <input
                type="Number"
                name="carbs"
                value={editingItem.carbs}
                onChange={handleChange}
                placeholder="Carbs"
                className="w-1/2 border border-zinc-700 p-2"
              />
            </div>
            <div className="w-full flex space-x-4 mt-4">
              <input
                type="Number"
                name="fat"
                value={editingItem.fat}
                onChange={handleChange}
                placeholder="Fat"
                className="w-1/2 border border-zinc-700 p-2"
              />
            </div>
            <div className="w-full flex space-x-4 mt-4">
              <button
                onClick={handleUpdate}
                className="w-1/2 bg-green-500 p-2 rounded cursor-pointer hover:bg-green-600  "
              >
                Update
              </button>
              <button
                onClick={handleCancel}
                className="w-1/2 bg-red-500 p-2 rounded cursor-pointer hover:bg-red-600 ">
                Cancel
              </button>
            </div>
          </>
        ) :
          (
            <>
              <h1 className="text-2xl font-semibold text-center"> Add Nutrition </h1>
              <div className="w-full flex space-x-4 mt-4">
                <input
                  type="text"
                  name="itemName"
                  value={data.itemName}
                  onChange={handleChange}
                  placeholder="Item Name"
                  className="w-1/2 border border-zinc-700 p-2"
                />
                <input
                  type="Number"
                  name="calories"
                  value={data.calories}
                  onChange={handleChange}
                  placeholder="calories"
                  className="w-1/2 border border-zinc-700 p-2"
                />
              </div>
              <div className="w-full flex space-x-4 mt-4">
                <input
                  type="Number"
                  name="protein"
                  value={data.protein}
                  onChange={handleChange}
                  placeholder="protein"
                  className="w-1/2 border border-zinc-700 p-2"
                />
                <input
                  type="Number"
                  name="carbs"
                  value={data.carbs}
                  onChange={handleChange}
                  placeholder="Carbs"
                  className="w-1/2 border border-zinc-700 p-2"
                />
              </div>
              <div className="w-full flex space-x-4 mt-4">
                <input
                  type="Number"
                  name="fat"
                  value={data.fat}
                  onChange={handleChange}
                  placeholder="Fat"
                  className="w-1/2 border border-zinc-700 p-2"
                />
              </div>
              <div className="w-full flex space-x-4 mt-4">
                <button
                  onClick={handleAdd}
                  className="w-1/2 bg-green-500 p-2 rounded cursor-pointer hover:bg-green-600  "
                >
                  Add Item
                </button>
                <button
                  onClick={clearInputs}
                  className="w-1/2 bg-red-500 p-2 rounded cursor-pointer hover:bg-red-600 ">
                  Clear
                </button>
              </div>
            </>
          )


      }

    </div>
  );
};

export default NutritionForm;
