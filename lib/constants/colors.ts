/**
 * Hex values mirroring the CSS custom properties in app/globals.css.
 * Three.js materials can't read CSS variables, so this is the single
 * source of truth for anything rendered on a <canvas>.
 */
export const COLORS = {
  primaryBlue: "#1678B8",
  deepBlue: "#0B4267",
  verifyGreen: "#4FAF46",
  dark: "#111111",
  grey: "#6B7075",
  offWhite: "#F6F8F7",
  white: "#FFFFFF",
} as const;
