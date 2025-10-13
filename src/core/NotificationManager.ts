import { NotificationInstance, NotificationOptions, NotifioConfig, NotificationType, NotificationPosition } from '../types';

class NotificationManager {
  private notifications: Map<string, NotificationInstance> = new Map();
  private container: HTMLElement | null = null;
  private config: NotifioConfig = {
    position: 'top-right',
    duration: 5000,
    maxNotifications: 5,
    closable: true,
    showIcon: true,
  };

  constructor(config?: NotifioConfig) {
    if (config) {
      this.config = { ...this.config, ...config };
    }
    this.init();
  }

  private init(): void {
    this.createContainer();
    this.injectStyles();
  }

  private createContainer(): void {
    if (typeof document === 'undefined') return;

    this.container = document.createElement('div');
    this.container.id = 'notifio-container';
    this.container.className = `notifio-container notifio-${this.config.position}`;
    
    if (this.config.className) {
      this.container.className += ` ${this.config.className}`;
    }

    if (this.config.style) {
      Object.assign(this.container.style, this.config.style);
    }

    document.body.appendChild(this.container);
  }

  private injectStyles(): void {
    if (typeof document === 'undefined') return;

    const styleId = 'notifio-styles';
    if (document.getElementById(styleId)) return;

    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = this.getStyles();
    document.head.appendChild(style);
  }

  private getStyles(): string {
    return `
      .notifio-container {
        position: fixed;
        z-index: 9999;
        pointer-events: none;
        max-width: 400px;
      }

      .notifio-container.notifio-top-left {
        top: 20px;
        left: 20px;
      }

      .notifio-container.notifio-top-right {
        top: 20px;
        right: 20px;
      }

      .notifio-container.notifio-top-center {
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
      }

      .notifio-container.notifio-bottom-left {
        bottom: 20px;
        left: 20px;
      }

      .notifio-container.notifio-bottom-right {
        bottom: 20px;
        right: 20px;
      }

      .notifio-container.notifio-bottom-center {
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
      }

      .notifio-notification {
        background: white;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        margin-bottom: 12px;
        padding: 16px;
        pointer-events: auto;
        position: relative;
        display: flex;
        align-items: flex-start;
        gap: 12px;
        min-width: 300px;
        max-width: 400px;
        animation: notifio-slide-in 0.3s ease-out;
        border-left: 4px solid;
      }

      .notifio-notification.notifio-success {
        border-left-color: #10b981;
      }

      .notifio-notification.notifio-error {
        border-left-color: #ef4444;
      }

      .notifio-notification.notifio-warning {
        border-left-color: #f59e0b;
      }

      .notifio-notification.notifio-info {
        border-left-color: #3b82f6;
      }

      .notifio-icon {
        flex-shrink: 0;
        width: 20px;
        height: 20px;
        margin-top: 2px;
      }

      .notifio-content {
        flex: 1;
        min-width: 0;
      }

      .notifio-title {
        font-weight: 600;
        font-size: 14px;
        margin: 0 0 4px 0;
        color: #1f2937;
      }

      .notifio-message {
        font-size: 14px;
        margin: 0;
        color: #6b7280;
        line-height: 1.4;
      }

      .notifio-close {
        position: absolute;
        top: 8px;
        right: 8px;
        background: none;
        border: none;
        cursor: pointer;
        padding: 4px;
        border-radius: 4px;
        color: #9ca3af;
        font-size: 16px;
        line-height: 1;
        transition: color 0.2s, background-color 0.2s;
      }

      .notifio-close:hover {
        color: #6b7280;
        background-color: #f3f4f6;
      }

      .notifio-progress {
        position: absolute;
        bottom: 0;
        left: 0;
        height: 3px;
        background: currentColor;
        opacity: 0.3;
        animation: notifio-progress linear;
      }

      @keyframes notifio-slide-in {
        from {
          opacity: 0;
          transform: translateX(100%);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }

      @keyframes notifio-slide-out {
        from {
          opacity: 1;
          transform: translateX(0);
        }
        to {
          opacity: 0;
          transform: translateX(100%);
        }
      }

      @keyframes notifio-progress {
        from {
          width: 100%;
        }
        to {
          width: 0%;
        }
      }

      .notifio-notification.notifio-exiting {
        animation: notifio-slide-out 0.3s ease-in forwards;
      }

      @media (max-width: 480px) {
        .notifio-container {
          left: 10px !important;
          right: 10px !important;
          transform: none !important;
          max-width: none;
        }

        .notifio-notification {
          min-width: auto;
          max-width: none;
        }
      }
    `;
  }

