import { Link } from "react-router-dom";

import { useAppSelector, useAppDispatch } from "../app/hooks";
import { userLoggedOut } from "../features/auth/authSlice";
import { selectCurrentUser } from "../features/users/usersSlice";

export const Navbar = () => {
  const user = useAppSelector(selectCurrentUser);
  const dispatch = useAppDispatch();

  console.log("Navbar user:", user);

  const isLoggedIn = !!user;

  const onLogoutClicked = () => {
    dispatch(userLoggedOut());
  };

  return (
    <nav>
      <section>
        <h1>Redux Essentials Example</h1>
        <div className="navContent">
          <div className="navLinks">
            <Link to="/posts">Posts</Link>
          </div>
          {isLoggedIn && (
            <div className="userDetails">
              {user.name}
              <button onClick={onLogoutClicked}>Logout</button>
            </div>
          )}
        </div>
      </section>
    </nav>
  );
};
