import React, { useState } from "react";

function Filter({changeEvent}){
    return (
        <div className="Filter">
        <select name="filter" onChange={changeEvent}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
    )
}

export default Filter;