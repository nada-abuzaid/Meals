import React from 'react';
import Navbar from '../Navbar/Navbar';
import Filter from '../Filter/filter';
import Cards from '../Meals/Cards';
import Login from '../Login/Login';

export default function Cart({
  meals,
  page = 'cart',
  deleteFromCart,
  isLoggedIn,
  handleLogout,
  openModal,
  price,
  handleChange,
  selectedCategory,
  isFiltered,
  searchByName,
  cart,
  filteredMeals,
  displayLogin,
  closeModal,
  handleLogin,
  getMealDetails,
  history,
}) {
  return (
    <>
      {displayLogin && (
        <Login
          handleLogin={handleLogin}
          closeModal={closeModal}
          history={history}
        />
      )}
      <div className="main">
        <div className="container">
          <Navbar
            searchByName={searchByName}
            isLoggedIn={isLoggedIn}
            handleLogout={handleLogout}
            openModal={openModal}
            cart={cart}
          />
          <Filter handleChange={handleChange} />
          <Cards
            getMealDetails={getMealDetails}
            meals={meals}
            filteredMeals={filteredMeals}
            page={page}
            isFiltered={isFiltered}
            deleteFromCart={deleteFromCart}
            selectedCategory={selectedCategory}
            price={price}
          />
        </div>
      </div>
    </>
  );
}
