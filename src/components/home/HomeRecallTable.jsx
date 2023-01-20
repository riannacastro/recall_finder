import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/HomeRecallTable.css';

export default function HomeRecallTable() {
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
  )
}
