import React, { useState } from 'react'

export default function AddList({setList,setShowModal}) {

    const [title,setTitle] = useState("")
    const [date,setDate]= useState("")


    const handleSubmit = (e) =>{
        e.preventDefault();

        const submittedList = {
            title:title,
            startdate:date,
            id: Date.now()
        }

        setList(prevState => [...prevState,submittedList])
        setShowModal(false)
    
    }
  return (


    
    <form onSubmit={handleSubmit}>
        <label>
            <span>Which work you want to add?-  </span>
        
            <input onChange={(e)=>setTitle(e.target.value)} type='text' placeholder='your title' />
        </label>
        <label>
            <span>What is the date? :-   </span>
        
            <input onChange={(e)=>setDate(e.target.value)} type='date'  />
        </label>
        <button><button type="submit" class="btn btn-primary">Submit</button></button>
    </form>
  )
}
