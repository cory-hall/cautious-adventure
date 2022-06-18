import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    currentCategory
  } = props;

  return (
    <nav className='nav-div'>
      <ul className='flex-row'>
      {categories.map((category) => (
            <li
              className={`mx-1 ${currentCategory === category.name && `navActive`
                }`}
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category.name);
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
      </ul>
    </nav>
  )
}

export default Nav;