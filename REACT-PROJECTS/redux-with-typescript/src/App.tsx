import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-tiny-toast";

import { useAppSelector } from "./app/hooks";
import { Navbar } from "./components/Navbar";
import { PostsMainPage } from "./features/posts/PostsMainPage";
import SinglePostPage from "./features/posts/SinglePostPage";
import EditPostForm from "./components/EditPostForm";
import LoginPage from "./components/LoginPage";
import UserListPage from "./features/users/UsersList";
import UserPage from "./features/users/UserPage";
import NotificationList from "./components/NotificationsList";

import { selectCurrentUserId } from "./features/auth/authSlice";

import type { JSX } from "react";

interface ProtectedRouteProps {
  children: JSX.Element;
}
export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const currentUserId = useAppSelector(selectCurrentUserId);

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
                  <Route path="/users" element={<UserListPage />} />
                  <Route path="/users/:userId" element={<UserPage />} />
                  <Route path="/notifications" element={<NotificationList />} />

                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
              </ProtectedRoute>
            }
          ></Route>
        </Routes>
        <ToastContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;
