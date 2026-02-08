import type { Meta, StoryObj } from '@storybook/react';
import { FullscreenHero } from './FullscreenHero';
import { ScreenFrame } from '../primitives/ScreenFrame';

const meta: Meta<typeof FullscreenHero> = {
  title: '1-Signage/Blocks/FullscreenHero',
  component: FullscreenHero,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['light', 'dark'],
      description: 'Color variant',
    },
    backgroundImageUrl: {
      control: 'text',
      description: 'Background image URL',
    },
  },
  decorators: [
    (Story) => (
      <ScreenFrame resolution="1080p" scale={0.4}>
        <Story />
      </ScreenFrame>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof FullscreenHero>;

/**
 * Basic hero with title only
 */
export const BasicTitle: Story = {
  args: {
    title: 'Welcome',
    variant: 'light',
  },
};

/**
 * Hero with title and subtitle
 */
export const WithSubtitle: Story = {
  args: {
    title: 'Digital Signage',
    subtitle: 'The Future of Display Technology',
    variant: 'light',
  },
};

/**
 * Complete hero with all content
 */
export const Complete: Story = {
  args: {
    title: 'Welcome to Our Event',
    subtitle: 'Join us for an amazing experience',
    body: 'Discover innovative solutions, connect with industry leaders, and explore the latest trends in digital signage technology.',
    cta: {
      label: 'Get Started',
      hint: 'Registration opens at 9:00 AM',
    },
    variant: 'light',
  },
};

/**
 * Dark variant
 */
export const DarkVariant: Story = {
  args: {
    title: 'Innovation Summit 2026',
    subtitle: 'Shaping Tomorrow, Today',
    body: 'Join visionaries, innovators, and industry leaders for three days of groundbreaking presentations and networking.',
    variant: 'dark',
  },
};

/**
 * Long text demonstrating clamping
 */
export const LongTextClamping: Story = {
  args: {
    title:
      'This is an extremely long title that should be clamped to a maximum of two lines to prevent overflow and maintain layout integrity',
    subtitle:
      'This is also a very long subtitle that demonstrates the two-line clamping behavior to ensure the content remains visible and readable',
    body: 'This is a much longer body text that will demonstrate the four-line clamping feature. It contains multiple sentences to show how the text truncation works when content exceeds the maximum allowed lines. The clamping ensures that the layout remains predictable and visually balanced, even when dealing with verbose content. This is essential for signage applications where space is at a premium.',
    variant: 'light',
  },
};

/**
 * Hero with background image (light overlay)
 */
export const WithBackgroundImage: Story = {
  args: {
    title: 'Explore the Possibilities',
    subtitle: 'Innovation Meets Design',
    body: 'Transform your space with cutting-edge digital signage solutions.',
    variant: 'light',
    backgroundImageUrl:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop',
  },
};

/**
 * Hero with background image (dark overlay)
 */
export const DarkWithBackground: Story = {
  args: {
    title: 'The Future is Here',
    subtitle: 'Experience Next-Generation Display',
    body: 'Immersive, intelligent, and impactful digital experiences that captivate your audience.',
    cta: {
      label: 'Learn More',
      hint: 'Discover our solutions',
    },
    variant: 'dark',
    backgroundImageUrl:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop',
  },
};

/**
 * Hero with logo
 */
export const WithLogo: Story = {
  args: {
    title: 'Corporate Headquarters',
    subtitle: 'Welcome to our main office',
    logo: (
      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-blue-600 text-4xl font-bold text-white">
        CO
      </div>
    ),
    variant: 'light',
  },
};

/**
 * Announcement style
 */
export const Announcement: Story = {
  args: {
    title: 'System Maintenance',
    subtitle: 'Scheduled Downtime',
    body: 'Our systems will be undergoing maintenance from 2:00 AM to 4:00 AM. We apologize for any inconvenience.',
    cta: {
      label: 'More Information',
      hint: 'Visit our status page',
    },
    variant: 'dark',
  },
};

/**
 * Welcome screen
 */
export const WelcomeScreen: Story = {
  args: {
    title: 'Good Morning',
    subtitle: 'Welcome to Tech Innovation Center',
    body: "Today's schedule: Team standup at 10:00 AM, Lunch & Learn at 12:30 PM, Happy Hour at 5:00 PM",
    variant: 'light',
  },
};

/**
 * Event promotion
 */
export const EventPromotion: Story = {
  args: {
    title: 'Summer Music Festival',
    subtitle: 'June 15-17, 2026',
    body: '3 days of incredible performances, 50+ artists, food trucks, and family activities.',
    cta: {
      label: 'Tickets Available',
      hint: 'Scan QR code to purchase',
    },
    variant: 'dark',
    backgroundImageUrl:
      'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1920&h=1080&fit=crop',
  },
};

/**
 * Emergency alert
 */
export const EmergencyAlert: Story = {
  args: {
    title: 'Weather Advisory',
    subtitle: 'Severe Thunderstorm Warning',
    body: 'Seek shelter immediately. Stay indoors until the warning expires at 6:00 PM.',
    cta: {
      label: 'Emergency Information',
      hint: 'Call 911 for emergencies',
    },
    variant: 'dark',
  },
};
