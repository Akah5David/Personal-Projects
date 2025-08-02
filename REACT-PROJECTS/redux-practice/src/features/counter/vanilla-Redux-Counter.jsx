import store from "../../app/store";
import { outerCreatorFunction } from "../checkBox/checkboxSlicer";
export default function Counter() {
  const state = store.getState().counter;
  console.log("Current count: ", state);

  return (
    <div>
      <button onClick={() => store.dispatch({ type: "INCREMENT" })}>
        Increment
      </button>
      <h5>Count: {state}</h5>
      <button onClick={() => store.dispatch({ type: "DECREMENT" })}>
        decrement
      </button>
      <button onClick={() => store.dispatch(outerCreatorFunction())}>
        Auto Increment
      </button>
    </div>
  );
}
