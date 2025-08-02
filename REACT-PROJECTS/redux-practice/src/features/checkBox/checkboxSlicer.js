function counter(state, action) {
  if (typeof state === "undefined") return 0;

  switch (action.type) {
    case "INCREMENT": {
      return state + 1;
    }
    case "DECREMENT": {
      return state - 1;
    }
    case "INCREMENTBYSECOND": {
      return action.payload + 2;
    }
  }
}

//writing an action creator
function incrementBySecond(payloadValue) {
  return { type: "INCREMENTBYSECOND", payload: payloadValue };
}

//creating selection function
const selectionFunction = (state) => state.counter;

export function outerCreatorFunction() {
  //creating and returning the thunk function
  return (dispatch, getState) => {
    setInterval(() => {
      const currentValue = selectionFunction(getState());
      dispatch(incrementBySecond(currentValue));
    }, 1000);
  };
}

export default counter;
