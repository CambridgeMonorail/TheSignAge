import type { LucideIcon } from 'lucide-react';
import {
  Home,
  UtensilsCrossed,
  MapPin,
  BarChart3,
  Bell,
  Calendar,
} from 'lucide-react';

export type SignageCategory =
  | 'welcome'
  | 'wayfinding'
  | 'dashboard'
  | 'menu'
  | 'announcements'
  | 'schedule';

export type Resolution = '1080p' | '4k' | 'portrait-1080p';

export type AspectRatio = '16:9' | '9:16' | '16:10';

export interface SignageExample {
  id: string;
  title: string;
  description: string;
  aspectRatio: AspectRatio;
  resolution: Resolution;
  path: string;
  thumbnailIcon: LucideIcon;
  category: SignageCategory;
}

export const signageExamples: SignageExample[] = [
  {
    id: 'welcome-screen',
    title: 'Welcome Screen',
    description:
      'Full-screen hero with large, distance-readable typography for greetings and announcements.',
    aspectRatio: '16:9',
    resolution: '1080p',
    path: '/signage/welcome',
    thumbnailIcon: Home,
    category: 'welcome',
  },
  {
    id: 'restaurant-menu',
    title: 'Restaurant Menu',
    description:
      'Split-screen layout displaying menu categories and featured items with prices.',
    aspectRatio: '16:9',
    resolution: '1080p',
    path: '/signage/menu',
    thumbnailIcon: UtensilsCrossed,
    category: 'menu',
  },
  {
    id: 'office-directory',
    title: 'Office Directory',
    description:
      'Wayfinding screen with floor map, directory list, and "You are here" indicator.',
    aspectRatio: '16:9',
    resolution: '1080p',
    path: '/signage/wayfinding',
    thumbnailIcon: MapPin,
    category: 'wayfinding',
  },
  {
    id: 'kpi-dashboard',
    title: 'KPI Dashboard',
    description:
      'Data visualization dashboard with metrics, charts, and key performance indicators.',
    aspectRatio: '16:9',
    resolution: '1080p',
    path: '/signage/dashboard',
    thumbnailIcon: BarChart3,
    category: 'dashboard',
  },
  {
    id: 'announcements-board',
    title: 'Announcements Board',
    description:
      'Company announcements, upcoming events, and employee highlights in a scannable layout.',
    aspectRatio: '16:9',
    resolution: '1080p',
    path: '/signage/announcements',
    thumbnailIcon: Bell,
    category: 'announcements',
  },
  {
    id: 'event-schedule',
    title: 'Event Schedule',
    description:
      'Conference schedule with room assignments, time slots, and session details.',
    aspectRatio: '16:9',
    resolution: '1080p',
    path: '/signage/event-schedule',
    thumbnailIcon: Calendar,
    category: 'schedule',
  },
];
