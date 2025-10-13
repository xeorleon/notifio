import { useCallback } from 'react';
import { useNotifio } from './NotifioProvider';
import { NotificationOptions, NotificationType } from '../types';

export function useNotification() {
  const notifio = useNotifio();

  const success = useCallback((message: string, options?: Omit<NotificationOptions, 'type' | 'message'>) => {
    return notifio.success(message, options);
  }, [notifio]);

  const error = useCallback((message: string, options?: Omit<NotificationOptions, 'type' | 'message'>) => {
    return notifio.error(message, options);
  }, [notifio]);

  const warning = useCallback((message: string, options?: Omit<NotificationOptions, 'type' | 'message'>) => {
    return notifio.warning(message, options);
  }, [notifio]);

  const info = useCallback((message: string, options?: Omit<NotificationOptions, 'type' | 'message'>) => {
    return notifio.info(message, options);
  }, [notifio]);

  const show = useCallback((options: NotificationOptions) => {
    return notifio.show(options);
  }, [notifio]);

  const close = useCallback((id: string) => {
    notifio.close(id);
  }, [notifio]);

  const closeAll = useCallback(() => {
    notifio.closeAll();
  }, [notifio]);

  return {
    success,
    error,
    warning,
    info,
    show,
    close,
    closeAll,
  };
}