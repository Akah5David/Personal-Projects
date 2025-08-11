import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { useAppSelector } from "./app/hooks";
import { Navbar } from "./components/Navbar";
import { PostsMainPage } from "./features/posts/PostsMainPage";
import SinglePostPage from "./features/posts/SinglePostPage";
import EditPostForm from "./components/EditPostForm";
import LoginPage from "./components/LoginPage";

import { selectCurrentUsername } from "./features/auth/authSlice";

import type { JSX } from "react";

interface ProtectedRouteProps {
  children: JSX.Element;
}
export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const currentUserId = useAppSelector(selectCurrentUsername);

  if (!currentUserId) {
    return <Navigate to="/" replace />;
  }

  return children;
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route
            path="/*"
            element={
              <ProtectedRoute>
                <Routes>
                  <Route path="/posts" element={<PostsMainPage />} />
                  <Route path="/posts/:postId" element={<SinglePostPage />} />
                  <Route path="/editPost/:postId" element={<EditPostForm />} />
                </Routes>
              </ProtectedRoute>
            }
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
