import axios from "axios";

export const getAllRecipesAction = () => async (dispatch) => {
    dispatch({
        type: "GET_ALL_RECIPES_REQUEST"
    })
    try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}recipes?limit=60000`
        );
        dispatch({
            type: "GET_ALL_RECIPES_SUCCEED",
            payload: res.data.data
        })
        // return {
        //   props: { recipesProps: res.data.data },
        // };
      } catch (error) {
        console.log(error.response);
        dispatch({
            type: "GET_ALL_RECIPES_FAILED",
            payload: error.response
        })
      }
}