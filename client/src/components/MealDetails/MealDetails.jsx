import React from 'react';
import Login from '../Login/Login';
import Navbar from '../Navbar/Navbar';
import './mealDetails.css';

export default function MealDetails({
  mealDetails,
  isLoggedIn,
  handleLogout,
  handleLogin,
  displayLogin,
  isOpen,
  openModal,
  cart,
  addToCart,
  closeModal,
  history,
}) {
  const { img_url, name, price, category, description, id } = mealDetails;
  return (
    <>
      {displayLogin && (
        <Login
          type="mealDetails"
          handleLogin={handleLogin}
          closeModal={closeModal}
          history={history}
        />
      )}
      <div className="main-details">
        <div className="container">
          <Navbar
            type="mealDetails"
            isLoggedIn={isLoggedIn}
            handleLogout={handleLogout}
            handleLogin={handleLogin}
            displayLogin={displayLogin}
            isOpen={isOpen}
            cart={cart}
            openModal={openModal}
          />
          <div className="mealDetails">
            <div className="meal-img meal-imgd">
              <img src={img_url} alt="meal img" />
            </div>

            <div className="DataSide">
              <div className="meal-header">
                <h3 className="meal-name meal-named">{name}</h3>
                <p className="meal-price meal-priced">
                  <span> $ </span> {price}
                </p>
              </div>
              <p className="meal-category meal-categoryd">{category}</p>
              <p className="meal-description meal-descriptiond">
                {description}
              </p>
              {!isLoggedIn && (
                <button onClick={(e) => addToCart(e, id)} className="add">
                  Add to cart
                </button>
              )}
              <button onClick={(e) => history.push('/')} className="add back-home">
                Back to Home
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
