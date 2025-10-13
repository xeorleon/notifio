import { NotificationManager } from './core/NotificationManager.js';

class Notifio {
  constructor(config) {
    this.manager = new NotificationManager(config);
  }

  success(title, options = {}) {
    return this.manager.show({ ...options, type: 'success', title, message: '' });
  }

  error(title, options = {}) {
    return this.manager.show({ ...options, type: 'error', title, message: '' });
  }

  warning(title, options = {}) {
    return this.manager.show({ ...options, type: 'warning', title, message: '' });
  }

  info(title, options = {}) {
    return this.manager.show({ ...options, type: 'info', title, message: '' });
  }

  neutral(title, options = {}) {
    return this.manager.show({ ...options, type: 'neutral', title, message: '' });
  }

  // Style-specific methods
  solid(type, message, options = {}) {
    return this.manager.show({ ...options, type, message, style: 'solid' });
  }

  light(type, message, options = {}) {
    return this.manager.show({ ...options, type, message, style: 'light' });
  }

  outline(type, message, options = {}) {
    return this.manager.show({ ...options, type, message, style: 'outline' });
  }

  show(options) {
    return this.manager.show(options);
  }

  close(id) {
    this.manager.close(id);
  }

  closeAll() {
    this.manager.closeAll();
  }

  updateConfig(config) {
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
  window.notifio = notifio;
}

export { Notifio, notifio };