// Vanilla JavaScript wrapper for Notifio
import Notifio from '../Notifio';

// Create a global instance
const notifio = new Notifio();

// Make it available globally
if (typeof window !== 'undefined') {
  window.notifio = notifio;
}

// Export for module systems
export default notifio;
export { Notifio } from '../Notifio';
export * from '../types';