  private generateId(): string {
    return `notifio-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }

  private getIcon(type: NotificationType): string {
    const icons = {
      success: '✓',
      error: '✕',
      warning: '⚠',
      info: 'ℹ',
    };
    return icons[type];
  }

  private createNotificationElement(notification: NotificationInstance): HTMLElement {
    const element = document.createElement('div');
    element.className = `notifio-notification notifio-${notification.type}`;
    element.id = notification.id;

    if (notification.className) {
      element.className += ` ${notification.className}`;
    }

    if (notification.style) {
      Object.assign(element.style, notification.style);
    }

    if (notification.onClick) {
      element.style.cursor = 'pointer';
      element.addEventListener('click', notification.onClick);
    }

    let iconHtml = '';
    if (notification.showIcon) {
      const icon = notification.customIcon || this.getIcon(notification.type);
      iconHtml = `<div class="notifio-icon">${icon}</div>`;
    }

    const closeButton = notification.closable
      ? `<button class="notifio-close" onclick="notifio.close('${notification.id}')">&times;</button>`
      : '';

    const titleHtml = notification.title
      ? `<div class="notifio-title">${notification.title}</div>`
      : '';

    element.innerHTML = `
      ${iconHtml}
      <div class="notifio-content">
        ${titleHtml}
        <div class="notifio-message">${notification.message}</div>
      </div>
      ${closeButton}
      <div class="notifio-progress" style="animation-duration: ${notification.duration}ms;"></div>
    `;

    return element;
  }

  private enforceMaxNotifications(): void {
    if (this.notifications.size <= this.config.maxNotifications!) return;

    const sortedNotifications = Array.from(this.notifications.values())
      .sort((a, b) => a.timestamp - b.timestamp);

    const toRemove = sortedNotifications.slice(0, this.notifications.size - this.config.maxNotifications!);
    toRemove.forEach(notification => this.close(notification.id));
  }

  show(options: NotificationOptions): string {
    const id = options.id || this.generateId();
    const notification: NotificationInstance = {
      id,
      type: options.type || 'info',
      title: options.title,
      message: options.message,
      duration: options.duration ?? this.config.duration!,
      position: options.position || this.config.position!,
      closable: options.closable ?? this.config.closable!,
      showIcon: options.showIcon ?? this.config.showIcon!,
      customIcon: options.customIcon,
      onClick: options.onClick,
      onClose: options.onClose,
      className: options.className,
      style: options.style,
      timestamp: Date.now(),
    };

    this.notifications.set(id, notification);
    this.enforceMaxNotifications();

    if (this.container) {
      const element = this.createNotificationElement(notification);
      this.container.appendChild(element);

      if (notification.duration > 0) {
        setTimeout(() => {
          this.close(id);
        }, notification.duration);
      }
    }

    return id;
  }

  close(id: string): void {
    const notification = this.notifications.get(id);
    if (!notification) return;

    const element = document.getElementById(id);
    if (element) {
      element.classList.add('notifio-exiting');
      setTimeout(() => {
        element.remove();
      }, 300);
    }

    if (notification.onClose) {
      notification.onClose();
    }

    this.notifications.delete(id);
  }

  closeAll(): void {
    this.notifications.forEach((_, id) => this.close(id));
  }

  updateConfig(config: Partial<NotifioConfig>): void {
    this.config = { ...this.config, ...config };
  }

  getNotifications(): NotificationInstance[] {
    return Array.from(this.notifications.values());
  }
}

export default NotificationManager;
export { NotificationManager };