
import './App.css'

import { useLoaderData } from "react-router-dom"
import CoffeeCard from './CoffeeCard'
import { useState } from 'react'

function App() {
  const loadedCoffees = useLoaderData()
  const [coffees, setCoffees]= useState(loadedCoffees)

  return (
    <> 
      <h1 className='text-center text-5xl font-bold'>Hot Could Coffee {coffees.length}</h1>
      <div className='grid md: grid-cols-3 gap-4'>
        {
          coffees.map(coffee => <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          ></CoffeeCard>)
        }
      </div>
    </>
  )
}

export default App
