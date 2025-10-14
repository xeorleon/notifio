# Notifio

[![GitHub](https://img.shields.io/badge/GitHub-Repository-blue?logo=github)](https://github.com/xeorleon/notifio)
[![NPM](https://img.shields.io/npm/v/notifio?color=green&logo=npm)](https://www.npmjs.com/package/notifio)

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

### CDN (Unpkg/JSDelivr)

```html
<!DOCTYPE html>
<html>
<head>
    <title>Notifio Example</title>
</head>
<body>
    <button onclick="showNotification()">Show Notification</button>
    
    <!-- Unpkg CDN -->
    <script src="https://unpkg.com/notifio@1.0.19/dist/notifio.umd.js"></script>
    
    <!-- Or JSDelivr CDN -->
    <!-- <script src="https://cdn.jsdelivr.net/npm/notifio@1.0.19/dist/notifio.umd.js"></script> -->
    
    <script>
        function showNotification() {
            // Basic notifications (title only)
            notifio.success('Operation completed!');
            notifio.error('Something went wrong!');
            notifio.warning('Please check your input');
            notifio.info('New message received');
            
            // With description
            notifio.success('Operation completed!', {
                description: 'Your changes have been saved successfully.'
            });
            
            // Style-based notifications
            notifio.solid('success', 'Solid notification!', {
                description: 'This is a solid style notification.'
            });
            notifio.light('warning', 'Light notification!', {
                description: 'This is a light style notification.'
            });
            notifio.outline('error', 'Outline notification!', {
                description: 'This is an outline style notification.'
            });
            
            // With link button
            notifio.solid('neutral', 'Insert your alert title here!', {
                description: 'Duplicate outline group arrange ipsum comment figjam export content.',
                linkButton: {
                    text: 'Link Button',
                    onClick: () => alert('Solid Neutral Link clicked!')
                }
            });
        }
    </script>
</body>
</html>
```

### Vanilla JavaScript (ES Modules)

```html
<script type="module">
  import { notifio } from 'https://unpkg.com/notifio@1.0.19/dist/index.esm.js';

  // Show notifications (title only)
  notifio.success('Operation completed!');
  notifio.error('Something went wrong!');
  notifio.warning('Please check your input');
  notifio.info('New message received');
  
  // With description
  notifio.success('Operation completed!', {
    description: 'Your changes have been saved successfully.'
  });
  
  // With link button
  notifio.solid('neutral', 'Insert your alert title here!', {
    description: 'Duplicate outline group arrange ipsum comment figjam export content.',
    linkButton: {
      text: 'Link Button',
      onClick: () => alert('Solid Neutral Link clicked!')
    }
  });
</script>
```

### Vue 3

```javascript
// main.js
import { createApp } from 'vue';
import { NotifioPlugin } from 'notifio/vue';
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
    <button @click="showSolid">Show Solid</button>
    <button @click="showLight">Show Light</button>
    <button @click="showOutline">Show Outline</button>
  </div>
</template>

<script setup>
import { useNotifio } from 'notifio/vue';

const notifio = useNotifio();

const showSuccess = () => {
  notifio.success('Operation completed!', {
    description: 'Your changes have been saved successfully.'
  });
};

const showSolid = () => {
  notifio.solid('success', 'Solid notification!', {
    description: 'This is a solid style notification.'
  });
};

const showLight = () => {
  notifio.light('warning', 'Light notification!', {
    description: 'This is a light style notification.'
  });
};

const showOutline = () => {
  notifio.outline('error', 'Outline notification!', {
    description: 'This is an outline style notification.'
  });
};

const showWithLinkButton = () => {
  notifio.solid('neutral', 'Insert your alert title here!', {
    description: 'Duplicate outline group arrange ipsum comment figjam export content.',
    linkButton: {
      text: 'Link Button',
      onClick: () => alert('Solid Neutral Link clicked!')
    }
  });
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
    notifio.success('Operation completed!', {
      description: 'Your changes have been saved successfully.'
    });
  };

  const handleSolid = () => {
    notifio.solid('success', 'Solid notification!', {
      description: 'This is a solid style notification.'
    });
  };

  const handleLight = () => {
    notifio.light('warning', 'Light notification!', {
      description: 'This is a light style notification.'
    });
  };

  const handleOutline = () => {
    notifio.outline('error', 'Outline notification!', {
      description: 'This is an outline style notification.'
    });
  };

  const handleWithLinkButton = () => {
    notifio.solid('neutral', 'Insert your alert title here!', {
      description: 'Duplicate outline group arrange ipsum comment figjam export content.',
      linkButton: {
        text: 'Link Button',
        onClick: () => alert('Solid Neutral Link clicked!')
      }
    });
  };

  return (
    <div>
      <button onClick={handleSuccess}>Show Success</button>
      <button onClick={handleSolid}>Show Solid</button>
      <button onClick={handleLight}>Show Light</button>
      <button onClick={handleOutline}>Show Outline</button>
    </div>
  );
}
```

## API Reference

### Notification Types

- `success(title, options?)` - Green success notification
- `error(title, options?)` - Red error notification
- `warning(title, options?)` - Orange warning notification
- `info(title, options?)` - Blue info notification
- `neutral(title, options?)` - Gray neutral notification

### Notification Styles

- `solid(type, title, options?)` - Solid background style
- `light(type, title, options?)` - Light background style
- `outline(type, title, options?)` - Outline border style

### General Methods

- `show(options)` - Show notification with full options
- `close(id)` - Close specific notification
- `closeAll()` - Close all notifications

### Options

```typescript
interface NotificationOptions {
  id?: string;                    // Custom ID
  type?: 'success' | 'error' | 'warning' | 'info' | 'neutral';
  title?: string;                 // Notification title (optional for show method)
  description?: string;           // Notification description
  duration?: number;              // Auto-close duration (0 = persistent)
  position?: NotificationPosition; // Position on screen
  closable?: boolean;             // Show close button
  showIcon?: boolean;             // Show type icon
  customIcon?: string;            // Custom icon (emoji/HTML)
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
// Simple notifications (title only)
notifio.success('User created successfully!');
notifio.error('Failed to save data');
notifio.warning('Please check your input');
notifio.info('New message received');

// With description
notifio.success('User created successfully!', {
  description: 'The new user has been added to the system.'
});
```

### Advanced Usage

```javascript
// With custom duration
notifio.success('Profile updated!', {
  description: 'Your profile information has been updated.',
  duration: 3000
});

// With custom icon
notifio.info('Custom notification', {
  customIcon: '🎉',
  description: 'This is a celebration notification!'
});

// Clickable notification
notifio.info('Click to view details', {
  description: 'Click anywhere on this notification to open details.',
  onClick: () => {
    window.open('/details');
  }
});

// Persistent notification
notifio.warning('Important message', {
  description: 'This is an important message that requires your attention.',
  duration: 0,
  closable: true
});

// With link button
notifio.solid('neutral', 'Insert your alert title here!', {
  description: 'Duplicate outline group arrange ipsum comment figjam export content.',
  linkButton: {
    text: 'Link Button',
    onClick: () => alert('Solid Neutral Link clicked!')
  }
});
```

### Position Control

```javascript
// Different positions
notifio.info('Top left', { 
  description: 'This notification appears at the top left corner.',
  position: 'top-left' 
});
notifio.info('Top center', { 
  description: 'This notification appears at the top center.',
  position: 'top-center' 
});
notifio.info('Top right', { 
  description: 'This notification appears at the top right corner.',
  position: 'top-right' 
});
notifio.info('Bottom left', { 
  description: 'This notification appears at the bottom left corner.',
  position: 'bottom-left' 
});
notifio.info('Bottom center', { 
  description: 'This notification appears at the bottom center.',
  position: 'bottom-center' 
});
notifio.info('Bottom right', { 
  description: 'This notification appears at the bottom right corner.',
  position: 'bottom-right' 
});
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

## CDN Links

### Unpkg
```html
<!-- UMD Bundle -->
<script src="https://unpkg.com/notifio@1.0.19/dist/notifio.umd.js"></script>

<!-- ES Module -->
<script type="module">
  import { notifio } from 'https://unpkg.com/notifio@1.0.19/dist/index.esm.js';
</script>
```

### JSDelivr
```html
<!-- UMD Bundle -->
<script src="https://cdn.jsdelivr.net/npm/notifio@1.0.19/dist/notifio.umd.js"></script>

<!-- ES Module -->
<script type="module">
  import { notifio } from 'https://cdn.jsdelivr.net/npm/notifio@1.0.19/dist/index.esm.js';
</script>
```

## License

MIT License - see LICENSE file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.