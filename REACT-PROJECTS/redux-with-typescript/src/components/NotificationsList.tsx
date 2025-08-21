import { useLayoutEffect } from "react";
import classnames from "classnames";

import {
  allNotificationsRead,
  selectAllNotifications,
} from "../features/notification/notificationSlice";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import TimeAgo from "./TimeAgo";
import PostAuthor from "./PostAuthor";


export default function NotificationsList() {
  const notifications = useAppSelector(selectAllNotifications);
  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    dispatch(allNotificationsRead());
  }, [dispatch]);

  console.log("NotificationsList notifications", notifications);

  const renderedNotification = notifications.map((notification) => {
    const notificationClassname = classnames("notification", {
      new: notification.isNew,
    });
    return (
      <div key={notification.id} className={notificationClassname}>
        <div>
          <b>
            <PostAuthor userId={notification.user} />
          </b>{" "}
          {notification.message}
        </div>
        <TimeAgo timestamp={notification.date} />
      </div>
    );
  });
  return (
    <section className="notificationsList">
      <h2>Notifications</h2>
      {renderedNotification}
    </section>
  );
}
