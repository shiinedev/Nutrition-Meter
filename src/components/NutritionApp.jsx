import React from 'react'
import NutritionForm from './NutritionForm'
import NutritionList from './NutritionList'

const NutritionApp = () => {
  return (
    <div className='bg-zinc-900  min-h-screen p-4 lg:p-6 text-zinc-100'>
      <h1 className='text-3xl  text-center font-bold'>Nutrition Meter</h1>
      <NutritionForm />
      <NutritionList />
    </div>
  )
}

export default NutritionApp
