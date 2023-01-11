import React, { useState } from 'react'

export default function Search() {
  const [value, setValue] = useState('');

  return (
    <form>
      <label>Search: </label>
      <input
        type='text'
        value={value}
        onChange={setValue}
      />
    </form>
  )
}
