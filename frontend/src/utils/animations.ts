import { CSSProperties } from "react";

/**
 * Aurora Animation Utilities
 * A collection of animation configurations for consistent micro-interactions
 */

// Timing functions for animations
export const timingFunctions = {
  default: "cubic-bezier(0.4, 0, 0.2, 1)", // standard easing
  gentle: "cubic-bezier(0.4, 0, 0.6, 1)", // gentle ease in-out
  bouncy: "cubic-bezier(0.175, 0.885, 0.32, 1.275)", // with slight bounce
  sharp: "cubic-bezier(0.4, 0, 0, 1)", // sharp ease out
  delayed: "cubic-bezier(0, 0, 0.2, 1)", // delayed ease
};

// Duration presets in milliseconds
export const durations = {
  fast: 150,
  default: 300,
  slow: 500,
  lazy: 800,
};

// Predefined animations as React style objects
export const animations = {
  fadeIn: (duration = durations.default): CSSProperties => ({
    opacity: 0,
    animation: `fadeIn ${duration}ms ${timingFunctions.default} forwards`,
  }),
  
  slideUp: (duration = durations.default, delay = 0): CSSProperties => ({
    opacity: 0,
    transform: "translateY(20px)",
    animation: `slideUp ${duration}ms ${timingFunctions.default} ${delay}ms forwards`,
  }),
  
  slideDown: (duration = durations.default, delay = 0): CSSProperties => ({
    opacity: 0,
    transform: "translateY(-20px)",
    animation: `slideDown ${duration}ms ${timingFunctions.default} ${delay}ms forwards`,
  }),
  
  slideLeft: (duration = durations.default, delay = 0): CSSProperties => ({
    opacity: 0,
    transform: "translateX(20px)",
    animation: `slideLeft ${duration}ms ${timingFunctions.default} ${delay}ms forwards`,
  }),
  
  slideRight: (duration = durations.default, delay = 0): CSSProperties => ({
    opacity: 0,
    transform: "translateX(-20px)",
    animation: `slideRight ${duration}ms ${timingFunctions.default} ${delay}ms forwards`,
  }),
  
  scaleIn: (duration = durations.default, delay = 0): CSSProperties => ({
    opacity: 0,
    transform: "scale(0.95)",
    animation: `scaleIn ${duration}ms ${timingFunctions.bouncy} ${delay}ms forwards`,
  }),
  
  float: (): CSSProperties => ({
    animation: `float 5s ${timingFunctions.gentle} infinite`,
  }),
  
  pulse: (duration = 3000): CSSProperties => ({
    animation: `pulse ${duration}ms ${timingFunctions.gentle} infinite`,
  }),
  
  glow: (duration = 3000): CSSProperties => ({
    animation: `glow ${duration}ms ${timingFunctions.gentle} infinite`,
  }),
};

// Staggered animation helper
export const staggered = (index: number, baseDelay = 100): number => {
  return index * baseDelay;
};

// Scroll animation helpers
export const scrollAnimationProps = {
  fadeIn: {
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: durations.default },
  },
  slideUp: {
    from: { opacity: 0, transform: "translateY(30px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: durations.default },
  },
  slideDown: {
    from: { opacity: 0, transform: "translateY(-30px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: durations.default },
  },
};
