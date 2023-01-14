import React from 'react'
import './../css/NavBar.css'
import { BsSearch } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

export default function NavBar() {
  const navigate = useNavigate();

  return (
    <div className='header'>
      <h1><button>Recall <BsSearch /> Finder</button></h1>
      <button>Home</button>
      <button onClick={() => navigate('/food-recalls')}>Food Recalls</button>
      <button onClick={() => navigate('/drug-recalls')}>Drug Recalls</button>
      <button onClick={() => navigate('/device-recalls')}>Device Recalls</button>
      <form>
        <p>Looking for something specific?</p>
        <label>Search for product: </label>
        <input
          type="text"
          ></input>
      </form>
    </div>
  )
}
