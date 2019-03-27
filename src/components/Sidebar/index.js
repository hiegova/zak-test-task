import React from 'react';
import './style.css';
import { fetchCategories, fetchPtoducts } from '../../redux/actions/index';
import { API, isLoaded, removeClassFromDescendants } from '../../utils';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.onSelect = this.onSelect.bind(this);
  }

  componentWillMount() {
    this.props.store.dispatch(fetchCategories(API.categories));
  }

  onSelect(e) {
    const parent = e.target.parentElement.parentElement;
    const category_id = e.target.getAttribute('id');
    removeClassFromDescendants(parent, 'nav__list-button--active');
    e.target.classList.add('nav__list-button--active');
    this.props.store.dispatch(fetchPtoducts(API.products(category_id)));
  }

  render() {
    const store = this.props.store.getState();
    const categories = store.categories.data;
    const isLoadingData = store.categories.isLoadingData;
    return (
      <aside className="sidebar">
        <nav className="nav">
          <h2 className="nav__title">Товари</h2>
          <ul className="nav__list">
            {isLoadingData ? (
              <li>Загрузка категорий...</li>
            ) : isLoaded(categories) ? (
              categories.map((category, i) => (
                <li className="nav__list-item" key={i}>
                  <button
                    className="nav__list-button"
                    id={category.id}
                    onClick={this.onSelect}
                  >
                    {category.title}
                  </button>
                </li>
              ))
            ) : (
              <li>0 категорий загружено</li>
            )}
          </ul>
        </nav>
      </aside>
    );
  }
}

export default Sidebar;
