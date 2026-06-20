/**
 * Lingua Design Tokens
 *
 * Single source of truth for all design values.
 * Mirrors the CSS custom properties defined in global.css.
 * Use these in JS/TS contexts (e.g. StyleSheet, animations).
 */

// ─── Colors ───────────────────────────────────────────────────────────────────

export const colors = {
  // Primary brand palette
  primary: {
    purple: '#6C4EF5',
    deepPurple: '#5B3BF6',
    blue: '#4D8BFF',
    green: '#21C16B',
  },

  // Semantic / state colors
  semantic: {
    success: '#21C16B',
    warning: '#FFC800',
    streak: '#FF8A00',
    error: '#FF4D4F',
    info: '#4D8BFF',
  },

  // Neutral palette
  neutral: {
    textPrimary: '#0D132B',
    textSecondary: '#6B7280',
    border: '#E5E7EB',
    surface: '#F6F7FB',
    background: '#FFFFFF',
  },
} as const;

// ─── Typography ────────────────────────────────────────────────────────────────

export const typography = {
  fontFamily: 'Poppins',

  // Font sizes (px → React Native points, same numbers)
  fontSize: {
    h1: 32,
    h2: 24,
    h3: 20,
    h4: 16,
    bodyLarge: 16,
    bodyMedium: 14,
    bodySmall: 13,
    caption: 11,
  },

  // Font weights
  fontWeight: {
    bold: '700' as const,
    semiBold: '600' as const,
    medium: '500' as const,
    regular: '400' as const,
  },

  // Line heights (multiplier × fontSize)
  lineHeight: {
    h1: 1.2,
    h2: 1.3,
    h3: 1.3,
    h4: 1.4,
    bodyLarge: 1.6,
    bodyMedium: 1.6,
    bodySmall: 1.6,
    caption: 1.4,
  },
} as const;

// ─── Spacing ───────────────────────────────────────────────────────────────────

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  base: 16,
  lg: 20,
  xl: 24,
  '2xl': 32,
  '3xl': 40,
  '4xl': 48,
  '5xl': 64,
} as const;

// ─── Border Radius ─────────────────────────────────────────────────────────────

export const radius = {
  sm: 6,
  md: 10,
  lg: 14,
  xl: 20,
  '2xl': 28,
  full: 9999,
} as const;

// ─── Shadows ───────────────────────────────────────────────────────────────────

export const shadows = {
  sm: {
    shadowColor: '#0D132B',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  md: {
    shadowColor: '#0D132B',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
  },
  lg: {
    shadowColor: '#0D132B',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.10,
    shadowRadius: 24,
    elevation: 8,
  },
} as const;
