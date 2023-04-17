import React, { useState } from "react";
import itemData from "../data/items";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { v4 as uuid } from "uuid";


function ShoppingList() {
  const [items, setItems] = useState(itemData)
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState(""); 

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }  

  function handleSearch(updatedSearch) {
    setSearch(updatedSearch)
  }
  
  function handleSubmit(newItem) {
    console.log(newItem)
    setItems([...items, newItem])
  }

  const itemsToDisplay = items
  // filter by category
  .filter((item) => selectedCategory === "All" || item.category === selectedCategory)
  
  //filter by search term 
  //the filters are chained here 
  //so that the second filter applies to filtered result by category

  .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearch} search={search}/>
      <ul className="Items"> 
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}        
      </ul>
    </div>
  );
}

export default ShoppingList;
