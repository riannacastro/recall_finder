import React from 'react'
import './../css/NavBar.css'
import { BsSearch } from 'react-icons/bs'

export default function NavBar() {
  return (
    <div className='header'>
      <h1>Recall <BsSearch /> Finder</h1>
      <h3>Food Recalls</h3>
      <h3>Drug Recalls</h3>
      <h3>Device Recalls</h3>
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
