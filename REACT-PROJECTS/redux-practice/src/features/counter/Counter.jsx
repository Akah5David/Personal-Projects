import { useSelector, useDispatch } from "react-redux";
import { actions } from "./coreReduxToolkit";

export default function Counter() {
  const count = useSelector((state) => state.counter); //goes inot the store and gets the value
  const dispatch = useDispatch(); // use to trigger the change in state base on the action it receives as argument

  const { increment, decrement } = actions;

  return (
    <div>
      <div>
        <button
          arial-label="decrement value"
          onClick={() => {
            console.log(decrement), dispatch(decrement());
          }}
        >
          decrement
        </button>
        <span> {count} </span>
        <button
          arial-label="Increment value"
          onClick={() => {
            console.log(increment), dispatch(increment());
          }}
        >
          Increment
        </button>
      </div>
      <h1>Counter</h1>
    </div>
  );
}
