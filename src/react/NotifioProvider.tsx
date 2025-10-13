import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import Notifio from '../Notifio';
import { NotifioConfig, NotificationInstance } from '../types';

interface NotifioContextType {
  notifio: Notifio;
  notifications: NotificationInstance[];
}

const NotifioContext = createContext<NotifioContextType | null>(null);

interface NotifioProviderProps {
  children: ReactNode;
  config?: NotifioConfig;
}

export function NotifioProvider({ children, config }: NotifioProviderProps) {
  const [notifio] = useState(() => new Notifio(config));
  const [notifications, setNotifications] = useState<NotificationInstance[]>([]);

  useEffect(() => {
    const updateNotifications = () => {
      setNotifications(notifio.getNotifications());
    };

    // Update notifications when they change
    const interval = setInterval(updateNotifications, 100);

    return () => clearInterval(interval);
  }, [notifio]);

  return (
    <NotifioContext.Provider value={{ notifio, notifications }}>
      {children}
    </NotifioContext.Provider>
  );
}

export function useNotifio(): Notifio {
  const context = useContext(NotifioContext);
  
  if (!context) {
    throw new Error('useNotifio must be used within a NotifioProvider');
  }
  
  return context.notifio;
}

export function useNotifications(): NotificationInstance[] {
  const context = useContext(NotifioContext);
  
  if (!context) {
    throw new Error('useNotifications must be used within a NotifioProvider');
  }
  
  return context.notifications;
}