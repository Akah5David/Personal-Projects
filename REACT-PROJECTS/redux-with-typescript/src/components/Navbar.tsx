import { Link, useNavigate } from "react-router-dom";

// import {Icon} from "./Icon"
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { selectCurrentUser } from "../features/users/usersSlice";
import { logout } from "../features/auth/authSlice";
import {
  fetchNotifications,
  selectUnreadNotificationsCount,
} from "../features/notification/notificationSlice";
import type React from "react";

export const Navbar = () => {
  const user = useAppSelector(selectCurrentUser);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const numUnreadNotifications = useAppSelector(selectUnreadNotificationsCount);

  let isLoggedIn = !!user;

  const onLogoutClicked = () => {
    dispatch(logout());
    navigate("/");
  };

  const fetchNewNotifications = () => {
    dispatch(fetchNotifications());
  };

  let unreadNotificationBadge: React.ReactNode | undefined;

  if (numUnreadNotifications > 0) {
    unreadNotificationBadge = (
      <span className="badge">{numUnreadNotifications}</span>
    );
  }

  return (
    <nav>
      <section>
        <h1>Redux Essentials Example</h1>
        <div className="navContent">
          <div className="navLinks">
            <Link to="/posts">Posts</Link>
            <Link to="/users">Users</Link>
            <Link to="/notifications">
              Notifications{unreadNotificationBadge}
            </Link>
            <button className="button small" onClick={fetchNewNotifications}>
              RefreshNotifications
            </button>
          </div>
          {isLoggedIn && (
            <div className="userDetails">
              {user?.name}
              <button onClick={onLogoutClicked}>Logout</button>
            </div>
          )}
        </div>
      </section>
    </nav>
  );
};
