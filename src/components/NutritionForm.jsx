import React, { useContext, useState } from "react";
import { NutritionContext } from "../Context";
import toast from "react-hot-toast";

const NutritionForm = () => {

  const { addItem, editingItem, isEdit, setEditingItem, setIsEdit, updateItem } = useContext(NutritionContext);



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
      toast.success("Added Item successfully");
    } else {

      toast.error("please fill all inputs!")
    }
  };

  const handleUpdate = () => {

    updateItem(editingItem.id);
    setIsEdit(false);
    toast.success(" Update Item successfully");
   

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
    <div className="lg:w-4xl w-full mx-auto bg-zinc-800 rounded shadow-lg p-4 mt-4">
      {
        isEdit ? (
          <>
            <h1 className="text-2xl font-semibold text-center">Edit Nutrition </h1>
            <div className="w-full flex flex-col md:flex-row gap-3 mt-4">
              <input
                type="text"
                name="itemName"
                value={editingItem.itemName}
                onChange={handleChange}
                placeholder="Item Name"
                className="md:w-1/2 w-full border border-zinc-700 p-2"
              />
              <input
                type="Number"
                name="calories"
                value={editingItem.calories}
                onChange={handleChange}
                placeholder="calories"
                className="md:w-1/2 w-full border border-zinc-700 p-2"
              />
            </div>
            <div className="w-full flex flex-col md:flex-row gap-3 mt-4">
              <input
                type="Number"
                name="protein"
                value={editingItem.protein}
                onChange={handleChange}
                placeholder="protein"
                className="md:w-1/2 w-full border border-zinc-700 p-2"
              />
              <input
                type="Number"
                name="carbs"
                value={editingItem.carbs}
                onChange={handleChange}
                placeholder="Carbs"
                className="md:w-1/2 w-full border border-zinc-700 p-2"
              />
            </div>
            <div className="w-full flex flex-col md:flex-row gap-3 mt-4">
              <input
                type="Number"
                name="fat"
                value={editingItem.fat}
                onChange={handleChange}
                placeholder="Fat"
                className="md:w-1/2 w-full border border-zinc-700 p-2"
              />
            </div>
            <div className="w-full flex flex-col md:flex-row gap-3 mt-4">
              <button
                onClick={handleUpdate}
                className="md:w-1/2 w-full bg-green-500 p-2 rounded cursor-pointer hover:bg-green-600  "
              >
                Update
              </button>
              <button
                onClick={handleCancel}
                className="dd:w-1/2 w-full bg-red-500 p-2 rounded cursor-pointer hover:bg-red-600 ">
                Cancel
              </button>
            </div>
          </>
        ) :
          (
            <>
              <h1 className="text-2xl font-semibold text-center"> Add Nutrition </h1>
              <div className="w-full flex flex-col md:flex-row  gap-3 mt-4">
                <input
                  type="text"
                  name="itemName"
                  value={data.itemName}
                  onChange={handleChange}
                  placeholder="Item Name"
                  className=" md:w-1/2 w-full border border-zinc-700 p-2"
                />
                <input
                  type="Number"
                  name="calories"
                  value={data.calories}
                  onChange={handleChange}
                  placeholder="calories"
                  className=" md:w-1/2 w-full border border-zinc-700 p-2"
                />
              </div>
              <div className="w-full flex flex-col md:flex-row gap-3 mt-4">
                <input
                  type="Number"
                  name="protein"
                  value={data.protein}
                  onChange={handleChange}
                  placeholder="protein"
                  className="md:w-1/2 w-full border  border-zinc-700 p-2"
                />
                <input
                  type="Number"
                  name="carbs"
                  value={data.carbs}
                  onChange={handleChange}
                  placeholder="Carbs"
                  className="md:w-1/2 w-full border border-zinc-700 p-2"
                />
              </div>
              <div className="w-full flex flex-col md:flex-row gap-3 mt-4">
                <input
                  type="Number"
                  name="fat"
                  value={data.fat}
                  onChange={handleChange}
                  placeholder="Fat"
                  className="md:w-1/2 w-full  border border-zinc-700 p-2"
                />
              </div>
              <div className="w-full flex flex-col md:flex-row gap-3 mt-4">
                <button
                  onClick={handleAdd}
                  className="md:w-1/2 w-full  bg-green-500 p-2 rounded cursor-pointer hover:bg-green-600  "
                >
                  Add Item
                </button>
                <button
                  onClick={clearInputs}
                  className="md:w-1/2 w-full  bg-red-500 p-2 rounded cursor-pointer hover:bg-red-600 ">
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
