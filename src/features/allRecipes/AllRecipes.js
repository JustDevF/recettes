//composant react 

import React, { useEffect } from 'react';
// Add useDispatch to the import statement below.
import { useSelector, useDispatch } from 'react-redux';
//fonction créateur d'action
import { addRecipe } from '../favoriteRecipes/favoriteRecipesSlice';
//le selecteur
import { loadData, selectFilteredAllRecipes } from './allRecipesSlice';
//les composants
import FavoriteButton from "../../components/FavoriteButton";
import Recipe from "../../components/Recipe";
const favoriteIconURL = 'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/favorite.svg';

//Le composant
export const AllRecipes = () => {
  //récup de donnée sélectionnées par le sélecteur dau store
  const allRecipes = useSelector(selectFilteredAllRecipes);
  // envoyer une action au store
  const dispatch = useDispatch()
  //FGE envoyer une fonction créateur d'action comme action envoyer au store
  const onFirstRender = () => {
    dispatch(loadData());
  }
  useEffect(onFirstRender, []);
  
  //FGE
  const onAddRecipeHandler = (recipe) => {
    dispatch(addRecipe(recipe));
  };
  //rendu jsx
  return (
    <div className="recipes-container">
      {allRecipes.map((recipe) => (
        <Recipe recipe={recipe} key={recipe.id}>
          <FavoriteButton
            onClickHandler={() => onAddRecipeHandler(recipe)}
            icon={favoriteIconURL}
          >
            Add to Favorites
          </FavoriteButton>
        </Recipe>
      ))}
    </div>
  );
};









