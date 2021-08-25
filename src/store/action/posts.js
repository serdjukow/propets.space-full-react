import { ADD_COMMENT, FETCH_POSTS, FETCH_POST_BY_ID, LIKE_POST } from "../typeList";
import URL from "../url";

export const getPosts = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL}/posts/`, {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status !== 200) return;
      const json = await response.json();
      await dispatch(fetchPost({ list: json }));
    } catch (e) {
      console.log(e.message);
    }
  };
};

export const getPostsById = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL}/posts/${id}`, {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status !== 200) return;
      const json = await response.json();
      await dispatch(fetchPostById({ postById: json }));
    } catch (e) {
      console.log(e.message);
    }
  };
};

export const addPost = (data) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL}/posts`, {
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

export const addLike = (like, id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL}/posts/${id}`, {
        method: "PUT",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": localStorage.token,
        },
        body: JSON.stringify({ like }),
      });
      if(response.status===200){
        const json=await response.json()
        await dispatch(updatePostsList(json))
      }
    } catch (e) {
      console.log(e.message);
    }
  };
};

export const addComment=(data)=>{
  return async(dispatch)=>{
    try{
      const response=await fetch(`${URL}/comments`,{
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": localStorage.token,
        },
        body: JSON.stringify(data),
      });
      if(response.status===200){
        const json=await response.json()
        await dispatch(addCommentToPost(json))
      }
    }catch(e) {
      console.log(e.message);
    }
  }
}

const fetchPost = (obj) => {
  return {
    type: FETCH_POSTS,
    payload: obj,
  };
};
const fetchPostById = (obj) => {
  return {
    type: FETCH_POST_BY_ID,
    payload: obj,
  };
};

const updatePostsList=(data)=>{
  return{
    type:LIKE_POST,
    payload:data
  }
}

const addCommentToPost=(obj)=>{
return{
  type:ADD_COMMENT,
  payload:obj
}
}
