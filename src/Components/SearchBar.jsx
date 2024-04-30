import React from 'react'
import { useState } from 'react'

const Search = () => {
    const[search,setSearch]=useState("")
  return (
    <div>
      <form>
        <label>Search</label>
        <input onChange={(e)=>setSearch(e.target.value)}></input>
      </form>

    </div>
  )
}

export default Search