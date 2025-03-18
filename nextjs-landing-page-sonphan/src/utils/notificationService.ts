import notification from "antd/es/notification";
import { ReactNode } from "react";

type NotificationType = "success" | "info" | "warning" | "error";

interface NotificationProps {
  type: NotificationType;
  message: string;
  description?: string;
  icon?: ReactNode;
  duration?: number;
  placement?: "topLeft" | "topRight" | "bottomLeft" | "bottomRight";
}

export const showNotification = ({
  type,
  message,
  description,
  icon,
  duration = 3,
  placement = "topRight",
}: NotificationProps) => {
  notification[type]({
    message,
    description,
    icon,
    duration,
    placement,
  });
};
