import { Component } from 'react';
import './filter.css';

export default class Filter extends Component {
  state = {
    active: 'all',
  };

  isActive = (name) => {
    this.setState({ active: name });
  };

  render() {
    const { active } = this.state;
    const { handleChange } = this.props;
    return (
      <div className="filter-section">
        <button
          onClick={(e) => {
            handleChange(e);
            this.isActive('all');
          }}
          name="selectedCategory"
          value="all"
          className={active === 'all' ? 'active category' : 'category'}
        >
          All
        </button>

        <button
          onClick={(e) => {
            handleChange(e);
            this.isActive('Soups');
          }}
          name="selectedCategory"
          value="Soups"
          className={active === 'Soups' ? 'active category' : 'category'}
        >
          Soups
        </button>
        <button
          onClick={(e) => {
            handleChange(e);
            this.isActive('Salads');
          }}
          name="selectedCategory"
          value="Salads"
          className={active === 'Salads' ? 'active category' : 'category'}
        >
          Salads
        </button>
        <button
          onClick={(e) => {
            handleChange(e);
            this.isActive('Sandwiches');
          }}
          name="selectedCategory"
          value="Sandwiches"
          className={active === 'Sandwiches' ? 'active category' : 'category'}
        >
          Sandwiches
        </button>
        <button
          onClick={(e) => {
            handleChange(e);
            this.isActive('Pasta');
          }}
          name="selectedCategory"
          value="Pasta"
          className={active === 'Pasta' ? 'active category' : 'category'}
        >
          Pasta
        </button>
        <button
          onClick={(e) => {
            handleChange(e);
            this.isActive('Meat');
          }}
          name="selectedCategory"
          value="Meat"
          className={active === 'Meat' ? 'active category' : 'category'}
        >
          Meat
        </button>
        <select onChange={handleChange} name="price" className="price">
          <option value="none">Select Max Price</option>
          <option value="10">10</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </div>
    );
  }
}
