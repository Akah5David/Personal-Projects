import { BrowserRouter, Routes, Route } from "react-router-dom";

import { PostsList } from "./features/posts/PostsList";
import { Navbar } from "./components/Navbar";
import { AddPostForm } from "./features/posts/AddPostForm";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <AddPostForm />
                <PostsList />
              </>
            }
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
