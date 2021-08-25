import { FETCH_ARTICLES, FETCH_ARTICLES_BY_ID, serviceId } from "../typeList";
import URL from "../url";

export const getArticles = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL}/articles`, {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status !== 200) return;

      const json = await response.json();
      console.log(json);
      const articels = await filterService(json);
      await dispatch(fetchService({ list: articels.list }));
    } catch (e) {
      console.log(e.message);
    }
  };
};

export const getArticleById = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL}/articles/${id}`, {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status !== 200) return;

      const json = await response.json();
      await dispatch(fetchServiceById({ articleById: json }));
    } catch (e) {
      console.log(e.message);
    }
  };
};

export const addArticle = (data) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL}/articles`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": localStorage.token,
        },
        body: JSON.stringify(data),
      });
      
    } catch (e) {
      console.log(e.message);
    }
  };
};

const filterService = (data) => {
  const articels = {
    list: [
      {
        [serviceId[0]]: {
          list: [],
        },
      },
      {
        [serviceId[1]]: {
          list: [],
        },
      },
      {
        [serviceId[2]]: {
          list: [],
        },
      },
      {
        [serviceId[3]]: {
          list: [],
        },
      },
    ],
  };
  for (let i = 0; i < 4; i++) {
    articels.list[i][serviceId[i]].list = data.filter(
      (art) => art.serviceId === i + 1
    );
  }
  return articels;
};

const fetchService = (data) => {
  return {
    type: FETCH_ARTICLES,
    payload: data,
  };
};

const fetchServiceById = (data) => {
  return {
    type: FETCH_ARTICLES_BY_ID,
    payload: data,
  };
};
