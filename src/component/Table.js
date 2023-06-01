import React,{useState} from 'react'
import SquareGrid from './SquareGrid'

function Table() {

const [row,setRow] = useState()
const [col,setCol] = useState()
const [color,setColor] = useState([])

  return (
    <div>
     <div className='inputContainer'>
          <label>Column</label>
          <input type='text' name="row" onChange={(e)=>setRow(e.target.value)}/><br/><br/>
        </div>

        <div className='inputContainer'>
          <label>Row</label>
          <input type='text' name='col' onChange={(e)=>setCol(e.target.value)}/><br/><br/>
        </div>
        <div className='inputContainer'>
          <label>Choose Multiple Colors</label>
          <input type='color' name='col' onChange={(e)=>setColor(color=>[...color,e.target.value])}/><br/><br/>
        </div>
       
        <SquareGrid  width={row} height={col} colors={color}/>
        
    </div>
  )
}

export default Table