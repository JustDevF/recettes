import { createSlice } from '@reduxjs/toolkit';
import { selectSearchTerm } from '../searchTerm/searchTermSlice.js';

// Slice Object
///////////////////////////////////////
export const favoriteRecipesSlice = createSlice({
  name: "favoriteRecipes",
  initialState: [],
  reducers: {
    addRecipe: (state, action) => {
      state.push(action.payload);
    },
    removeRecipe: (state, action) => {
      state.filter(recipe => recipe.id !== action.payload.id)
    },
  },
});

// Selectors
///////////////////////////////////////
export const selectFavoriteRecipes = (state) => state.favoriteRecipes;

export const selectFilteredFavoriteRecipes = (state) => {
  const favoriteRecipes = selectFavoriteRecipes(state);
  const searchTerm = selectSearchTerm(state);

  return favoriteRecipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

// Exports les créateurs d'actions
///////////////////////////////////////
export const {
   addRecipe,
   removeRecipe,
} = favoriteRecipesSlice.actions;

//importer le reducer
export default favoriteRecipesSlice.reducer;