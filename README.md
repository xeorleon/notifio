# Notifio

A universal notification system that works with Vue, React, and vanilla JavaScript. Built with TypeScript for type safety and modern web development.

## Features

- 🚀 **Universal**: Works with Vue 3, React, and vanilla JavaScript
- 📱 **Responsive**: Mobile-friendly design
- 🎨 **Customizable**: Extensive styling and positioning options
- ⚡ **Lightweight**: Small bundle size with no external dependencies
- 🔧 **TypeScript**: Full TypeScript support
- 🎯 **Flexible**: Multiple notification types and positions
- 🎪 **Interactive**: Click handlers and custom icons

## Installation

```bash
npm install notifio
```

## Quick Start

### Vanilla JavaScript

```html
<script type="module">
  import notifio from 'notifio';

  // Show notifications
  notifio.success('Operation completed!');
  notifio.error('Something went wrong!');
  notifio.warning('Please check your input');
  notifio.info('New message received');
</script>
```

### Vue 3

```javascript
// main.js
import { createApp } from 'vue';
import NotifioPlugin from 'notifio/vue';
import App from './App.vue';

const app = createApp(App);
app.use(NotifioPlugin);
app.mount('#app');
```

```vue
<!-- Component.vue -->
<template>
  <div>
    <button @click="showSuccess">Show Success</button>
  </div>
</template>

<script setup>
import { useNotifio } from 'notifio/vue';

const notifio = useNotifio();

const showSuccess = () => {
  notifio.success('Operation completed!');
};
</script>
```

### React

```jsx
// App.jsx
import { NotifioProvider } from 'notifio/react';
import MyComponent from './MyComponent';

function App() {
  return (
    <NotifioProvider>
      <MyComponent />
    </NotifioProvider>
  );
}
```

```jsx
// MyComponent.jsx
import { useNotifio } from 'notifio/react';

function MyComponent() {
  const notifio = useNotifio();

  const handleSuccess = () => {
    notifio.success('Operation completed!');
  };

  return <button onClick={handleSuccess}>Show Success</button>;
}
```

## API Reference

### Notification Types

- `success(message, options?)` - Green success notification
- `error(message, options?)` - Red error notification
- `warning(message, options?)` - Orange warning notification
- `info(message, options?)` - Blue info notification
- `neutral(message, options?)` - Gray neutral notification

### Notification Styles

- `solid(type, message, options?)` - Solid background style
- `light(type, message, options?)` - Light background style
- `outline(type, message, options?)` - Outline border style

### Options

```typescript
interface NotificationOptions {
  id?: string;                    // Custom ID
  type?: 'success' | 'error' | 'warning' | 'info';
  title?: string;                 // Notification title
  message: string;                // Notification message
  duration?: number;              // Auto-close duration (0 = persistent)
  position?: NotificationPosition; // Position on screen
  closable?: boolean;             // Show close button
  showIcon?: boolean;             // Show type icon
  customIcon?: string;            // Custom icon (emoji/HTML)
  title?: string;                 // Notification title
  description?: string;           // Notification description
  linkButton?: {                  // Link button
    text: string;
    onClick?: () => void;
  };
  onClick?: () => void;           // Click handler
  onClose?: () => void;           // Close handler
  className?: string;             // Custom CSS class
  style?: React.CSSProperties;    // Custom styles
}
```

### Positions

- `top-left`
- `top-center`
- `top-right`
- `bottom-left`
- `bottom-center`
- `bottom-right`

### Configuration

```typescript
interface NotifioConfig {
  position?: NotificationPosition;
  duration?: number;              // Default duration
  maxNotifications?: number;      // Max notifications shown
  closable?: boolean;             // Default closable state
  showIcon?: boolean;             // Default icon visibility
  className?: string;             // Container class
  style?: React.CSSProperties;    // Container styles
}
```

## Examples

### Basic Usage

```javascript
// Simple notifications
notifio.success('User created successfully!');
notifio.error('Failed to save data');
notifio.warning('Please check your input');
notifio.info('New message received');
```

### Advanced Usage

```javascript
// With title and custom duration
notifio.success('Profile updated!', {
  title: 'Success',
  duration: 3000
});

// With custom icon
notifio.info('Custom notification', {
  customIcon: '🎉',
  title: 'Celebration'
});

// Clickable notification
notifio.info('Click to view details', {
  onClick: () => {
    window.open('/details');
  }
});

// Persistent notification
notifio.warning('Important message', {
  duration: 0,
  closable: true
});

// With title and description
notifio.info('New update available', {
  title: 'Update Available',
  description: 'A new version of the app is ready to install.',
  linkButton: {
    text: 'Install Now',
    onClick: () => {
      console.log('Installing update...');
    }
  }
});
```

### Position Control

```javascript
// Different positions
notifio.info('Top left', { position: 'top-left' });
notifio.info('Top center', { position: 'top-center' });
notifio.info('Top right', { position: 'top-right' });
notifio.info('Bottom left', { position: 'bottom-left' });
notifio.info('Bottom center', { position: 'bottom-center' });
notifio.info('Bottom right', { position: 'bottom-right' });
```

### Configuration

```javascript
// Global configuration
notifio.updateConfig({
  position: 'top-right',
  duration: 5000,
  maxNotifications: 5,
  closable: true,
  showIcon: true
});
```

## Styling

Notifio comes with built-in styles that work out of the box. You can customize the appearance by:

1. **CSS Variables** (coming soon)
2. **Custom Classes**: Add your own CSS classes
3. **Inline Styles**: Use the `style` option
4. **CSS Overrides**: Override the default styles

## Browser Support

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## Development

```bash
# Install dependencies
npm install

# Build the library
npm run build

# Run in development mode
npm run dev

# Run tests
npm test

# Type checking
npm run type-check
```

## License

MIT License - see LICENSE file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.