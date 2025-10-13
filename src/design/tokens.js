// Design tokens based on the alert-notification-page.png design system

export const designTokens = {
  colors: {
    // Primary colors
    info: {
      primary: '#8644C6',
      solid: '#8644C6',
      light: '#F6EEFE',
      text: '#653394'
    },
    success: {
      primary: '#049A53',
      solid: '#049A53',
      light: '#E6F9F0',
      text: '#03743E'
    },
    warning: {
      primary: '#CC7E23',
      solid: '#CC7E23',
      light: '#FFF5EA',
      text: '#995F1A'
    },
    error: {
      primary: '#D64851',
      solid: '#D64851',
      light: '#FFEEF0',
      text: '#D64851'
    },
    neutral: {
      primary: '#262E4D',
      solid: '#262E4D',
      light: '#EEF2F6',
      text: '#485565'
    },
    // Text colors
    text: {
      primary: '#121926',
      secondary: '#485565',
      onBrand: '#FFFFFF'
    },
    // Border colors
    border: {
      secondary: '#E3EBEF',
      outline: '#E3EBEF'
    },
    // Link button colors
    link: {
      primary: '#8644C6',
      hover: '#6B46C1',
      underline: '#8644C6',
      text: '#8644C6'
    }
  },
  
  typography: {
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    sizes: {
      small: {
        header: '14px',
        content: '12px'
      },
      large: {
        header: '14px',
        content: '12px'
      }
    },
    weights: {
      regular: 400,
      semiBold: 600
    },
    lineHeights: {
      small: '20px',
      content: '16px'
    }
  },
  
  spacing: {
    xs: '4px',
    sm: '6px',
    md: '8px',
    lg: '10px',
    xl: '12px',
    xxl: '16px'
  },
  
  // Component dimensions
  dimensions: {
    notification: {
      small: {
        width: '347px',
        height: '36px',
        padding: '8px'
      },
      large: {
        width: '347px',
        height: '106px',
        padding: '10px'
      }
    },
    linkButton: {
      width: '76px',
      height: '20px',
      iconSize: '20px',
      spacing: '6px'
    }
  },
  
  borderRadius: {
    sm: '6px',
    md: '8px'
  },
  
  borderWidth: {
    default: '1px'
  },
  
  shadows: {
    sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px rgba(0, 0, 0, 0.1)'
  }
};

export const alertStyles = {
  solid: {
    info: {
      backgroundColor: designTokens.colors.info.solid,
      color: designTokens.colors.text.onBrand,
      borderColor: designTokens.colors.info.solid
    },
    success: {
      backgroundColor: designTokens.colors.success.solid,
      color: designTokens.colors.text.onBrand,
      borderColor: designTokens.colors.success.solid
    },
    warning: {
      backgroundColor: designTokens.colors.warning.solid,
      color: designTokens.colors.text.onBrand,
      borderColor: designTokens.colors.warning.solid
    },
    error: {
      backgroundColor: designTokens.colors.error.solid,
      color: designTokens.colors.text.onBrand,
      borderColor: designTokens.colors.error.solid
    },
    neutral: {
      backgroundColor: designTokens.colors.neutral.solid,
      color: designTokens.colors.text.onBrand,
      borderColor: designTokens.colors.neutral.solid
    }
  },
  
  light: {
    info: {
      backgroundColor: designTokens.colors.info.light,
      color: designTokens.colors.info.primary,
      borderColor: designTokens.colors.info.light
    },
    success: {
      backgroundColor: designTokens.colors.success.light,
      color: designTokens.colors.success.primary,
      borderColor: designTokens.colors.success.light
    },
    warning: {
      backgroundColor: designTokens.colors.warning.light,
      color: designTokens.colors.warning.primary,
      borderColor: designTokens.colors.warning.light
    },
    error: {
      backgroundColor: designTokens.colors.error.light,
      color: designTokens.colors.error.primary,
      borderColor: designTokens.colors.error.light
    },
    neutral: {
      backgroundColor: designTokens.colors.neutral.light,
      color: designTokens.colors.neutral.text,
      borderColor: designTokens.colors.neutral.light
    }
  },
  
  outline: {
    info: {
      backgroundColor: '#FFFFFF',
      color: designTokens.colors.info.primary,
      borderColor: designTokens.colors.border.outline
    },
    success: {
      backgroundColor: '#FFFFFF',
      color: designTokens.colors.success.primary,
      borderColor: designTokens.colors.border.outline
    },
    warning: {
      backgroundColor: '#FFFFFF',
      color: designTokens.colors.warning.primary,
      borderColor: designTokens.colors.border.outline
    },
    error: {
      backgroundColor: '#FFFFFF',
      color: designTokens.colors.error.primary,
      borderColor: designTokens.colors.border.outline
    },
    neutral: {
      backgroundColor: '#FFFFFF',
      color: designTokens.colors.neutral.text,
      borderColor: designTokens.colors.border.outline
    }
  }
};