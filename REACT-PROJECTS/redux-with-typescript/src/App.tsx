import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { PostsMainPage } from "./features/posts/PostsMainPage";
import SinglePostPage from "./features/posts/SinglePostPage";
import EditPostForm from "./components/EditPostForm";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<PostsMainPage />}></Route>
          <Route path="/posts/:postId" element={<SinglePostPage />} />
          <Route path="/editPost/:postId" element={<EditPostForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
