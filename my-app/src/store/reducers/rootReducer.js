const initState = {
  users: [
    { id: 1, name: "huy" },
    { id: 2, name: "huyen" },
  ],
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "DELETE USER":
      let users = state.users;
      users = users.filter((item) => item.id !== action.payload.id);
      return { ...state, users };
    case "CREATE USER":
      let user = {
        id: Math.floor(Math.random() * 100),
        name: "anh",
      };
      return { ...state, users: [...state.users, user] };
    default:
      return state;
  }
};

export default rootReducer;
