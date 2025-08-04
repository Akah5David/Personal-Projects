//creating the state
const InitialStateValues = {
  worker: [],
  status: "idle",
};

//creating action creator
function workersFulfilled(returnedData) {
  return { type: "WORKERS_FULFILLED", payload: returnedData };
}

function workersPending() {
  return { type: "WORKERS_PENDING" };
}

function workersRejected(returnedData) {
  return { type: "WORKERS_REJECTED", payload: returnedData };
}

//creating a reducer function
export default function reducerFunction(state = InitialStateValues, action) {
  switch (action.type) {
    case "WORKERS_FULFILLED": {
      return {
        worker: action.payload,
        status: "succeeded",
      };
    }
    case "WORKERS_PENDING": {
      return {
        worker: [...state.worker],
        status: "loading",
      };
    }
    case "WORKERS_REJECTED": {
      return {
        worker: action.payload,
        status: "failed",
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
}

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

//creating thunkFunction
export function workerOuterCreatorFunction() {
  return async (dispatch, getState) => {
    try {
      dispatch(workersPending());

      //returning a promise is returned before proceeding to the next line of code
      const response = await fetch("http://localhost:3000");

      //instigating a delay
      await delay(1000);

      //ensuring that the promise is converted to an object before proceeding to the next line of code
      const resData = await response.json();

      //next lines of code to be executed after successful promise conversion
      console.log("fetchedData: ", resData);
      dispatch(workersFulfilled(resData));
    } catch (error) {
      console.log("error Object: ", error);
      const errorInfo = error.message;
      dispatch(workersRejected(errorInfo));
    }
  };
}
