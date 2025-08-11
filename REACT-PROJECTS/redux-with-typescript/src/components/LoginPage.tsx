import type React from "react";
import { useNavigate } from "react-router-dom";

import { selectAllUsers } from "../features/users/usersSlice";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { userLoggedIn } from "../features/auth/authSlice";

export default function LoginPage() {
  const users = useAppSelector(selectAllUsers);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const userOptions = users.map((user) => {
    return (
      <option key={user.id} value={user.id}>
        {user.name}
      </option>
    );
  });

  interface LoginPageFormFields extends HTMLFormControlsCollection {
    postAuthor: HTMLSelectElement;
  }

  interface LoginPageFormElements extends HTMLFormElement {
    elements: LoginPageFormFields;
  }

  const handleSubmit = (e: React.FormEvent<LoginPageFormElements>) => {
    e.preventDefault();

    const author = e.currentTarget.elements.postAuthor.value;

    if (!author) {
      return;
    }

    dispatch(userLoggedIn(author));
    navigate("/posts");
  };
  return (
    <section className="postform-data">
      <h2>Login</h2>
      <form className="form-data" onSubmit={handleSubmit}>
        <label htmlFor="postAuthor">Author:</label>
        <select id="postAuthor" name="postAuthor" className="select">
          <option value=""></option>
          {userOptions}
        </select>
        <button type="submit">Save Post</button>
      </form>
    </section>
  );
}
