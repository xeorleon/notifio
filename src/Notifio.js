import { NotificationManager } from './core/NotificationManager.js';

class Notifio {
  constructor(config) {
    this.manager = new NotificationManager(config);
  }

  success(message, options = {}) {
    return this.manager.show({ ...options, type: 'success', message });
  }

  error(message, options = {}) {
    return this.manager.show({ ...options, type: 'error', message });
  }

  warning(message, options = {}) {
    return this.manager.show({ ...options, type: 'warning', message });
  }

  info(message, options = {}) {
    return this.manager.show({ ...options, type: 'info', message });
  }

  neutral(message, options = {}) {
    return this.manager.show({ ...options, type: 'neutral', message });
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