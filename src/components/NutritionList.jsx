import React, { useContext } from 'react'
import NutritionItem from './NutritionItem'
import { NutritionContext } from '../Context'

const NutritionList = () => {
    const {state} = useContext(NutritionContext);
   
    
    
  return (
    <div className='lg:w-4xl w-full mx-auto  bg-zinc-800 rounded shadow-lg p-4 mt-4'>
      <h1 className='text-2xl font-semibold text-center '>NutritionList</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {
            state.items.map((item,index) => (
                <NutritionItem key={index} item={item} />
            ))
        }
    
     
      </div>
      <div className='mt-4 flex flex-col items-center '>
        <h4 className='text-xl font-semibold '> Total Calories : {state.totals.totalCalories}</h4>
        <h4 className='text-xl font-semibold '>Total protein : {state.totals.totalProtein}g</h4>
        <h4 className='text-xl font-semibold '>Total carbs : {state.totals.totalCarbs}g</h4>
        <h4 className='text-xl font-semibold '>Total fat  : {state.totals.totalFat}g</h4>
      </div>

    </div>
  )
}

export default NutritionList
