import { createElement } from 'react';
import { SidebarConfiguration } from '../types/sidebarTypes';
import { Swords, AudioWaveform, Bot, Monitor, Blocks } from 'lucide-react';

import { LandingPage } from '../pages/landing/Landing';
import { ColorPalettePage } from '../pages/color-palette/ColorPalette';
import { GalleryPage } from '../pages/gallery/Gallery';
import { LibraryPage } from '../pages/library/Library';
import { GettingStartedPage } from '../pages/getting-started/GettingStarted';
import { NotFound } from '../pages/not-found/NotFound';
import { WelcomeScreen } from '../pages/signage/WelcomeScreen';
import { RestaurantMenu } from '../pages/signage/RestaurantMenu';
import { OfficeDirectory } from '../pages/signage/OfficeDirectory';
import { KPIDashboard } from '../pages/signage/KPIDashboard';
import { AnnouncementsBoard } from '../pages/signage/AnnouncementsBoard';
import { EventSchedule } from '../pages/signage/EventSchedule';
import { ComponentIndexPage } from '../pages/components/ComponentIndex';
import { MetricCardDocPage } from '../pages/components/primitives/MetricCardDoc';
import { ScreenFrameDocPage } from '../pages/components/primitives/ScreenFrameDoc';
import { EventCardDocPage } from '../pages/components/primitives/EventCardDoc';
import { AnnouncementCardDocPage } from '../pages/components/primitives/AnnouncementCardDoc';
import { SplitScreenDocPage } from '../pages/components/layouts/SplitScreenDoc';
import { SignageContainerDocPage } from '../pages/components/layouts/SignageContainerDoc';
import { SignageHeaderDocPage } from '../pages/components/layouts/SignageHeaderDoc';
import { FullscreenHeroDocPage } from '../pages/components/blocks/FullscreenHeroDoc';
import { InfoCardGridDocPage } from '../pages/components/blocks/InfoCardGridDoc';
import { Layout } from '@tsa/shell';

/**
 * Object containing all the paths used in the application.
 */
const paths = {
  landing: '/',
  gallery: '/gallery',
  gettingStarted: '/getting-started',
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
    index: '/components',
    primitives: {
      metricCard: '/components/primitives/metric-card',
      screenFrame: '/components/primitives/screen-frame',
      eventCard: '/components/primitives/event-card',
      announcementCard: '/components/primitives/announcement-card',
    },
    layouts: {
      splitScreen: '/components/layouts/split-screen',
      signageContainer: '/components/layouts/signage-container',
      signageHeader: '/components/layouts/signage-header',
    },
    blocks: {
      fullscreenHero: '/components/blocks/fullscreen-hero',
      infoCardGrid: '/components/blocks/info-card-grid',
    },
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
      title: 'Documentation',
      url: paths.gettingStarted,
      icon: Bot,
      isActive: true,
      items: [
        { title: 'Getting Started', url: paths.gettingStarted },
        { title: 'Component Library', url: paths.components.library },
        { title: 'Color Palette', url: paths.components.colorPalette },
      ],
    },
    {
      title: 'Components',
      url: paths.components.index,
      icon: Blocks,
      items: [
        { title: 'Overview', url: paths.components.index },
        { title: 'MetricCard', url: paths.components.primitives.metricCard },
        { title: 'ScreenFrame', url: paths.components.primitives.screenFrame },
        { title: 'EventCard', url: paths.components.primitives.eventCard },
        { title: 'AnnouncementCard', url: paths.components.primitives.announcementCard },
        { title: 'SplitScreen', url: paths.components.layouts.splitScreen },
        { title: 'SignageContainer', url: paths.components.layouts.signageContainer },
        { title: 'SignageHeader', url: paths.components.layouts.signageHeader },
        { title: 'FullscreenHero', url: paths.components.blocks.fullscreenHero },
        { title: 'InfoCardGrid', url: paths.components.blocks.infoCardGrid },
      ],
    },
    {
      title: 'Signage Examples',
      url: paths.gallery,
      icon: Monitor,
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
  createRoute(paths.gettingStarted, GettingStartedPage),
  createRoute(paths.signage.welcome, WelcomeScreen, false),
  createRoute(paths.signage.menu, RestaurantMenu, false),
  createRoute(paths.signage.wayfinding, OfficeDirectory, false),
  createRoute(paths.signage.dashboard, KPIDashboard, false),
  createRoute(paths.signage.announcements, AnnouncementsBoard, false),
  createRoute(paths.signage.eventSchedule, EventSchedule, false),
  createRoute(paths.components.colorPalette, ColorPalettePage),
  createRoute(paths.components.library, LibraryPage),
  // Component documentation routes
  createRoute(paths.components.index, ComponentIndexPage),
  createRoute(paths.components.primitives.metricCard, MetricCardDocPage),
  createRoute(paths.components.primitives.screenFrame, ScreenFrameDocPage),
  createRoute(paths.components.primitives.eventCard, EventCardDocPage),
  createRoute(paths.components.primitives.announcementCard, AnnouncementCardDocPage),
  createRoute(paths.components.layouts.splitScreen, SplitScreenDocPage),
  createRoute(paths.components.layouts.signageContainer, SignageContainerDocPage),
  createRoute(paths.components.layouts.signageHeader, SignageHeaderDocPage),
  createRoute(paths.components.blocks.fullscreenHero, FullscreenHeroDocPage),
  createRoute(paths.components.blocks.infoCardGrid, InfoCardGridDocPage),
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
