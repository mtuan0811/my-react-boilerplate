/* eslint-disable default-case */
import { NotificationManager } from "react-notifications";
export const TYPE_NOTIFICATION = {
  INFO: "info",
  SUCCESS: "success",
  WARNING: "warning",
  ERROR: "error",
};

export const createNotification = (type, message) => {
  switch (type) {
    case TYPE_NOTIFICATION.INFO:
      NotificationManager.info(message);
      break;
    case TYPE_NOTIFICATION.SUCCESS:
      NotificationManager.success(message);
      break;
    case TYPE_NOTIFICATION.WARNING:
      NotificationManager.warning(message);
      break;
    case TYPE_NOTIFICATION.ERROR:
      NotificationManager.error(message);
      break;
  }
};
