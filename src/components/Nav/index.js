import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    currentCategory
  } = props;

  return (
    <nav className='pb-8'>
      <ul className='flex flex-row justify-evenly'>
      {categories.map((category) => (
            <li
              className={`text-2xl lg:text-3xl ${currentCategory === category.name && `navActive`
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