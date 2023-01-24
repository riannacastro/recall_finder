import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from '../navbar/NavBar';
import '../css/FoodRecalls.css';
import Search from '../navbar/Search';

export default function FoodRecalls() {
  const [data, setData] = useState();

  const getData = () => {
    axios.get('https://api.fda.gov/food/enforcement.json?search=report_date:[20220101+TO+20221231]&limit=10')
    .then((resp) => {
      setData(resp.data.results)
      console.log(data)
    });
  };
  
  useEffect(() => {
    getData();
  }, [])

  const tableData = () => {
      return data.map((val) => {
        return <tr key={val.recall_number}>
          <td>{val.product_type}</td>
          <td>{val.report_date}</td>
          <td>{val.product_description}</td>
          <td>{val.reason_for_recall}</td>
        </tr>
      })
  }


  return (
    <div>
      <NavBar />
      <div className='title'>
        <h1>Food Recalls</h1>
      </div>
      <div className='search'>
        <Search />
      </div>
      <div>
        { data ? 
          <table className='center'>
            <tr>
              <th>Category </th>
              <th>Recall Date</th>
              <th>Product Name </th>
              <th>Reason </th>
            </tr>
            <tbody>
              {tableData()}
            </tbody>
      </table> 
      : <></>}
      </div>
    </div>
  )
}
