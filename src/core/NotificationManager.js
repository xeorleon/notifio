import { designTokens, alertStyles } from '../design/tokens.js';
import { getIcon } from '../design/icons.js';

class NotificationManager {
  constructor(config = {}) {
    this.notifications = new Map();
    this.container = null;
    this.config = {
      position: 'top-right',
      duration: 5000,
      maxNotifications: 5,
      closable: true,
      showIcon: true,
      ...config
    };
    this.init();
  }

  init() {
    this.createContainer();
    this.injectStyles();
  }

  createContainer() {
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

  getOrCreateContainer(position) {
    if (typeof document === 'undefined') return null;

    const containerId = `notifio-container-${position}`;
    let container = document.getElementById(containerId);
    
    if (!container) {
      container = document.createElement('div');
      container.id = containerId;
      container.className = `notifio-container notifio-${position}`;
      
      if (this.config.className) {
        container.className += ` ${this.config.className}`;
      }

      if (this.config.style) {
        Object.assign(container.style, this.config.style);
      }

      document.body.appendChild(container);
    }

    return container;
  }

  injectStyles() {
    if (typeof document === 'undefined') return;

    const styleId = 'notifio-styles';
    if (document.getElementById(styleId)) return;

    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = this.getStyles();
    document.head.appendChild(style);
  }

  getStyles() {
    return `
      .notifio-container {
        position: fixed;
        z-index: 9999;
        pointer-events: none;
        max-width: 400px;
        font-family: ${designTokens.typography.fontFamily};
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
        border-radius: 6px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        margin-bottom: 12px;
        padding: 8px;
        pointer-events: auto;
        position: relative;
        display: flex;
        align-items: flex-start;
        gap: 8px;
        min-width: 347px;
        max-width: 400px;
        animation: notifio-slide-in 0.3s ease-out;
        border: 1px solid transparent;
        font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      }

      /* Large notification (with title and description) */
      .notifio-notification.notifio-large {
        min-width: 347px;
        padding: 10px;
        gap: 10px;
        height: auto;
        min-height: auto;
      }

      /* Solid styles */
      .notifio-notification.notifio-solid.notifio-info {
        background-color: #8644C6;
        color: #FFFFFF;
        border: 1px solid #8644C6;
      }

      .notifio-notification.notifio-solid.notifio-success {
        background-color: #049A53;
        color: #FFFFFF;
        border: 1px solid #049A53;
      }

      .notifio-notification.notifio-solid.notifio-warning {
        background-color: #CC7E23;
        color: #FFFFFF;
        border: 1px solid #CC7E23;
      }

      .notifio-notification.notifio-solid.notifio-error {
        background-color: #D64851;
        color: #FFFFFF;
        border: 1px solid #D64851;
      }

      .notifio-notification.notifio-solid.notifio-neutral {
        background-color: #262E4D;
        color: #FFFFFF;
        border: 1px solid #262E4D;
      }

      /* Light styles */
      .notifio-notification.notifio-light.notifio-info {
        background-color: #F6EEFE;
        color: #8644C6;
        border: 1px solid #F6EEFE;
      }

      .notifio-notification.notifio-light.notifio-success {
        background-color: #E6F9F0;
        color: #049A53;
        border: 1px solid #E6F9F0;
      }

      .notifio-notification.notifio-light.notifio-warning {
        background-color: #FFF5EA;
        color: #CC7E23;
        border: 1px solid #FFF5EA;
      }

      .notifio-notification.notifio-light.notifio-error {
        background-color: #FFEEF0;
        color: #D64851;
        border: 1px solid #FFEEF0;
      }

      .notifio-notification.notifio-light.notifio-neutral {
        background-color: #EEF2F6;
        color: #485565;
        border: 1px solid #EEF2F6;
      }

      /* Outline styles */
      .notifio-notification.notifio-outline.notifio-info {
        background-color: #FFFFFF !important;
        color: #8644C6;
        border: 1px solid #E3EBEF;
      }

      .notifio-notification.notifio-outline.notifio-success {
        background-color: #FFFFFF !important;
        color: #049A53;
        border: 1px solid #E3EBEF;
      }

      .notifio-notification.notifio-outline.notifio-warning {
        background-color: #FFFFFF !important;
        color: #CC7E23;
        border: 1px solid #E3EBEF;
      }

      .notifio-notification.notifio-outline.notifio-error {
        background-color: #FFFFFF !important;
        color: #D64851;
        border: 1px solid #E3EBEF;
      }

      .notifio-notification.notifio-outline.notifio-neutral {
        background-color: #FFFFFF !important;
        color: #485565;
        border: 1px solid #E3EBEF;
      }

      .notifio-icon {
        flex-shrink: 0;
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 600;
        font-size: 12px;
      }

      .notifio-content {
        flex: 1;
        min-width: 0;
      }

      .notifio-title {
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;
        margin: 0 0 4px 0;
      }

      .notifio-message {
        font-size: 12px;
        line-height: 16px;
        margin: 0;
        font-weight: 400;
      }

      .notifio-description {
        font-size: 12px;
        line-height: 16px;
        margin: 4px 0 0 0;
        opacity: 0.8;
        font-weight: 400;
      }

      .notifio-link-button {
        background: none;
        border: none;
        cursor: pointer;
        font-size: 12px;
        font-weight: 400;
        text-decoration: underline;
        margin-top: 4px;
        padding: 0;
        font-family: inherit;
      }

      .notifio-close {
        position: absolute;
        top: 8px;
        right: 8px;
        background: none !important;
        border: none !important;
        cursor: pointer;
        padding: 0;
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: opacity 0.2s;
        opacity: 0.5;
        outline: none !important;
        box-shadow: none !important;
      }

      .notifio-close svg {
        width: 20px;
        height: 20px;
      }

      .notifio-close:hover {
        opacity: 1;
        background: none !important;
        outline: none !important;
        box-shadow: none !important;
      }

      .notifio-close:focus {
        opacity: 1;
        background: none !important;
        outline: none !important;
        box-shadow: none !important;
      }

      .notifio-close:active {
        opacity: 1;
        background: none !important;
        outline: none !important;
        box-shadow: none !important;
      }

      /* Close icon colors for different styles */
      .notifio-solid .notifio-close {
        color: #FFFFFF;
      }

      .notifio-light .notifio-close,
      .notifio-outline .notifio-close {
        color: #121926;
      }

      /* Link Button Styles */
      .notifio-link-button {
        background: none;
        border: none;
        cursor: pointer;
        font-size: 12px;
        font-weight: 500;
        padding: 0;
        margin-top: 4px;
        text-decoration: underline;
        text-underline-offset: 2px;
        transition: color 0.2s;
        display: inline-block;
      }

      .notifio-link-button:focus {
        outline: none;
      }

      /* Link Button Colors by Type - Solid Style */
      .notifio-solid.notifio-info .notifio-link-button {
        color: #FFFFFF;
        text-decoration: underline;
      }

      .notifio-solid.notifio-success .notifio-link-button {
        color: #FFFFFF;
        text-decoration: underline;
      }

      .notifio-solid.notifio-warning .notifio-link-button {
        color: #FFFFFF;
        text-decoration: underline;
      }

      .notifio-solid.notifio-error .notifio-link-button {
        color: #FFFFFF;
        text-decoration: underline;
      }

      .notifio-solid.notifio-neutral .notifio-link-button {
        color: #FFFFFF;
        text-decoration: underline;
      }

      .notifio-solid .notifio-link-button:hover {
        color: #FFFFFF;
        opacity: 0.8;
      }

      /* Link Button Colors by Type - Light Style */
      .notifio-light.notifio-info .notifio-link-button {
        color: #8644C6;
        text-decoration: underline;
      }

      .notifio-light.notifio-success .notifio-link-button {
        color: #049A53;
        text-decoration: underline;
      }

      .notifio-light.notifio-warning .notifio-link-button {
        color: #CC7E23;
        text-decoration: underline;
      }

      .notifio-light.notifio-error .notifio-link-button {
        color: #D64851;
        text-decoration: underline;
      }

      .notifio-light.notifio-neutral .notifio-link-button {
        color: #262E4D;
        text-decoration: underline;
      }

      .notifio-light.notifio-info .notifio-link-button:hover {
        color: #6B46C1;
      }

      .notifio-light.notifio-success .notifio-link-button:hover {
        color: #03743E;
      }

      .notifio-light.notifio-warning .notifio-link-button:hover {
        color: #995F1A;
      }

      .notifio-light.notifio-error .notifio-link-button:hover {
        color: #B03A42;
      }

      .notifio-light.notifio-neutral .notifio-link-button:hover {
        color: #1A1F2E;
      }

      /* Link Button Colors by Type - Outline Style */
      .notifio-outline.notifio-info .notifio-link-button {
        color: #8644C6;
        text-decoration: underline;
      }

      .notifio-outline.notifio-success .notifio-link-button {
        color: #049A53;
        text-decoration: underline;
      }

      .notifio-outline.notifio-warning .notifio-link-button {
        color: #CC7E23;
        text-decoration: underline;
      }

      .notifio-outline.notifio-error .notifio-link-button {
        color: #D64851;
        text-decoration: underline;
      }

      .notifio-outline.notifio-neutral .notifio-link-button {
        color: #262E4D;
        text-decoration: underline;
      }

      .notifio-outline.notifio-info .notifio-link-button:hover {
        color: #6B46C1;
      }

      .notifio-outline.notifio-success .notifio-link-button:hover {
        color: #03743E;
      }

      .notifio-outline.notifio-warning .notifio-link-button:hover {
        color: #995F1A;
      }

      .notifio-outline.notifio-error .notifio-link-button:hover {
        color: #B03A42;
      }

      .notifio-outline.notifio-neutral .notifio-link-button:hover {
        color: #1A1F2E;
      }

      .notifio-progress {
        position: absolute;
        bottom: 0;
        left: 0;
        height: 3px;
        background: currentColor;
        opacity: 0.3;
        animation: notifio-progress linear;
        border-radius: 0 0 6px 6px;
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

  generateId() {
    return `notifio-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }

  getIcon(type) {
    return getIcon(type);
  }

  createNotificationElement(notification) {
    const element = document.createElement('div');
    const style = notification.style || 'light'; // default to light style
    const isLarge = notification.title || notification.description || notification.linkButton;
    element.className = `notifio-notification notifio-${style} notifio-${notification.type}${isLarge ? ' notifio-large' : ''}`;
    element.id = notification.id;

    if (notification.className) {
      element.className += ` ${notification.className}`;
    }

    if (notification.customStyle) {
      Object.assign(element.style, notification.customStyle);
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
      ? `<button class="notifio-close" data-notification-id="${notification.id}">
           <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
             <g opacity="0.5">
               <path d="M10.8833 10L14.5667 6.31666C14.6281 6.25944 14.6773 6.19044 14.7115 6.11378C14.7456 6.03711 14.764 5.95435 14.7655 5.87043C14.767 5.78651 14.7515 5.70315 14.7201 5.62533C14.6887 5.54751 14.6419 5.47681 14.5825 5.41746C14.5232 5.35812 14.4525 5.31133 14.3747 5.27989C14.2968 5.24846 14.2135 5.23302 14.1296 5.2345C14.0456 5.23598 13.9629 5.25435 13.8862 5.28851C13.8096 5.32267 13.7406 5.37192 13.6833 5.43333L10 9.11666L6.31667 5.43333C6.19819 5.32293 6.04148 5.26283 5.87956 5.26568C5.71765 5.26854 5.56316 5.33413 5.44865 5.44864C5.33414 5.56316 5.26854 5.71764 5.26569 5.87956C5.26283 6.04148 5.32293 6.19818 5.43333 6.31666L9.11667 10L5.43333 13.6833C5.31629 13.8005 5.25055 13.9594 5.25055 14.125C5.25055 14.2906 5.31629 14.4495 5.43333 14.5667C5.55052 14.6837 5.70937 14.7494 5.875 14.7494C6.04062 14.7494 6.19948 14.6837 6.31667 14.5667L10 10.8833L13.6833 14.5667C13.8005 14.6837 13.9594 14.7494 14.125 14.7494C14.2906 14.7494 14.4495 14.6837 14.5667 14.5667C14.6837 14.4495 14.7494 14.2906 14.7494 14.125C14.7494 13.9594 14.6837 13.8005 14.5667 13.6833L10.8833 10Z" fill="currentColor"/>
             </g>
           </svg>
         </button>`
      : '';

    const titleHtml = notification.title
      ? `<div class="notifio-title">${notification.title}</div>`
      : '';

    const descriptionHtml = notification.description
      ? `<div class="notifio-description">${notification.description}</div>`
      : '';

    const linkButtonHtml = notification.linkButton
      ? `<button class="notifio-link-button" data-link-button="true">
           ${notification.linkButton.text || 'Link Button'}
         </button>`
      : '';

    element.innerHTML = `
      ${iconHtml}
      <div class="notifio-content">
        ${titleHtml}
        <div class="notifio-message">${notification.message}</div>
        ${descriptionHtml}
        ${linkButtonHtml}
      </div>
      ${closeButton}
      <div class="notifio-progress" style="animation-duration: ${notification.duration}ms;"></div>
    `;

    // Add close button event listener
    if (notification.closable) {
      const closeBtn = element.querySelector('.notifio-close');
      if (closeBtn) {
        closeBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          this.close(notification.id);
        });
      }
    }

    // Add link button event listener
    if (notification.linkButton && notification.linkButton.onClick) {
      const linkBtn = element.querySelector('.notifio-link-button');
      if (linkBtn) {
        linkBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          notification.linkButton.onClick();
        });
      }
    }

    return element;
  }

  enforceMaxNotifications() {
    if (this.notifications.size <= this.config.maxNotifications) return;

    const sortedNotifications = Array.from(this.notifications.values())
      .sort((a, b) => a.timestamp - b.timestamp);

    const toRemove = sortedNotifications.slice(0, this.notifications.size - this.config.maxNotifications);
    toRemove.forEach(notification => this.close(notification.id));
  }

  show(options) {
    const id = options.id || this.generateId();
    const notification = {
      id,
      type: options.type || 'info',
      title: options.title,
      message: options.message,
      description: options.description,
      linkButton: options.linkButton,
      duration: options.duration ?? this.config.duration,
      position: options.position || this.config.position,
      closable: options.closable ?? this.config.closable,
      showIcon: options.showIcon ?? this.config.showIcon,
      customIcon: options.customIcon,
      onClick: options.onClick,
      onClose: options.onClose,
      className: options.className,
      style: options.style,
      timestamp: Date.now(),
    };

    this.notifications.set(id, notification);
    this.enforceMaxNotifications();

    if (typeof document !== 'undefined') {
      const element = this.createNotificationElement(notification);
      const container = this.getOrCreateContainer(notification.position);
      container.appendChild(element);

      if (notification.duration > 0) {
        setTimeout(() => {
          this.close(id);
        }, notification.duration);
      }
    }

    return id;
  }

  close(id) {
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

  closeAll() {
    this.notifications.forEach((_, id) => this.close(id));
  }

  updateConfig(config) {
    this.config = { ...this.config, ...config };
  }

  getNotifications() {
    return Array.from(this.notifications.values());
  }
}

export { NotificationManager };