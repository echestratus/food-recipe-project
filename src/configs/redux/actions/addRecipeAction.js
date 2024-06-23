import axios from "axios";
import Cookies from "js-cookie";

export const addRecipeAction = (formRecipe, setFormRecipe) => (dispatch) => {
    dispatch({
        type: "ADD_RECIPE_REQUEST"
    })
    axios
      .post(
        `${process.env.NEXT_PUBLIC_API_URL}recipes/`,
        {
          title: formRecipe.title,
          description: formRecipe.description,
          image: formRecipe.image,
        },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get('token')}`,
          },
        }
      )
      .then((res) => {
        alert(res.data.message);
        setFormRecipe({
          title: "",
          description: "",
          image: "",
        });
        dispatch({
            type: "ADD_RECIPE_SUCCEED"
        })
      })
      .catch((err) => {
        console.log(err.response);
        dispatch({
            type: "ADD_RECIPE_FAILED",
            payload: err.response
        })
        alert(`Failed to post recipe`);
      });
}