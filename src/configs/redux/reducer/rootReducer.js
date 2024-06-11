import addRecipeReducer from "./addRecipeReducer";
import deleteLikedRecipeReducer from "./deleteLikedRecipeReducer";
import deleteSavedRecipeReducer from "./deleteSavedRecipeReducer";
import getAllRecipesReducer from "./getAllRecipesReducer";
import getDetailRecipeReducer from "./getDetailRecipeReducer";
import getLikedRecipesReducer from "./getLikedRecipesReducer";
import getMyRecipeReducer from "./getMyRecipeReducer";
import getProfileReducer from "./getProfileReducer";
import getRecipesHomeReducer from "./getRecipesHomeReducer";
import getSavedRecipesReducer from "./getSavedRecipesReducer";
import likeRecipeReducer from "./likeRecipeReducer";
import loginReducer from "./loginReducer";
import registerReducer from "./registerReducer";
import saveRecipeReducer from "./saveRecipeReducer";
import uploadImageReducer from "./uploadImageReducer";

const { combineReducers } = require("redux");

const rootReducer = combineReducers({
    getRecipesHome: getRecipesHomeReducer,
    getAllRecipes: getAllRecipesReducer,
    getProfile: getProfileReducer,
    register: registerReducer,
    login: loginReducer,
    getMyRecipe: getMyRecipeReducer,
    getSavedRecipes: getSavedRecipesReducer,
    getLikedRecipes: getLikedRecipesReducer,
    uploadImage: uploadImageReducer,
    addRecipe: addRecipeReducer,
    getDetailRecipe: getDetailRecipeReducer,
    saveRecipe: saveRecipeReducer,
    deleteSavedRecipe: deleteSavedRecipeReducer,
    likeRecipe: likeRecipeReducer,
    deleteLikedRecipe: deleteLikedRecipeReducer
})

export default rootReducer