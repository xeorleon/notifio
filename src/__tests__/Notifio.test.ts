import Notifio from '../Notifio';
import { NotificationType } from '../types';

// Mock DOM environment
const mockContainer = {
  appendChild: jest.fn(),
  removeChild: jest.fn(),
  className: '',
  style: {},
};

const mockElement = {
  id: 'test-notification',
  className: '',
  style: {},
  innerHTML: '',
  addEventListener: jest.fn(),
  remove: jest.fn(),
};

Object.defineProperty(document, 'createElement', {
  value: jest.fn((tag) => {
    if (tag === 'div') {
      return mockElement;
    }
    return mockContainer;
  }),
});

Object.defineProperty(document, 'getElementById', {
  value: jest.fn(() => mockElement),
});

Object.defineProperty(document, 'head', {
  value: {
    appendChild: jest.fn(),
  },
});

Object.defineProperty(document, 'body', {
  value: {
    appendChild: jest.fn(),
  },
});

describe('Notifio', () => {
  let notifio: Notifio;

  beforeEach(() => {
    notifio = new Notifio();
    jest.clearAllMocks();
  });

  describe('Basic notifications', () => {
    test('should show success notification', () => {
      const id = notifio.success('Test success message');
      expect(id).toBeDefined();
      expect(document.createElement).toHaveBeenCalledWith('div');
    });

    test('should show error notification', () => {
      const id = notifio.error('Test error message');
      expect(id).toBeDefined();
    });

    test('should show warning notification', () => {
      const id = notifio.warning('Test warning message');
      expect(id).toBeDefined();
    });

    test('should show info notification', () => {
      const id = notifio.info('Test info message');
      expect(id).toBeDefined();
    });
  });

  describe('Advanced notifications', () => {
    test('should show notification with title', () => {
      const id = notifio.success('Test message', {
        title: 'Test Title',
      });
      expect(id).toBeDefined();
    });

    test('should show notification with custom duration', () => {
      const id = notifio.info('Test message', {
        duration: 1000,
      });
      expect(id).toBeDefined();
    });

    test('should show notification with custom position', () => {
      const id = notifio.info('Test message', {
        position: 'bottom-left',
      });
      expect(id).toBeDefined();
    });

    test('should show notification with custom icon', () => {
      const id = notifio.info('Test message', {
        customIcon: '🎉',
      });
      expect(id).toBeDefined();
    });

    test('should show notification with click handler', () => {
      const onClick = jest.fn();
      const id = notifio.info('Test message', {
        onClick,
      });
      expect(id).toBeDefined();
    });
  });

  describe('Notification management', () => {
    test('should close notification by id', () => {
      const id = notifio.success('Test message');
      notifio.close(id);
      expect(document.getElementById).toHaveBeenCalledWith(id);
    });

    test('should close all notifications', () => {
      notifio.success('Test message 1');
      notifio.success('Test message 2');
      notifio.closeAll();
      // This would need more sophisticated mocking to test properly
    });

    test('should get all notifications', () => {
      notifio.success('Test message');
      const notifications = notifio.getNotifications();
      expect(Array.isArray(notifications)).toBe(true);
    });
  });

  describe('Configuration', () => {
    test('should update configuration', () => {
      notifio.updateConfig({
        position: 'bottom-center',
        duration: 3000,
      });
      // Configuration update would need more sophisticated testing
    });
  });
});