import React from 'react'
import './css/Home.css'
import HomeRecallTable from './home/HomeRecallTable'
import NavBar from './navbar/NavBar'

export default function Home() {
  return (
    <div className='container'>
      <NavBar />
      <div className='intro'>
        <h3>Safety is a priority. </h3>
        <h3>Check on recalls at the tip of your fingers.</h3>
        <p>Some of the latest recalls in 2023</p>
      </div>
      <HomeRecallTable />
    </div>
  )
}
