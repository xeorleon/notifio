import NotificationManager from './core/NotificationManager';
import { NotificationOptions, NotifioConfig, NotificationType } from './types';

class Notifio {
  private manager: NotificationManager;

  constructor(config?: NotifioConfig) {
    this.manager = new NotificationManager(config);
  }

  success(message: string, options?: Omit<NotificationOptions, 'type' | 'message'>): string {
    return this.manager.show({ ...options, type: 'success', message });
  }

  error(message: string, options?: Omit<NotificationOptions, 'type' | 'message'>): string {
    return this.manager.show({ ...options, type: 'error', message });
  }

  warning(message: string, options?: Omit<NotificationOptions, 'type' | 'message'>): string {
    return this.manager.show({ ...options, type: 'warning', message });
  }

  info(message: string, options?: Omit<NotificationOptions, 'type' | 'message'>): string {
    return this.manager.show({ ...options, type: 'info', message });
  }

  show(options: NotificationOptions): string {
    return this.manager.show(options);
  }

  close(id: string): void {
    this.manager.close(id);
  }

  closeAll(): void {
    this.manager.closeAll();
  }

  updateConfig(config: Partial<NotifioConfig>): void {
    this.manager.updateConfig(config);
  }

  getNotifications() {
    return this.manager.getNotifications();
  }
}

// Global instance
const notifio = new Notifio();

// Make it available globally
if (typeof window !== 'undefined') {
  (window as any).notifio = notifio;
}

export default Notifio;
export { Notifio, notifio };
export * from './types';