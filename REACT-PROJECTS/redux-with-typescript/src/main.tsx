import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App.tsx";
import { store } from "./app/store.ts";
import { fetchUsers } from "./features/users/usersSlice";

import { worker } from "./api/server";
async function start() {
  //Start our mock API server
  await worker.start({ onUnhandledRequest: "bypass" });

  store.dispatch(fetchUsers());

  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </StrictMode>
  );
}

start();
