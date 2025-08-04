import { workerOuterCreatorFunction } from "./fetchImageSlice";
import store from "../../app/workersStore";
import classes from "./fetchImage.module.css";

export default function fetchWorkers() {
  const workersState = store.getState().worker;
  const statusState = store.getState().status;

  return (
    <div>
      {statusState === "loading" && <p>{statusState}...</p>}
      {statusState === "idle" && (
        <p>Press the below button to see workers details</p>
      )}
      {statusState === "failed" && <p>{workersState}</p>}

      {statusState === "succeeded" && (
        <ul className={classes.styleUL}>
          {workersState.map((worker) => {
            console.log("worker ID: ", worker.id);
            console.log("All workers: ", workersState);
            return (
              <li key={worker.id}>
                <img
                  src={worker.image}
                  alt={worker.occupation}
                  className={classes.styleImage}
                />
                <div>
                  <h3>
                    {worker.firstName} {worker.lastName}
                  </h3>
                  <p>{worker.occupation}</p>
                </div>
              </li>
            );
          })}
        </ul>
      )}

      <button onClick={() => store.dispatch(workerOuterCreatorFunction())}>
        Fetch Workers Data
      </button>
    </div>
  );
}
