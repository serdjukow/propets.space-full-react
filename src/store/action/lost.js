import { FETCH_LOST_PETS, FETCH_LOST_PET_BY_ID } from "../typeList";
import URL from "../url";

export const getLostPets = () => {
    return async (dispatch) => {
      try {
        const response = await fetch(`${URL}/lostfounds/lost`, {
          method: "GET",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if(response.status!==200)return
        const json = await response.json();
        dispatch(fetchLostPets({ list: json }));
      } catch (e) {
        console.log(e.message);
      }
    };
  };
  
  export const getLostPetById = (id) => {
    return async (dispatch) => {
      try {
        const response = await fetch(`${URL}/lostfounds/lost/${id}`, {
          method: "GET",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if(response.status!==200)return
        const json = await response.json();
        dispatch(fetchLostPetById({ petById: json }));
      } catch (e) {
        console.log(e.message);
      }
    };
  };
  
  const fetchLostPets = (obj) => {
    return {
      type: FETCH_LOST_PETS,
      payload: obj,
    };
  };
  
  const fetchLostPetById = (obj) => {
    return {
      type: FETCH_LOST_PET_BY_ID,
      payload: obj,
    };
  };