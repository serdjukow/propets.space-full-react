import { FETCH_FOUND_PETS, FETCH_FOUND_PET_BY_ID } from "../typeList";
import URL from "../url";

export const getFoundPets = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL}/lostfounds/found`, {
        method: "GET",
        mode: "cors",
        redirect:"follow",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if(response.status!==200)return
      const json = await response.json();
      await dispatch(fetchFoundPets({ list: json }));
    } catch (e) {
      console.log(e.message);
    }
  };
};

export const getFoundPetById = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL}/lostfounds/found/${id}`, {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if(response.status!==200)return
      const json = await response.json();
      dispatch(fetchFoundPetById({ petById: json }));
    } catch (e) {
      console.log(e.message);
    }
  };
};

export const addPet=(data)=>{
  return async (dispatch)=>{
    try{
      const response=await fetch(`${URL}/lostfounds`,{
        method:"POST",
        mode:"cors",
        headers:{
          "Content-Type": "application/json",
          "x-api-key": localStorage.token,
        },
        body: JSON.stringify(data),
      });
    }catch (e) {
      console.log(e.message);
    }
  }
}

const fetchFoundPets = (obj) => {
  return {
    type: FETCH_FOUND_PETS,
    payload: obj,
  };
};

const fetchFoundPetById = (obj) => {
  return {
    type: FETCH_FOUND_PET_BY_ID,
    payload: obj,
  };
};
