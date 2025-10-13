import type { App } from 'vue';
import type { NotifioConfig } from '../types';
import Notifio from '../Notifio';

export interface NotifioPluginOptions extends NotifioConfig {
  // Additional Vue-specific options can be added here
}

const NotifioPlugin = {
  install(app: App, options?: NotifioPluginOptions) {
    const notifio = new Notifio(options);
    
    // Make notifio available globally
    app.config.globalProperties.$notifio = notifio;
    
    // Provide for composition API
    app.provide('notifio', notifio);
    
    // Add to app instance
    app.notifio = notifio;
  }
};

export default NotifioPlugin;