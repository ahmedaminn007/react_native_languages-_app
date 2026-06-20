/**
 * Centralized image imports.
 *
 * Always import images through this module – never require() them
 * directly inside screens or components.
 *
 * Usage:
 *   import { images } from '@/constants/images';
 *   <Image source={images.mascotWelcome} />
 */

const mascotWelcome = require('@/assets/images/mascot-welcome.png');
const mascotAuth    = require('@/assets/images/mascot-auth.png');
const mascotLogo    = require('@/assets/images/moscot-logo.png');
const logoGlow      = require('@/assets/images/logo-glow.png');
const earth         = require('@/assets/images/earth.png');
const palace        = require('@/assets/images/palace.png');
const treasure      = require('@/assets/images/treasure.png');
const streakFire    = require('@/assets/images/streak-fire.png');
const icon          = require('@/assets/images/icon.png');

export const images = {
  mascotWelcome,
  mascotAuth,
  mascotLogo,
  logoGlow,
  earth,
  palace,
  treasure,
  streakFire,
  icon,
} as const;
