import store from "../../app/store";

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
    </div>
  );
}
