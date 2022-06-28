import React, { useState, useEffect } from 'react'

const Filter = ({ handleFiltersChange }) => {

  const [filters, setFilters] = useState([
    {id: 'wildfires', label: 'Wild fires', isChecked: true}, 
    {id: 'severeStorms', label: 'Severe storms', isChecked: true}
  ])

  const checkBoxChange = ({ target : { name, checked } }) => {
    let newCheckBoxes = [...filters]
    newCheckBoxes.forEach(item => {
      if (item.id === name) {
        item.isChecked = checked
      }
    }) 
    setFilters(newCheckBoxes)
    handleFiltersChange(filters)
  }

  return (
    <div className='filters'>
      {filters.map(item => (
        <Checkbox
          label={item.label}
          name={item.id}
          checked={item.isChecked}
          onChange={checkBoxChange}
        />

      ))}
    </div>
  )
}

const Checkbox = ({ label, name, checked, onChange, id}) => {
  return (
    <label>
      <input type="checkbox" name={name} checked={checked} onChange={onChange} id={id} />
      {label}
    </label>
  );
}

export default Filter