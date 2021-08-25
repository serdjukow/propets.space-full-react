import { serviceId } from "./typeList";

const InitialState = {
  users: {
    user: {},
    tokenIsValid: false,
  },
  foundsPets: {
    list: [],
    petById: {},
  },
  lostsPets: {
    list: [],
    petById: {},
  },
  posts: {
    list: [],
    postById: {},
  },
  articles:{list: [
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
  articleById:{}
},
};
export default InitialState;
