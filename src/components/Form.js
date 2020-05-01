import React from 'react'

const Form = ({ handleSelect, handleInput, handleClick, updateInfo }) => (
  <div className="form-page">
    <div className="form-items">
    <select onChange={handleSelect}
      defaultValue={"DEFAULT"}>
      <option value="DEFAULT" disabled>Choose a Spirit:</option>
      {updateInfo.allSpirits.map(spirit => {
        return <option key={spirit}>{spirit}</option>
      })
      }
    </select>
    <input onChange={handleInput}
      type="text" placeholder="type a word" >
      </input>
    </div>
    <button onClick={handleClick}>Curate Away!</button>
  </div>
)

export default Form