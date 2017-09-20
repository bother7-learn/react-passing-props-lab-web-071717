import React from 'react';

import FruitBasket from './FruitBasket';

// const App = () => <FruitBasket />;
export default class App extends React.Component {
  constructor() {
    super()

    this.state = {
      fruit: [],
      filters: [],
      currentFilter: null
    }
  }
  componentWillMount() {
    this.fetchFilters();
    this.fetchFruits();
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }
  fetchFruits = () => {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(fruit => this.setState({ fruit }));
  }

  handleChange = event => {
    this.setState({ selectedFilter: event.target.value });
  }

  render () {
    return (<FruitBasket handleChange={this.handleChange} filters={this.state.filters} fruit={this.state.fruit}/>)
  }
}

// export default App;
