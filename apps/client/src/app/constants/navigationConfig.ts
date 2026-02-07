import { createElement } from 'react';
import { SidebarConfiguration } from '../types/sidebarTypes';
import {
  Swords,
  AudioWaveform,
  Bot,
  Monitor,
} from 'lucide-react';

import { LandingPage } from '../pages/landing/Landing';
import { ColorPalettePage } from '../pages/color-palette/ColorPalette';
import { GalleryPage } from '../pages/gallery/Gallery';
import { LibraryPage } from '../pages/library/Library';
import { NotFound } from '../pages/not-found/NotFound';
import { WelcomeScreen } from '../pages/signage/WelcomeScreen';
import { RestaurantMenu } from '../pages/signage/RestaurantMenu';
import { OfficeDirectory } from '../pages/signage/OfficeDirectory';
import { KPIDashboard } from '../pages/signage/KPIDashboard';
import { AnnouncementsBoard } from '../pages/signage/AnnouncementsBoard';
import { EventSchedule } from '../pages/signage/EventSchedule';
import { Layout } from '@tsa/shell';

/**
 * Object containing all the paths used in the application.
 */
const paths = {
  landing: '/',
  gallery: '/gallery',
  home: '/',
  signage: {
    welcome: '/signage/welcome',
    menu: '/signage/menu',
    wayfinding: '/signage/wayfinding',
    dashboard: '/signage/dashboard',
    announcements: '/signage/announcements',
    eventSchedule: '/signage/event-schedule',
  },
  components: {
    colorPalette: '/color-palette',
    library: '/library',
  },
  notFound: '*',
};

/**
 * Configuration for the sidebar, including user information, teams, and navigation items.
 */
const sidebarData: SidebarConfiguration = {
  user: {
    name: 'TSA',
    email: 'm@example.com',
    avatar: 'TheSignAge/assets/images/avatars/avatar.jpg',
  },
  teams: [
    {
      name: 'TSA',
      logo: Swords,
      plan: 'Enterprise',
    },
    {
      name: 'TSA Corp.',
      logo: AudioWaveform,
      plan: 'Startup',
    },
  ],
  navMain: [
    {
      title: 'Signage Examples',
      url: paths.gallery,
      icon: Monitor,
      isActive: true,
      items: [
        { title: 'Gallery', url: paths.gallery },
        { title: 'Welcome Screen', url: paths.signage.welcome },
        { title: 'Restaurant Menu', url: paths.signage.menu },
        { title: 'Office Directory', url: paths.signage.wayfinding },
        { title: 'KPI Dashboard', url: paths.signage.dashboard },
        { title: 'Announcements', url: paths.signage.announcements },
        { title: 'Event Schedule', url: paths.signage.eventSchedule },
      ],
    },
    {
      title: 'Components',
      url: paths.components.library,
      icon: Bot,
      items: [
        { title: 'Shadcn/ui Library', url: paths.components.library },
        { title: 'Color Palette', url: paths.components.colorPalette },
      ],
    },
  ],
};

/**
 * Helper function to create a route object.
 * @param path - The URL path for the route.
 * @param component - The React component to render for the route.
 * @param useLayout - Whether to wrap the component with the Layout component.
 * @returns The route object.
 */
const createRoute = (
  path: string,
  component: React.ComponentType,
  useLayout = true,
) => {
  return useLayout
    ? {
        path,
        element: createElement(Layout, {
          sidebarData,
          children: createElement(component),
        }),
      }
    : { path, element: createElement(component) };
};

/**
 * Array of route objects for the application.
 */
const routes = [
  createRoute(paths.landing, LandingPage, false),
  createRoute(paths.gallery, GalleryPage),
  createRoute(paths.signage.welcome, WelcomeScreen, false),
  createRoute(paths.signage.menu, RestaurantMenu, false),
  createRoute(paths.signage.wayfinding, OfficeDirectory, false),
  createRoute(paths.signage.dashboard, KPIDashboard, false),
  createRoute(paths.signage.announcements, AnnouncementsBoard, false),
  createRoute(paths.signage.eventSchedule, EventSchedule, false),
  createRoute(paths.components.colorPalette, ColorPalettePage),
  createRoute(paths.components.library, LibraryPage),
  createRoute(paths.notFound, NotFound, false),
];

/**
 * Configuration object for navigation, including paths, sidebar data, and routes.
 */
export const navigationConfig = {
  paths,
  sidebarData,
  routes,
};
