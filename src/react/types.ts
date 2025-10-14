export type NotificationType = 'success' | 'error' | 'warning' | 'info' | 'neutral';

export type NotificationPosition = 
  | 'top-left' 
  | 'top-right' 
  | 'top-center'
  | 'bottom-left' 
  | 'bottom-right' 
  | 'bottom-center';

export interface NotificationOptions {
  id?: string;
  type?: NotificationType;
  title?: string;
  description?: string;
  linkButton?: {
    text: string;
    onClick?: () => void;
  };
  duration?: number;
  position?: NotificationPosition;
  closable?: boolean;
  showIcon?: boolean;
  customIcon?: string;
  onClick?: () => void;
  onClose?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

export interface NotificationInstance {
  id: string;
  type: NotificationType;
  title?: string;
  description?: string;
  linkButton?: {
    text: string;
    onClick?: () => void;
  };
  duration: number;
  position: NotificationPosition;
  closable: boolean;
  showIcon: boolean;
  customIcon?: string;
  onClick?: () => void;
  onClose?: () => void;
  className?: string;
  style?: React.CSSProperties;
  timestamp: number;
}

export interface NotifioConfig {
  position?: NotificationPosition;
  duration?: number;
  maxNotifications?: number;
  closable?: boolean;
  showIcon?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export interface NotifioProviderProps {
  children: React.ReactNode;
  config?: NotifioConfig;
}

export interface NotifioContextType {
  notifio: any; // Will be properly typed when we import Notifio
  notifications: NotificationInstance[];
}