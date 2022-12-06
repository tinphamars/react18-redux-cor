export const AddOne = () => {
  return {
    type: "change/addNumber",
  };
};

export const SubOne = () => {
  return {
    type: "change/addNumber",
  };
};

export const AddStudent = (student) => {
  return {
    type: "student/addstudent",
    payload: student,
  };
};
