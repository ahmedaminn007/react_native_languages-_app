/**
 * cn – className utility
 *
 * Combines clsx (conditional class joining) with tailwind-merge
 * (deduplication of conflicting Tailwind classes).
 *
 * Usage:
 *   cn('text-body-md', isActive && 'text-primary', className)
 */
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
