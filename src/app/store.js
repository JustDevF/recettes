//importer le toolkit de reduxjs
import { configureStore } from "@reduxjs/toolkit";
//importer les reducers
import favoriteRecipesReducer from "../features/favoriteRecipes/favoriteRecipesSlice";
import {searchTermReducer} from "../features/searchTerm/searchTermSlice";
import {allRecipesReducer} from "../features/allRecipes/allRecipesSlice";

//redux toolkit
//création du store
export default configureStore({
  //reducer root contient des reducers 
  reducer: {
    favoriteRecipes: favoriteRecipesReducer,
    searchTerm: searchTermReducer,
    allRecipes: allRecipesReducer
  },
});