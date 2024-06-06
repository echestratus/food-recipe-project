import getAllRecipesReducer from "./getAllRecipesReducer";
import getProfileReducer from "./getProfileReducer";
import getRecipesHomeReducer from "./getRecipesHomeReducer";
import loginReducer from "./loginReducer";
import registerReducer from "./registerReducer";

const { combineReducers } = require("redux");

const rootReducer = combineReducers({
    getRecipesHome: getRecipesHomeReducer,
    getAllRecipes: getAllRecipesReducer,
    getProfile: getProfileReducer,
    register: registerReducer,
    login: loginReducer
})

export default rootReducer