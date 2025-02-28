import React, { useContext } from 'react'
import { NutritionContext } from '../Context'
import toast from 'react-hot-toast';

const NutritionItem = ({item}) => {
    
    const {inCreaseQuantity,decreaseQuantity , deleteItem,setEditingItem,setIsEdit} = useContext(NutritionContext);

    const handleEdit = () => {
        setEditingItem(item);
        setIsEdit(true);
    } 
    const handleDelete = () =>{
        deleteItem(item.id);
        toast.error("Delete item Successfully");
    }

  return (
    <div className='bg-zinc-800 p-4 border border-zinc-700 rounded shadow-lg mt-4'>
        <h3 className='text-xl font-semibold '> {item.itemName}</h3>
        <p className='text-xl font-normal'>Calories : {item.calories}</p>
        <p  className='text-xl font-normal'>Protein: {item.protein}g</p>
        <p  className='text-xl font-normal'>Carbs : {item.carbs}g</p>
        <p  className='text-xl font-normal'>Fat : {item.fat}g</p>
        <div className='w-full flex space-x-4 mt-4'>
        <button 
         onClick ={() => inCreaseQuantity(item)}
        className='w-1/2 bg-green-500 p-1 text-center text-xl rounded cursor-pointer hover:bg-green-600  '>+</button>
          <strong> {item.quantity} </strong>
        <button 
         onClick ={() => decreaseQuantity(item)}
        className='w-1/2 bg-red-500 p-1 text-center text-xl rounded cursor-pointer hover:bg-red-600 '>-</button>
       </div>
        <div className='w-full flex space-x-4 mt-4'>
        <button 
        onClick={handleEdit}
        className='w-1/2 bg-blue-500 p-2 rounded cursor-pointer hover:bg-blue-600  '>Edit</button>
        <button 
        onClick={handleDelete}
        className='w-1/2 bg-red-500 p-2 rounded cursor-pointer hover:bg-red-600 '>Delete</button>
       </div>
      
    </div>
  )
}

export default NutritionItem
