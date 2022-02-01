// reducre is a function which takes state and action as a parameter.
// state  -> current instance of the data.
// action -> js object which tells reducer what just happens
// reducer -> takes state and returns updated one based on action
export default function reducer(state = [], action) {
  // this reducer is a pure function
  let lastId = 0;
  if (action.type === "bugAdded") {
    return [
      ...state,
      {
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      },
    ];
  } else if (action.type === "bugRemoved") {
    return state.filter((bug) => bug.id !== action.payload.id);
  } else if (action.type === "bugResolved") {
    return state.map((bug) =>
      bug.id !== action.payload.id ? bug : { ...bug, resolved: true }
    );
  }
  return state;
}

// structure of action
/*{
    type:"bugAdded"// redux only looks for type
    payload:{ //  payload contains all data about the action
        description:"..." // contains minimum information about the action
    }
}*/
