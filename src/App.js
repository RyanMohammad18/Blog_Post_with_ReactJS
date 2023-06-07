
import { useState } from 'react';
import AddList from './AddList';
import './App.css';
import Modal from './modal';


const data=[
  {
    id: "1",
    title: "Javascript", 
    startdate:"4/5/2023"
  },
  {
    id: "2",
    title: "Django", 
    startdate:"5/5/2023"
  },
  {
    id: "3",
    title: "PHP", 
    startdate:"6/5/2023"
  },
]

function App() {

  const [list,setList] = useState(data)

  const [showModal,setShowModal]= useState(false);

  const handleDelete =(id) => {
    const filterlist = list.filter(item => item.id !==id)
    setList(filterlist)
 
 
  }

  
  return (
    <div className="App">
      <h1>To do list</h1>
      {
        list.map(item =>(
          <div onClick={() => handleDelete(item.id)} key={item.id} className='card'>

            <h2>{item.title}</h2>
            <p>{item.startdate}</p>
          </div>
        ))
      }
      <div className='btn-container'>
         <button onClick={(e) => setShowModal(true)}>add list</button>

      </div>
      

      {
        showModal && <Modal>

        
          <AddList setList={setList} setShowModal = {setShowModal}/>
          <button onClick={(e) => setShowModal(false)}>Close Modal</button>
        </Modal>
      }

      
      
      
    </div>
  );
}

export default App;
