import type { Meta, StoryObj } from '@storybook/react';
import { SignageHeader } from './SignageHeader';
import { ScreenFrame } from '../primitives/ScreenFrame';

const meta: Meta<typeof SignageHeader> = {
  title: 'Signage/Layouts/SignageHeader',
  component: SignageHeader,
  tags: ['autodocs'],
  argTypes: {
    tag: {
      control: 'text',
      description: 'Small tag/badge text above title',
    },
    tagVariant: {
      control: 'select',
      options: ['emerald', 'teal', 'blue', 'violet', 'pink', 'orange'],
      description: 'Tag color variant',
    },
    title: {
      control: 'text',
      description: 'Main title text',
    },
    subtitle: {
      control: 'text',
      description: 'Optional subtitle/description',
    },
    alignment: {
      control: 'radio',
      options: ['left', 'center'],
      description: 'Text alignment',
    },
  },
  decorators: [
    (Story) => (
      <ScreenFrame resolution="1080p" scale={0.4}>
        <div className="bg-slate-950 p-16">
          <Story />
        </div>
      </ScreenFrame>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof SignageHeader>;

/**
 * Simple header with title only
 */
export const TitleOnly: Story = {
  args: {
    title: 'Welcome',
    alignment: 'center',
  },
};

/**
 * Header with title and subtitle
 */
export const WithSubtitle: Story = {
  args: {
    title: 'KPI Dashboard',
    subtitle: 'Real-time metrics and performance indicators',
    alignment: 'center',
  },
};

/**
 * Header with tag (emerald variant)
 */
export const WithTag: Story = {
  args: {
    tag: 'Live Now',
    tagVariant: 'emerald',
    title: 'Conference Schedule',
    subtitle: 'View all sessions and workshops',
    alignment: 'center',
  },
};

/**
 * Left-aligned header
 */
export const LeftAligned: Story = {
  args: {
    tag: 'Today',
    tagVariant: 'blue',
    title: 'Daily Announcements',
    subtitle: 'Important updates and reminders',
    alignment: 'left',
  },
};

/**
 * Teal tag variant
 */
export const TealTag: Story = {
  args: {
    tag: 'Updated',
    tagVariant: 'teal',
    title: 'Office Directory',
    subtitle: 'Find team members and departments',
    alignment: 'center',
  },
};

/**
 * Violet tag variant
 */
export const VioletTag: Story = {
  args: {
    tag: 'Featured',
    tagVariant: 'violet',
    title: 'Employee Spotlight',
    subtitle: 'Celebrating our team members',
    alignment: 'center',
  },
};

/**
 * Pink tag variant
 */
export const PinkTag: Story = {
  args: {
    tag: 'Special Event',
    tagVariant: 'pink',
    title: 'Holiday Celebration',
    subtitle: 'Join us for festive activities',
    alignment: 'center',
  },
};

/**
 * Orange tag variant
 */
export const OrangeTag: Story = {
  args: {
    tag: 'Alert',
    tagVariant: 'orange',
    title: 'Maintenance Notice',
    subtitle: 'Scheduled downtime information',
    alignment: 'center',
  },
};

/**
 * Long title demonstrating text handling
 */
export const LongTitle: Story = {
  args: {
    tag: 'Q1 2026',
    tagVariant: 'blue',
    title:
      'Annual Company Performance Review and Strategic Planning Session',
    subtitle:
      'Comprehensive analysis of achievements, challenges, and future objectives for sustained organizational growth',
    alignment: 'center',
  },
};

/**
 * Header with custom children content
 */
export const WithCustomContent: Story = {
  args: {
    tag: 'Live',
    tagVariant: 'emerald',
    title: 'Sales Metrics',
    subtitle: 'Real-time performance tracking',
    alignment: 'center',
    children: (
      <div className="mt-6 flex justify-center gap-4">
        <div className="text-center">
          <div className="text-4xl font-bold text-white">$1.2M</div>
          <div className="text-sm text-slate-400">Revenue</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-white">156</div>
          <div className="text-sm text-slate-400">Orders</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-white">24.8%</div>
          <div className="text-sm text-slate-400">Conversion</div>
        </div>
      </div>
    ),
  },
};
