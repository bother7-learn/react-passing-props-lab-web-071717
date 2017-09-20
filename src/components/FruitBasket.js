import React, { Component }  from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = (props) => {
  return (
    <div className="fruit-basket">
      <Filter handleChange={props.updateFilterCallback} filters={props.filters}/>
      <FilteredFruitList
        fruit={props.fruits} filter={props.currentFilter} />
    </div>
  );
}

FruitBasket.defaultProps = {
  filters: "",
  fruit: [],
  filter: [],
  currentFilter: "",
  updateFilterCallback: null
}
// class FruitBasket extends Component {
//   constructor() {
//     super();
//
//     this.state = {
//       filters: [],
//       selectedFilter: null,
//       fruits: []
//     };
//   }
//
//
//
//   render() {
//
//   }
// }

export default FruitBasket;
