import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// import { Provider } from "react-redux";
import store from "./app/workersStore.js";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </StrictMode>
// );
const root = createRoot(document.getElementById("root"));
function render() {
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}

//initial render
render();

//manually run this each time the state changes
store.subscribe(render);
