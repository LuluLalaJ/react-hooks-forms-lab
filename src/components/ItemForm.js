import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [newItem, setNewItem] = useState({
    id: uuid(),
    name: "",
    category: "Produce"
  })

  function onFormChange(e) {
    const key = e.target.name
    const val = e.target.value 
    setNewItem({
      ...newItem,
      [key]: val
    })
  }

  function submitNewItem(e) {
    e.preventDefault()
    onItemFormSubmit(newItem)
    setNewItem({
      id: uuid(),
      name: "",
      category: "Produce"
    })
  }

  return (
    <form className="NewItem" onSubmit={submitNewItem}>
      <label>
        Name:
        <input type="text" name="name" onChange={onFormChange} value={newItem.name}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={onFormChange} value={newItem.category}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
