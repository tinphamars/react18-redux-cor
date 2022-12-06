const initState = {
  startNuber: 10,
  students: [{ id: 10, name: "Master JI" }],
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "change/addNumber":
      return {
        ...state,
        startNuber: state.startNuber + 1,
      };

    case "student/addstudent":
      return {
        ...state,
        students: [...state.students, action.payload],
      };

    default:
      return state;
  }
};
export default rootReducer;
