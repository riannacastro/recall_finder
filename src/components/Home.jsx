import React from 'react'
import './css/Home.css'
import HomeRecallTable from './home/HomeRecallTable'
import NavBar from './navbar/NavBar'

export default function Home() {
  return (
    <div className='container'>
      <NavBar />
      <div className='intro'>
        <h2>Safety is a priority. </h2>
        <hr />
        <h3>Check on recalls at the tip of your fingers.</h3>
      </div>
      <div>
        <p>MOST RECENT RECALLS (2022):</p>
      </div>
      <HomeRecallTable />
    </div>
  )
}
