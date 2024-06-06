import { useRouter } from "next/router";

const { default: axios } = require("axios");

export const getRecipesHomeAction = () => (dispatch) => {
  dispatch({
    type: "GET_RECIPES_HOME_REQUEST",
  });
  axios
    .get(`${process.env.NEXT_PUBLIC_API_URL}recipes?limit=6`)
    .then((res) => {
      console.log(res.data.data);
      dispatch({
        type: "GET_RECIPES_HOME_SUCCEED",
        payload: res.data.data,
      });
    })
    .catch((err) => {
      console.log(err.response);
      dispatch({
        type: "GET_RECIPES_HOME_FAILED",
        payload: err.response,
      });
    });
};

export const getSearchedRecipesHomeAction = (setSearching, router, searching) => (dispatch) => {
    dispatch({
      type: "GET_RECIPES_HOME_REQUEST",
    });
    axios
      .get(
        `${process.env.NEXT_PUBLIC_API_URL}recipes?search=${searching}&limit=10000`
      )
      .then((res) => {
        console.log("Searching: ", res.data.data);
        dispatch({
            type: "GET_SEARCHED_RECIPES_HOME_SUCCEED",
            payload: res.data.data
        })
        router.push({
          query: { search: searching },
        });
        console.log(router.query);
        setSearching("");
      })
      .catch((err) => {
        console.log(err.response);
        dispatch({
            type: "GET_RECIPES_HOME_FAILED",
            payload: err.response,
          });
      });
  };
