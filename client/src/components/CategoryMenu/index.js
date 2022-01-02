//22.1.6 added to help pull informaton from an async function
import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
//22.1.6 - to be used on dispatch method
import {
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
} from '../../utils/actions';
import { QUERY_CATEGORIES } from '../../utils/queries';
//22.1.6
import { useStoreContext } from '../../utils/GlobalState';

function CategoryMenu() {
  //22.1.6
  const [state, dispatch] = useStoreContext();
  //22.1.6
  const { categories } = state;
  //22.1.6
  const { data: categoryData } = useQuery(QUERY_CATEGORIES);

  useEffect(() => {
    //if categoryData exists or has changed from the response of useQuery, then run dispatch()
    if (categoryData) {
      // execute our dispatch function with our action object indicating the type of action and the data to set our state for categories to
      dispatch({
        type: UPDATE_CATEGORIES,
        categories: categoryData.categories,
      });
    }
  }, [categoryData, dispatch]);

  const handleClick = (id) => {
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: id,
    });
  };

  return (
    <div>
      <h2>Choose a Category:</h2>
      {categories.map((item) => (
        <button
          key={item._id}
          onClick={() => {
            handleClick(item._id);
          }}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
}

export default CategoryMenu;
