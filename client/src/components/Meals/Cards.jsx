import React from 'react';
import NoDataFound from '../NotFound/NoDataFound';
import Card from './Card';


export default function Cards({
  meals,
  isFiltered,
  selectedCategory,
  filteredMeals,
  deleteMeal,
  openModal,
  login,
  addToCart,
  getMealDetails,
  deleteFromCart,
  page,
  price,
}) {
  if (isFiltered) {
    meals = filteredMeals;
  }

  if (selectedCategory !== 'all') {
    const arr = meals.filter((meal) => meal.category === selectedCategory);
    meals = arr;
  }

  if (price !== 'none') {
    const arr = meals.filter((meal) => meal.price <= price);
    meals = arr;
  }

  return (
    <div className="cards" id='cards'>
      {meals.length ? (meals.map((meal) => {
        return (
          <Card
            key={meal.id}
            meal={meal}
            deleteMeal={deleteMeal}
            openModal={openModal}
            login={login}
            addToCart={addToCart}
            page={page}
            getMealDetails={getMealDetails}
            deleteFromCart={deleteFromCart}
            />
        );
      })) : (
        <NoDataFound/>
      )
    }
    </div>
  );
}
